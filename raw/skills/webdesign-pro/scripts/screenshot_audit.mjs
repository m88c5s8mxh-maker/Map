#!/usr/bin/env node
/**
 * screenshot_audit.mjs
 *
 * Playwright-basierter visueller QA-Check für den webdesign-pro Skill.
 *
 * Usage:
 *   node screenshot_audit.mjs <path-to-html-file> <output-dir>
 *
 * Rendert die Seite bei Desktop- und Mobile-Breite, speichert Full-Page
 * Screenshots und schreibt results.json mit:
 *   - console errors pro Viewport
 *   - automatisierte Checks (viewport meta tag, alt-text coverage,
 *     Anzahl unterschiedlicher font-families / background-colors,
 *     grober Kontrast-Sample zwischen Text- und Hintergrundfarbe)
 *
 * Benötigt: `npm install playwright` (+ `npx playwright install chromium`)
 * einmalig in der Sandbox, siehe SKILL.md Schritt 5.
 */

import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";
import url from "node:url";

const [, , htmlPathArg, outDirArg] = process.argv;

if (!htmlPathArg || !outDirArg) {
  console.error("Usage: node screenshot_audit.mjs <path-to-html-file> <output-dir>");
  process.exit(1);
}

const htmlPath = path.resolve(htmlPathArg);
const outDir = path.resolve(outDirArg);
fs.mkdirSync(outDir, { recursive: true });

const fileUrl = url.pathToFileURL(htmlPath).href;

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

// Rough relative luminance contrast ratio (WCAG-style approximation)
function luminance([r, g, b]) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function contrastRatio(rgb1, rgb2) {
  const l1 = luminance(rgb1) + 0.05;
  const l2 = luminance(rgb2) + 0.05;
  return l1 > l2 ? l1 / l2 : l2 / l1;
}

function parseRgb(str) {
  const m = str.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);
  if (!m) return null;
  return [parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])];
}

async function run() {
  const browser = await chromium.launch();
  const results = { file: htmlPath, viewports: {} };

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    const consoleErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", (err) => consoleErrors.push(String(err)));

    await page.goto(fileUrl, { waitUntil: "networkidle" });

    const screenshotPath = path.join(outDir, `${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    const checks = await page.evaluate(() => {
      const hasViewportMeta = !!document.querySelector('meta[name="viewport"]');

      const imgs = Array.from(document.querySelectorAll("img"));
      const imagesWithoutAlt = imgs.filter(
        (img) => !img.getAttribute("alt") || img.getAttribute("alt").trim() === ""
      ).length;

      const allEls = Array.from(document.querySelectorAll("body *"));
      const fontFamilies = new Set();
      const bgColors = new Set();
      allEls.forEach((el) => {
        const cs = getComputedStyle(el);
        fontFamilies.add(cs.fontFamily);
        if (cs.backgroundColor && cs.backgroundColor !== "rgba(0, 0, 0, 0)") {
          bgColors.add(cs.backgroundColor);
        }
      });

      // Sample a handful of text-bearing elements for contrast checking
      const sampleNodes = allEls
        .filter((el) => el.children.length === 0 && el.textContent.trim().length > 0)
        .slice(0, 25)
        .map((el) => {
          const cs = getComputedStyle(el);
          return { color: cs.color, backgroundColor: cs.backgroundColor };
        });

      const headings = Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6")).map(
        (h) => h.tagName
      );

      return {
        hasViewportMeta,
        imageCount: imgs.length,
        imagesWithoutAlt,
        distinctFontFamilies: fontFamilies.size,
        distinctBackgroundColors: bgColors.size,
        headingSequence: headings,
        sampleNodes,
      };
    });

    // Compute contrast ratios for sampled nodes where we can parse colors
    let lowContrastCount = 0;
    const contrastSamples = [];
    for (const node of checks.sampleNodes) {
      const fg = parseRgb(node.color);
      let bg = parseRgb(node.backgroundColor);
      if (fg && bg) {
        const ratio = contrastRatio(fg, bg);
        contrastSamples.push({ ratio: Number(ratio.toFixed(2)) });
        if (ratio < 4.5) lowContrastCount++;
      }
    }
    delete checks.sampleNodes;

    results.viewports[vp.name] = {
      screenshot: screenshotPath,
      consoleErrors,
      checks: {
        ...checks,
        contrastSamples,
        lowContrastSampleCount: lowContrastCount,
      },
    };

    await context.close();
  }

  await browser.close();

  const resultsPath = path.join(outDir, "results.json");
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log(`Screenshots + results written to ${outDir}`);
  console.log(JSON.stringify(results, null, 2));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

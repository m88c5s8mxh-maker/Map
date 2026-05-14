---
tags: [concept, threejs, webgl, shader, glsl, parallax]
sources: [cinematic-threejs-techniques.md]
updated: 2026-05-14
---

# Backdrop Shader — Animated Images

ShaderMaterial-Muster um statische JPG/PNG Backdrop-Planes lebendig zu machen.
Einsatz: jede 3D-Szene mit Hintergrundbild hinter einem Objekt.

## Fragment Shader Kernfeatures

```glsl
uniform sampler2D map;
uniform float opacity;
uniform float time;
uniform float shimmer;   // 0=normal, 1=gem crystal
uniform vec2 uvOff;      // parallax offset (driven by camera.position)
uniform float loaded;    // graceful: 0 until texture ready

void main() {
  if (loaded < .5) { gl_FragColor = vec4(0.); return; }
  vec2 uv = vUv + uvOff;

  // UV Warp — organische Verzerrung
  float warp = shimmer * (.006*sin(uv.y*13.+time*1.9) + .004*cos(uv.x*11.+time*1.4));
  uv += warp;

  // Breath micro-loop (Spring stiffness:100 feel)
  float breath = 1. + .008*sin(time*.55)*sin(time*.37+1.2);
  uv = (uv-.5)*breath + .5;

  vec4 tex = texture2D(map, clamp(uv, .005, .995));

  // Gem specular flash
  float s1 = sin(uv.x*12.+time*2.4) * sin(uv.y*9.+time*1.8);
  float s2 = sin(uv.x*7.-time*1.6) * cos(uv.y*14.+time*2.1);
  float spec = shimmer * pow(max(0., s1*s2+.35), 9.) * .28;

  // Tiefenvignette
  float vig = 1. - smoothstep(.35, .95, length((vUv-.5)*vec2(1.6,1.)));
  gl_FragColor = vec4(tex.rgb*(vig*.4+.6)+spec, tex.a*opacity);
}
```

## Parallax Drive (JavaScript)

```javascript
// In updateWalls() pro Backdrop-Plane:
var px = camera.position.x * 0.14;
var py = (camera.position.y - wallYCenter) * 0.07;
mat.uniforms.uvOff.value.set(px / planeW, py / planeH);
mat.uniforms.time.value = performance.now() * 0.001;
```

## Shimmer-Varianten

| shimmer | Effekt | Einsatz |
|---------|--------|---------|
| 0.0 | nur Breath + Vignette | Stein/Gold-Wände |
| 0.4 | leichte Wellen | Cave/Wasser |
| 1.0 | voller Kristall-Flash | Ruby/Sapphire/Diamond |

## Verbindungen

- [[Cinematic Three.js Scrollytelling]]
- [[Creative Arsenal — Bento Grid, Masonry, Magnetic Button, Gooey Menu, Parallax Tilt Card, etc.]]

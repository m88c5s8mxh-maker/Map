# Cinematic Three.js Techniques — MARCINIOO'S Landing Page

## Project
Luxury perfume brand scrollytelling experience. Space → Earth → Forest → Wall-Fly-Through journey.

## Key Techniques Implemented

### 1. Earth-to-Forest Aerial Transition
- CSS overlay div (`#aerial-forest`) with `forest-aerial.png` (drone shot)
- Fades in at p=0.07–0.14 as Earth fills screen
- Scale zoom 1.0→1.12 + slow backgroundPosition pan simulates satellite descent
- Atmosphere bloom flash (white radial gradient) on entry moment
- Earth MeshPhongMaterial opacity out synced with aerial fade-in
- Result: seamless "falling through Earth into forest" effect

### 2. Animated ShaderMaterial Backdrops
```glsl
// Key fragment shader features:
// - UV warp: sin/cos distortion (shimmer param controls intensity)
// - Breath micro-loop: scale oscillation sin(time*.55)*sin(time*.37) → spring feel
// - Gem specular: cross-multiplied sine waves → crystal flash
// - Depth vignette: darkened edges = 3D depth illusion
// - Parallax: uvOff uniform driven by camera.position.x * 0.14
```
- Non-gem walls: warp=0, only breath + vignette
- Gem walls (ruby/sapphire/diamond): full shimmer=1.0

### 3. Procedural Water Stream
- PlaneGeometry(2.2, 120) rotated -π/2 on forest path
- 3-wave interference (Gerstner-style): `w1*0.4 + w2*0.35 + w3*0.25`
- Moon specular highlight: `pow(max(0, wave-0.6)*2.5, 8.0)*0.65`
- Edge alpha falloff via `1 - smoothstep(0, 0.85, cx²)`

### 4. God Rays (Volumetric Light Shafts)
- 14 ConeGeometry meshes, AdditiveBlending, downward orientation
- Organic pulse: `0.65 + sin(frame*0.007 + phase)*0.35`
- Flutter: `1 + sin(frame*0.031 + phase*2.3)*0.08`
- z-positions span entire forest corridor (-6 to -114)

### 5. Atmospheric Dust Motes
- 300 PointsMaterial particles, gold color (0xD4AF37), AdditiveBlending
- Slow drift upward + random XZ wander
- Appear at p=0.30, peak at p=0.44, fade at p=0.88

### 6. 3D Bottle — Two-Layer Approach
- Layer 1: Sprite with bottle.png billboard (main visual)
- Layer 2: CylinderGeometry + Phong glass material (AdditiveBlending, opacity=0.55)
- Float animation: `sin(time*0.62)*0.14 + sin(time*0.41)*0.08` (spring physics feel)
- Rotation: `sin(time*0.28)*0.18` gentle sway

### 7. Chromatic Aberration
- JavaScript variable `aberrationAmt` decays by *0.82 per frame
- Applied as CSS filter on canvas: `hue-rotate(Xdeg) saturate(Y) brightness(Z)`
- Triggered at wall shatter start (shatterT < 0.03)

## Motion Philosophy (from Obsidian Wiki)
- Spring physics: stiffness:100, damping:20 → organic oscillation, not linear
- Perpetual micro-loops: every element has continuous subtle motion
- Staggered orchestration: elements animate in sequence

## Asset Pipeline
- Backdrops: ChatGPT DALL-E images → PNG → copied to Webdesign_extracted/assets/
- Aerial: Magnific AI upscale drone image → forest-aerial.png
- Earth frames: 10 probe frames animated at 12fps

## File
`/Users/tyrone/Desktop/Websites/MC finish.html` — 1390 lines

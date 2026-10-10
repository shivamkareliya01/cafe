---
name: Matcha Void
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c9ba'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c9385'
  outline-variant: '#42493d'
  surface-tint: '#a4d489'
  primary: '#a4d489'
  on-primary: '#103800'
  primary-container: '#4f7a3a'
  on-primary-container: '#d8ffc0'
  inverse-primary: '#3f692b'
  secondary: '#ffb77b'
  on-secondary: '#4c2700'
  secondary-container: '#703c01'
  on-secondary-container: '#f3a867'
  tertiary: '#ccc6b9'
  on-tertiary: '#333027'
  tertiary-container: '#736f64'
  on-tertiary-container: '#faf3e5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#bff0a3'
  primary-fixed-dim: '#a4d489'
  on-primary-fixed: '#062100'
  on-primary-fixed-variant: '#285015'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#ffb77b'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6d3a00'
  tertiary-fixed: '#e9e2d4'
  tertiary-fixed-dim: '#ccc6b9'
  on-tertiary-fixed: '#1e1b13'
  on-tertiary-fixed-variant: '#4a473c'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '500'
    lineHeight: 84px
    letterSpacing: -0.04em
  display-mobile:
    fontFamily: Geist
    fontSize: 44px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '500'
    lineHeight: 60px
    letterSpacing: -0.035em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 46px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
  label-meta:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-tablet: 3rem
  margin-desktop: 5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies an uncompromising luxury standard at the intersection of modern industrial technology and ceremonial ritual. Built for discerning consumers seeking an elevated ready-to-drink ritual, the aesthetic pairs the silent confidence of high-end hardware interfaces with the organic richness of shade-grown Japanese tencha.

The visual style is **Cinematic Dark Minimalism with Subtle Optical Luminescence**. The interface treats space as an infinite, light-absorbing gallery void where products, typography, and interactive touchpoints float with quiet architectural precision. Generous spatial pacing, hyper-deliberate typographic contrast, and hairline structural borders establish an aura of stillness, restraint, and obsessive craft.

## Colors

The palette establishes an obsidian stage that allows liquid tones to register as physical light. 

- **Primary (`#4F7A3A`)**: Deep ceremonial matcha green. Used sparingly for primary focal points, active state indicators, and diffuse ambient glows behind key vessel imagery.
- **Secondary (`#B8763A`)**: Warm espresso caramel. Serves as a rich pairing tone for flavor profiles, notes, secondary badges, and delicate warm highlights.
- **Cream (`#F2EBDD`)**: Soft oat cream. Used for high-emphasis editorial accents, high-end callouts, and key interaction state hover treatments.
- **Neutral Canvas (`#050505`)**: Pure light-absorbing black void serving as the base layer for all viewports.
- **Text & Foreground Hierarchy**:
  - Primary Titles & Headers: `rgba(255, 255, 255, 0.90)`
  - Secondary & Body Content: `rgba(255, 255, 255, 0.60)`
  - Tertiary & Meta Labels: `rgba(255, 255, 255, 0.38)`
- **Atmospheric Surfaces**:
  - Base Panel: `rgba(255, 255, 255, 0.03)`
  - Panel Border / Separators: `rgba(255, 255, 255, 0.08)`
  - Luminescent Matcha Aura: Radial gradient of `rgba(79, 122, 58, 0.15)` blurring outward to zero opacity over 480px.

## Typography

Typographic execution relies on a single, hyper-refined neo-grotesque family across all roles to maintain architectural purity. Hierarchy is enforced strictly through scale, weight contrast, and tight optical tracking.

- **Headlines & Display:** Set tightly with aggressive negative tracking (`-0.03em` to `-0.04em`), mimicking high-end editorial layouts and industrial hardware branding. Line heights are compact to create unified typographic blocks.
- **Body:** Renders in neutral, readable proportions with slightly open line spacing (`1.5` to `1.6`) to allow comfortable consumption over dark backdrops.
- **Micro-Labels & Technical Annotations:** Transformed into uppercase, tracking at `+0.12em`. Used for batch numbers, single-origin coordinates, tasting metric tags, and technical specs.

## Layout & Spacing

The spatial engine enforces breathing room as a luxury asset. The interface operates on a disciplined 12-column fluid grid on desktop, a 6-column grid on tablet, and a 4-column system on mobile devices, pinned inside an expansive maximum container width of 1440px.

- **Desktop (≥ 1024px):** `margin-desktop` sets a calm 80px (5rem) boundary. Gutters expand to 40px (2.5rem), creating gallery-grade breathing room around hero assets and product renders.
- **Tablet (768px – 1023px):** Margins drop to 48px (3rem) with 24px (1.5rem) gutters. Product details transition from side-by-side splits to alternating balanced stacks.
- **Mobile (< 768px):** Outer edge margin tightens to 20px (1.25rem). Dense technical cards stack vertically with persistent single-pixel separator rules.
- **Spatial Rhythm:** Sections employ sweeping vertical spans (often 120px to 180px between content beats) to maintain a cinematic pace rather than an e-commerce catalog cadence.

## Elevation & Depth

Depth is articulated through translucency, delicate optical boundaries, and spectral light bleed rather than traditional drop shadows.

- **Surface Translucency:** Floating panels utilize `rgba(255, 255, 255, 0.03)` with a `backdrop-filter: blur(24px) saturate(140%)`. This allows ambient product glows beneath the card to subtly tint the surface.
- **Hairline Outlines:** All elevated containers feature a crisp, unyielding `1px solid rgba(255, 255, 255, 0.08)`. Never use drop shadows to differentiate card bounds.
- **Matcha Glow System:** Key interaction modules and floating product containers cast an ultra-soft, low-saturation radial light:
  - Default Glow: `0 0 40px rgba(79, 122, 58, 0.08)`
  - Focused / Hover Glow: `0 0 64px rgba(79, 122, 58, 0.18)`
- **Connector Lines:** Thin geometric rules (`1px solid rgba(255, 255, 255, 0.08)`) connect product callouts to specific bottle features, establishing a clinical, studio-grade aesthetic.

## Shapes

The shape system contrasts architectural rectangular panels with fully sculpted pill geometry.

- **Primary Interactive Elements:** Action buttons, chips, micro-pills, and status capsules utilize maximum pill rounding (`9999px` / `rounded-full`), evoking the smooth ergonomics of cold stone or molded glassware.
- **Containers & Glass Panels:** Structural cards maintain sweeping 32px (`2rem`) radii on desktop and 24px (`1.5rem`) on mobile, softening the boundary between the panel and the deep black background.
- **Micro-Form Elements:** Checkboxes, inputs, and steppers employ a restrained 8px radius to retain geometric discipline within technical forms.

## Components

### Buttons
- **Primary Pill:** Background filled with oat cream `#F2EBDD`, text in `#050505` (`Geist`, 14px, weight 500). Full pill shape (`rounded-full`), height 48px, horizontal padding `2rem`. On hover, the background subtly shifts to pure white with an expansive outer matcha bloom.
- **Ghost Pill:** Background `rgba(255, 255, 255, 0.04)`, border `1px solid rgba(255, 255, 255, 0.12)`, text in `rgba(255, 255, 255, 0.90)`. On hover, border color shifts to `rgba(255, 255, 255, 0.30)` with background elevating to `rgba(255, 255, 255, 0.08)`.

### Glassmorphic Cards
Constructed with a base fill of `rgba(255, 255, 255, 0.03)`, `backdrop-filter: blur(20px)`, and a `1px` stroke in `rgba(255, 255, 255, 0.08)`. Content maintains generous internal padding (`space-lg` to `space-xl`). Never employ solid dark gray backgrounds; depth must always register as glass sitting over the black void.

### Input Fields
Resting state is a monolithic transparent pill or soft rectangle (`8px`) with `1px solid rgba(255, 255, 255, 0.10)` and `rgba(255, 255, 255, 0.02)` fill. Placeholder text in `rgba(255, 255, 255, 0.30)`. On focus, the border transitions cleanly to `rgba(79, 122, 58, 0.80)` accompanied by a 12px outer matcha green focus ring.

### Chips & Badges
Compact pill capsules (height 28px) with `rgba(255, 255, 255, 0.04)` fill and hairline `1px` border. Text uses `label-caps` in `rgba(255, 255, 255, 0.80)`. Active filter chips utilize the ceremonial green `#4F7A3A` fill with pure white text.

### Checkboxes & Radios
Minimalist 18px forms with `1px solid rgba(255, 255, 255, 0.20)` borders on a transparent canvas. Selected states fill cleanly with ceremonial green `#4F7A3A` and display an oat cream checkmark or central pip.

### Floating Product Stage (Custom Component)
A hero presentation module where high-resolution imagery of the bottle or vessel floats against the pure `#050505` backdrop. Behind the asset sits an organic radial gradient (`#4F7A3A` at 18% opacity, fading out across 500px). Thin hairline connector lines extend from specific product attributes (e.g., "First Harvest Tencha", "Triple-Filtered Water") leading to frosted micro-capsules containing uppercase technical specs.
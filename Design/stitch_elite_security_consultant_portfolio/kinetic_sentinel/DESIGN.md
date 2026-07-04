---
name: Kinetic Sentinel
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#fff5de'
  on-tertiary: '#3a3000'
  tertiary-container: '#ffd700'
  on-tertiary-container: '#705d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffe16d'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  button:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  unit: 8px
---

## Brand & Style

The design system is engineered to evoke a sense of absolute digital sovereignty and elite technical precision. Targeting C-suite executives and specialized security engineers, the visual narrative balances institutional authority with cutting-edge defensive capabilities.

The aesthetic follows a **Modern Corporate** style with **Vibrant Tech** accents. It utilizes a layered dark-mode architecture to move away from traditional "all-white" layouts, favoring deep, multi-dimensional surfaces that suggest a high-security command center. High-contrast typography and strategic neon highlights ensure that critical security data remains legible and urgent. The emotional response is one of calm confidence in the face of complex threats.

## Colors

The palette is built on a foundation of 'Midnight Cyber' and 'Strategic Navy' to establish depth and trust.

- **Primary (Electric Cyan):** Used sparingly for critical calls to action, active states, and high-priority security alerts. It represents the "Kinetic" energy of the brand.
- **Secondary (Deep Slate/Navy):** The primary surface color. It provides a sophisticated, low-fatigue background for long-term monitoring and strategic planning.
- **Tertiary (Cyber Gold):** Reserved for "Authorized" or "Premium" status indicators and high-level consulting markers, suggesting institutional value.
- **Neutral (Cool Gray):** Used for secondary text and structural borders to maintain a professional, technical hierarchy.

Backgrounds should utilize subtle linear gradients (e.g., from `#0F172A` to `#020617`) to prevent flat, "dead" dark spaces.

## Typography

The typography system utilizes **Hanken Grotesk** for its sharp, contemporary grotesque characteristics, providing a clean and technical feel. 

**JetBrains Mono** (or similar monospaced font) is introduced for labels, metadata, and code snippets to reinforce the cybersecurity context. Headlines use tighter letter-spacing and heavier weights to command authority. Body text maintains generous line-height for readability against dark backgrounds. All caps should be used exclusively for `label-sm` to denote system status or categories.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A strict **8px base unit** governs all spatial relationships.

- **Desktop:** 24px gutters with 40px side margins. Content is centered within a 1280px max-width container.
- **Mobile:** 16px gutters and margins.
- **Vertical Spacing:** Use consistent multipliers of the 8px unit (16, 24, 32, 48, 64) to create a rhythmic hierarchy between sections.

Information-dense dashboards should utilize "compact" spacing (4px/8px) while marketing and editorial pages should leverage "spacious" padding (64px+) to evoke a premium feel.

## Elevation & Depth

Depth is achieved through **Tonal Layering** rather than traditional shadows. Surfaces closer to the user are lighter in tone.

- **Level 0 (Base):** Deepest navy (`#020617`).
- **Level 1 (Cards/Sections):** Slightly lighter navy (`#0F172A`) with a subtle 1px border in a low-opacity neutral (`rgba(148, 163, 184, 0.1)`).
- **Level 2 (Modals/Popovers):** Surface color of `#1E293B` with a soft, cyan-tinted ambient glow (`0px 8px 30px rgba(0, 240, 255, 0.05)`).

Avoid heavy black shadows; instead, use inner glows or subtle border highlights on the top edge to simulate a light source from above.

## Shapes

The design system uses a **Soft (Level 1)** roundedness profile to balance technical precision with modern approachability. 

- **Standard Elements (Buttons, Inputs):** 0.25rem (4px) radius. This creates a crisp, professional edge.
- **Containers (Cards, Modals):** 0.5rem (8px) radius for a more substantial, structural look.
- **Interactive Indicators:** Small 2px radius or sharp edges for data visualization markers to maintain a "scientific" feel.

## Components

### Buttons
- **Primary:** Solid Cyan (`#00F0FF`) background with dark slate text. No gradient. On hover, a subtle cyan outer glow.
- **Secondary:** Transparent background with a 1px Silver/Gray border.
- **Ghost:** Monospaced text with a bracketed hover effect (e.g., `[ VIEW REPORT ]`).

### Input Fields
Darker than the card surface with a 1px border. Focus state triggers a Primary Cyan border and a soft inner glow. Labels use `label-sm` monospaced font above the field.

### Cards
Cards are the primary container. They should use a subtle top-to-bottom gradient and a thin, low-opacity border. For high-priority alerts, the left border can be thickened (4px) and colored in Primary Cyan.

### Chips & Tags
Small, 4px rounded capsules. Use background tints of the primary color at 10% opacity with 100% opacity text for a "glass" look.

### Specialized Components
- **Data Visualizer:** Line charts using Primary Cyan with a gradient area fill.
- **Security Badge:** Hexagonal icon containers to reinforce the "Sentinel" metaphor.
- **Status Indicators:** Glowing dots (pulsing for active threats) to draw immediate visual attention.
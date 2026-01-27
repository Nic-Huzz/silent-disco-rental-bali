# Silent Disco Rental Bali — Brand Guide

## Brand Overview
- **Business**: Silent Disco Rental Bali
- **Tagline**: "Bali's #1 Silent Disco Provider"
- **Established**: 2023
- **Tone**: Professional yet approachable, energetic, trustworthy

---

## Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Purple** | `#5e17eb` | Main brand color, CTAs, headings, accents |
| **Primary Dark** | `#4a0ea8` | Hover states, gradients, darker sections |
| **Primary Light** | `#7c3aed` | Gradients, lighter accents |

### Secondary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Gold/Yellow** | `#ffdd27` | Secondary CTAs, highlights, badges, accent text |
| **Gold Dark** | `#f59e0b` | Gradients, hover states on gold elements |

### Neutral Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **White** | `#ffffff` | Backgrounds, text on dark |
| **Foreground** | `#171717` | Body text on light backgrounds |
| **Gray 50** | `#f9fafb` | Light section backgrounds |
| **Gray 400** | `#9ca3af` | Muted text, placeholders |
| **Gray 600** | `#4b5563` | Secondary body text |
| **Gray 900** | `#111827` | Footer, dark sections |

### Accent
| Color | Hex | Usage |
|-------|-----|-------|
| **Accent Green** | `#10B981` | Success states, gradient text |

---

## Typography

### Font Family
- **Primary**: Geist Sans (fallback: Arial, Helvetica, sans-serif)
- **Monospace**: Geist Mono

### Font Sizes (Tailwind classes)
| Element | Mobile | Desktop |
|---------|--------|---------|
| H1 (Hero) | `text-3xl` / `text-4xl` | `text-5xl` / `text-6xl` |
| H2 (Section) | `text-2xl` / `text-3xl` | `text-3xl` / `text-4xl` |
| H3 (Card titles) | `text-xl` | `text-xl` / `text-2xl` |
| Body | `text-base` | `text-base` / `text-lg` |
| Small/Caption | `text-xs` / `text-sm` | `text-sm` |

### Font Weights
- **Bold**: `font-bold` (700) — Headings
- **Semibold**: `font-semibold` (600) — Subheadings, labels, CTAs
- **Regular**: `font-normal` (400) — Body text

---

## Gradients

### Purple Background Gradient
```css
background: linear-gradient(135deg, #4a0ea8 0%, #5e17eb 50%, #7c3aed 100%);
```
**Tailwind**: `bg-gradient-to-br from-[#5e17eb] to-[#4a0ea8]`

### Gold Background Gradient
```css
background: linear-gradient(to bottom, #ffdd27, #f59e0b);
```
**Tailwind**: `bg-gradient-to-b from-[#ffdd27] to-[#f59e0b]`

### Gold Accent Glow (overlay)
```css
background: radial-gradient(ellipse, rgba(255, 221, 39, 0.15) 0%, transparent 60%);
```

### Gradient Text
```css
background: linear-gradient(135deg, #5e17eb 0%, #10B981 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Buttons & CTAs

### Primary Button (Purple)
```
bg-[#5e17eb] text-white px-6 py-3 rounded-full font-semibold
hover:bg-[#4a0ea8] transition-colors
```

### Primary Button (Gold)
```
bg-[#ffdd27] text-[#5e17eb] px-6 py-3 rounded-full font-semibold
hover:bg-white transition-colors
```

### Secondary/Ghost Button
```
bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full
font-semibold hover:bg-white/20 transition-colors
```

### Button Sizes
- **Large**: `px-8 py-4 text-lg`
- **Default**: `px-6 py-3`
- **Small**: `px-4 py-2 text-sm`

### Always include:
- `rounded-full` for pill shape
- `font-semibold`
- `transition-colors` for smooth hover
- Icon + text gap: `gap-2`

---

## Section Patterns

### Light Section (White)
```
className="py-20 bg-white"
```
- Text: `text-gray-900` (headings), `text-gray-600` (body)
- Accent label: `text-[#5e17eb] font-semibold`

### Light Section (Gray)
```
className="py-16 bg-gray-50"
```

### Purple Section
```
className="py-20 bg-gradient-to-br from-[#5e17eb] to-[#4a0ea8]"
```
- Text: `text-white` (headings), `text-white/80` or `text-white/70` (body)
- Accent label: `text-[#ffdd27] font-semibold`

### Gold Section
```
className="py-20 bg-gradient-to-b from-[#ffdd27] to-[#f59e0b]"
```
- Text: `text-[#5e17eb]` (headings), `text-[#5e17eb]/70` (body)
- Accent elements: Purple (`bg-[#5e17eb]`, `text-white`)

### Dark Section (Footer/Video)
```
className="py-16 bg-gray-900"
```
- Text: `text-white` (headings), `text-gray-400` (body)

---

## Cards & Containers

### Standard Card
```
bg-white rounded-2xl shadow-lg p-6
hover:shadow-xl transition-shadow
```

### Purple Tinted Card
```
bg-[#5e17eb]/5 rounded-2xl p-6
```
or
```
bg-gradient-to-br from-[#5e17eb]/10 to-[#5e17eb]/5 rounded-2xl
```

### Glass Card (on dark backgrounds)
```
bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8
```

### Border Radius
- **Cards/Containers**: `rounded-2xl` (16px)
- **Buttons**: `rounded-full`
- **Small elements**: `rounded-lg` (8px) or `rounded-xl` (12px)

---

## Spacing

### Section Padding
- **Vertical**: `py-16` (mobile) / `py-20` (desktop)
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Content Spacing
- **Between sections**: Already handled by section padding
- **Section header to content**: `mb-12` or `mb-16`
- **Between cards/items**: `gap-8`
- **Within cards**: `p-6` or `p-8`

---

## Shadows & Effects

### Card Shadow
```
shadow-lg
hover:shadow-xl transition-shadow
```

### Purple Glow Shadow
```
box-shadow: 0 10px 30px rgba(94, 23, 235, 0.15);
```

### Pulse Glow Animation
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(94, 23, 235, 0.3); }
  50% { box-shadow: 0 0 40px rgba(94, 23, 235, 0.5); }
}
```

### Float Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

---

## Icons & Badges

### Checkmark in Circle (Features list)
```jsx
<span className="w-6 h-6 bg-[#ffdd27] rounded-full flex items-center justify-center">
  <svg className="w-4 h-4 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
</span>
```

### Badge/Tag
```
bg-white/10 border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-sm font-semibold
```

### Number Circle (Steps)
```
bg-[#5e17eb] w-16 h-16 rounded-full flex items-center justify-center
<span className="text-2xl font-bold text-white">1</span>
```
Or inverted:
```
bg-[#ffdd27] ... text-[#5e17eb]
```

---

## Images

### Image Containers
- Always use `rounded-2xl overflow-hidden`
- Use `object-cover` for background images
- Add gradient overlays for text readability:
  ```
  bg-gradient-to-t from-black/70 to-transparent
  ```

### Aspect Ratios
- **Hero**: `aspect-[4/3]` (mobile), natural (desktop)
- **Cards**: `aspect-[4/3]` or `aspect-square`
- **Video (vertical)**: `aspect-[9/16]`
- **Video (horizontal)**: `aspect-video`

---

## Responsive Breakpoints

Following Tailwind defaults:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Mobile-First Patterns
```
text-3xl md:text-4xl lg:text-5xl
py-16 md:py-20
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

---

## Accessibility

- Minimum tap target: `44px` on mobile
- Color contrast: White on purple passes WCAG AA
- Always include `aria-label` on icon-only buttons
- Use semantic HTML (`section`, `nav`, `footer`)
- Smooth scroll: `scroll-behavior: smooth`
- Scroll padding for fixed header: `scroll-padding-top: 80px`

---

## Component Examples

### Section Header Pattern
```jsx
<div className="text-center mb-12">
  <p className="text-[#5e17eb] font-semibold mb-2">Section Label</p>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    Section Heading
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto">
    Supporting description text goes here.
  </p>
</div>
```

### WhatsApp CTA Button
```jsx
<a
  href="https://wa.me/6282266355322"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-[#5e17eb] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4a0ea8] transition-colors"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    {/* WhatsApp icon path */}
  </svg>
  Get a Quote
</a>
```

---

## CSS Variables Reference

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #5e17eb;
  --primary-dark: #4a0ea8;
  --primary-light: #7c3aed;
  --secondary: #ffdd27;
  --secondary-dark: #f59e0b;
  --accent: #10B981;
}
```

---

## Quick Reference

| Element | Purple Version | Gold Version |
|---------|---------------|--------------|
| Background | `bg-[#5e17eb]` | `bg-[#ffdd27]` |
| Text on light | `text-[#5e17eb]` | `text-[#f59e0b]` |
| Text on dark | `text-white` | `text-[#ffdd27]` |
| Button | `bg-[#5e17eb] text-white` | `bg-[#ffdd27] text-[#5e17eb]` |
| Hover | `hover:bg-[#4a0ea8]` | `hover:bg-white` |
| Accent label | `text-[#5e17eb]` | `text-[#ffdd27]` |

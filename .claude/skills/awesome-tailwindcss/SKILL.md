---
name: awesome-tailwindcss
description: Use when picking a Tailwind CSS tool, UI/component library, template, plugin, IDE extension, or color-palette generator — a curated directory of the Tailwind CSS ecosystem to consult before reaching for a default or unfamiliar option.
---

# Awesome Tailwind CSS

Curated directory of the Tailwind CSS ecosystem (source: [aniftyco/awesome-tailwindcss](https://github.com/aniftyco/awesome-tailwindcss)). Consult before picking a component library, color tool, plugin, or template so the choice is informed rather than the first thing that comes to mind.

## Useful links

- [Tailwind CSS docs](https://tailwindcss.com) / [repo](https://github.com/tailwindcss/tailwindcss)
- [Tailwind Plus](https://tailwindcss.com/plus) — official UI blocks, templates, UI kit
- [Headless UI](https://github.com/tailwindlabs/headlessui) — unstyled, accessible components
- [Heroicons](https://heroicons.com/) — official SVG icon set
- [Play](https://play.tailwindcss.com/) — online playground

## IDE extensions

- [Tailwind IntelliSense (VS Code)](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) — official
- [lsp-tailwindcss (Emacs)](https://github.com/merrickluo/lsp-tailwindcss)
- [VS2022 editor support](https://github.com/theron-wang/VS2022-Editor-Support-for-Tailwind-CSS)

## Tools

**Color palette generators:** [UI Colors](https://uicolors.app/create) · [Tailwind Color Shades](https://javisperez.github.io/tailwindcolorshades) · [TailwindInk](https://tailwind.ink/) (AI) · [Hypercolor](https://hypercolor.dev/) (gradients) · [Tints](https://www.tints.dev/) · [Fullwind CSS](https://fullwindcss.com/) · [Inclusive Colors](https://www.inclusivecolors.com/) (WCAG-aware) · [FreeColorPalettes.co](https://freecolorpalettes.co/tints-shades) (hex → 50-950 scale)

**Formatting/sorting:** [Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) (official) · [RustyWind](https://github.com/avencera/rustywind) (CLI class sorter)

**Conversion:** [Prefixer](https://github.vue.tailwind-prefix.cbass.dev) · [Tailwind → inline styles](https://github.com/vardan-arm/tailwind-to-inline) (for email templates)

**Framework/ecosystem integrations:** [Maizzle](https://maizzle.com/) (email framework) · [@nuxtjs/tailwindcss](https://github.com/nuxt-community/tailwindcss-module) · [tailwindcss-rails](https://github.com/rails/tailwindcss-rails) · [NativeWind](https://www.nativewind.dev) (React Native) · [Config Viewer](https://github.com/rogden/tailwind-config-viewer)

**Browser extensions:** [Gimli Tailwind](https://chromewebstore.google.com/detail/gimli-tailwind/fojckembkmaoehhmkiomebhkcengcljl) · [CSS Variables Editor](https://www.cssvariables.com) (daisyUI/shadcn theming) · [DivMagic](https://divmagic.com) (element → Tailwind component)

## UI libraries, components & templates

**Component libraries:** [Tailwind UI](https://tailwindcss.com/plus/ui-blocks/marketing) (official) · [shadcn/ui](https://ui.shadcn.com) · [HyperUI](https://hyperui.dev) · [Meraki UI](https://merakiui.com) (RTL support) · [Preline UI](https://preline.co) · [Ripple UI](https://www.ripple-ui.com) · [Pines UI](https://devdojo.com/pines) (Alpine.js) · [Kokonut UI](https://kokonutui.com/) · [Flowbite](https://flowbite.com/docs/getting-started/introduction/) · [daisyUI](https://github.com/saadeghi/daisyui) · [Kometa UI Kit](https://kitwind.io/products/kometa/components) · [8bitcn UI](https://8bitcn.com) (retro/shadcn-based) · [Xtend UI](https://github.com/xtendui/xtendui) (advanced interactions) · [Tremor](https://tremor.so) (charts/dashboards, React)

**UI kits/frameworks:** [Headless UI](https://headlessui.com/) · [Catalyst](https://tailwindcss.com/plus/ui-kit) (React, official) · [Layouts for Tailwind](https://layoutsfortailwind.lalokalabs.dev)

**Full templates:** [Built at Lightspeed](https://www.builtatlightspeed.com/) (500+ templates directory) · [Admin One (Vue 3)](https://github.com/justboil/admin-one-vue-tailwind) · [Admin One (React/Next.js)](https://github.com/justboil/admin-one-react-tailwind) · [Flowbite Admin Dashboard](https://github.com/themesberg/flowbite-admin-dashboard) · Astro starters: [Resume](https://github.com/fortezhuo/fortezhuo.my.id), [Cactus](https://github.com/chrismwilliams/astro-theme-cactus), [Ovidius](https://github.com/JustGoodUI/ovidius-astro-theme), [Dante](https://github.com/JustGoodUI/dante-astro-theme)

## Plugins

- [Typography](https://github.com/tailwindlabs/tailwindcss-typography) — official, `prose` class for article/markdown content
- [Forms](https://github.com/tailwindlabs/tailwindcss-forms) — official, sane default form element styles
- [Themer](https://github.com/RyanClementsHax/tailwindcss-themer) — CSS-variable-based theming/variants
- [Fluid](https://github.com/barvian/fluid-tailwind) — `clamp()` fluid versions of built-in utilities
- [Bootstrap grid](https://github.com/karolis-sh/tailwind-bootstrap-grid)
- [Dot & grid backgrounds](https://github.com/TheNaubit/tailwind-dot-grid-backgrounds)
- [Leading Trim](https://github.com/stormwarning/tailwindcss-capsize) — trims text whitespace via Capsize
- [Scrollbar Hide](https://github.com/reslear/tailwind-scrollbar-hide)
- [px to viewport](https://github.com/the-lemonboy/tailwindcss-px-to-viewport)
- [tailwind-hitslop](https://github.com/Jubstaaa/tailwind-hitslop) — expand touch targets
- [tw-fade](https://github.com/petekp/tw-fade) — scroll-aware edge fading
- [Debug screens](https://github.com/jorenvanhee/tailwindcss-debug-screens) — shows active breakpoint

## When picking a component library

No single "best" — match to context:
- Need Radix-based, copy-into-repo components → **shadcn/ui**
- Need RTL support → **Meraki UI**
- Need a huge free template catalog → **Built at Lightspeed**
- Already using Alpine.js → **Pines UI**
- Need dashboards/charts in React → **Tremor**
- Need official, paid, production-polished blocks → **Tailwind UI / Catalyst**

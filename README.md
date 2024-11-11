<p align="center">
  <a href="https://kokonut.dev" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/logo-text-black-5nhu7g0JeNUhIuSzJyMXc11GATRT5V.png">
      <source media="(prefers-color-scheme: dark)" srcset="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/logo-text-white-ny4myAjOAftDwH1fsmwyA265oUcecd.png">
      <img alt="Tailwind CSS" src="https://raw.githubusercontent.com/kokonut-labs/kokonutui/refs/heads/main/public/logo-black.svg" width="350" height="120" style="max-width: 100%;">
    </picture>
  </a>
</p>

## Overview

Access a collection of free-to-use, standalone components with KokonutUI. Each component is designed with TailwindCSS, and optionally with shadcn.

This is not a library, it's a collection of components / hooks that you can copy paste and customize to your preference.

## Getting Started

KokonutUI components are meant to be use with Next.js projects that use TailwindCSS and shadcn. However they are also compatible with any React Project.

### Import Components, Hooks...

All components are standalone and can be installed using [shadcn CLI](https://ui.shadcn.com/docs/cli), which make it very easy.

#### A component

```bash
bunx shadcn@latest add https://kokonut.dev/registry/alert-01.json
```

```jsx
import AIInput01 from "@/components/ai-input/ai-input-01";

export function AIInput01Demo() {
    return <AIInput01 />;
}
```

#### A file

```bash
bunx shadcn@latest add https://kokonut.dev/registry/utils.json
```

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
```

### Installation

[Docs](https://kokonut.dev/docs)

## Contributing

They are no way to contribute for now.

## License

This project is licensed under the MIT License.

## Note

This is a work in progress project, you can follow updates at [@dorian](https://x.com/dorian_baffier)

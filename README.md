
# Take Home Test – Marketing Landing Page

## Overview

This project is a **marketing landing page** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
The main goal is to demonstrate how a real-world, production-ready landing page could be structured, focusing on:

- Clean and scalable component architecture
- Reusable UI components (Atomic Design)
- Responsiveness, accessibility, performance, and SEO fundamentals
- Code that is easy to read, maintain, and extend

This is not just a visual demo. It’s structured the way a real product page would be built.

---

## Tech Stack

- **Node.js**: recommended `>= 18`
- **Next.js** (App Router)
- **React + TypeScript**
- **Tailwind CSS**
- **ESLint**
- **PostCSS**

---

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open:

```
http://localhost:3000
```

---

## What I Built & How to Navigate

### Main Page

The main landing page lives here:

```
src/app/(marketing)/page.tsx
```

This file acts as a **page composer**. It doesn’t contain heavy UI logic, only imports and arranges sections in order:

- Hero
- Intro
- Welcoming
- Services
- Products
- Process
- Banner (CTA)
- Footer

Each section is separated to keep the page clean and easy to reason about.

---

## Component Architecture (Atomic Design)

This project follows **Atomic Design** to keep UI components consistent and scalable.

### Atoms

Small, fundamental UI building blocks.  
They don’t manage layout or business logic.

Location:
```
src/components/atoms
```

Examples:
- Button
- Typography
- Container
- Divider
- Logo
- Background

Atoms focus on styling, semantics, and basic behavior.

---

### Molecules

Combinations of atoms that form small, reusable UI patterns.

Location:
```
src/components/molecules
```

Examples:
- CTAButton
- Card
- Badge
- HeroHeading
- BrandList

Molecules may include simple logic or variations, but remain reusable.

---

### Organisms

Larger UI blocks that represent complete sections of the page.

Location:
```
src/components/organisms
```

Examples:
- Header
- Hero
- Intro
- Services
- Products
- Process
- Banner
- Footer

Organisms handle layout and composition by combining atoms and molecules.

---

### Sections (Page-Level)

Location:
```
src/app/(marketing)/sections
```

Sections connect page-level routing with organisms.  
This keeps organisms reusable and prevents page-specific logic from leaking into core components.

---

## Data Handling

- Static content is stored in:
  ```
  src/data/data.ts
  ```
- Shared types are defined in:
  ```
  src/types/type.ts
  ```

This separation keeps components presentational and makes future API integration straightforward.

---

## Key Technical Decisions & Trade-offs

### Next.js App Router

Chosen for:
- Built-in SEO support
- Clean layout and metadata handling
- Long-term scalability

Trade-off:
- Requires discipline in folder structure to stay organized.

---

### Atomic Design

Chosen to:
- Improve consistency
- Encourage reusability
- Make the UI easier to scale

Trade-off:
- More files upfront, but much cleaner as the project grows.

---

### Tailwind CSS

Chosen because:
- Fast iteration from Figma
- Consistent design system
- Minimal custom CSS

Trade-off:
- Utility classes can be verbose, but manageable with well-structured components.

---

## Responsiveness

- Responsive utilities (`sm`, `md`, `lg`) are used consistently
- Layout relies on Flexbox and Grid
- Content is restructured for mobile, not just scaled down
- Images adapt to different screen sizes

---

## Accessibility (a11y)

Considerations include:
- Semantic HTML elements
- Proper heading hierarchy (`h1` → `h2` → `h3`)
- Buttons and links use correct HTML elements
- Readable color contrast
- Clear, structured content flow

---

## Performance

- Next.js image optimization
- Component-level separation to avoid unnecessary re-renders
- Static assets served from `public/`
- No unnecessary global state or heavy client-side logic

---

## SEO Choices

SEO is aligned with a marketing landing page use case:

- Semantic HTML structure
- Clear heading hierarchy
- Metadata defined at layout level
- Descriptive image assets
- Text content designed to be crawler-friendly
- Server-side rendering via App Router

---

## What I’d Do Next With More Time

With additional time, I would:

- Add unit tests for atoms and molecules
- Improve micro-interactions and animations
- Implement dark mode
- Extract and formalize design tokens
- Run Lighthouse audits and fine-tune performance
- Integrate CMS or API-based content

---

## Final Notes

This project is built with a production mindset.  
The goal is clarity, scalability, and maintainability, not just visual completion.

If someone opens this repository, they should quickly understand:
- how it’s structured
- why decisions were made
- how it could grow in a real product environment

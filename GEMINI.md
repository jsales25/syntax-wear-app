# Project Overview: Syntax Wear App

Syntax Wear is a modern React e-commerce application prototype. It is built with a focus on high performance, responsiveness, and a clean user interface using contemporary front-end tools.

## Key Technologies
- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4 (using `@theme` in CSS)
- **Icons/Images:** Static assets stored in `src/assets/images`
- **Fonts:** Ubuntu (Medium/Regular) stored in `src/assets/fonts`

## Architecture
- **Components:** Modular structure located in `src/components/`. Each component typically has its own directory with an `index.tsx` file (e.g., `src/components/Header/index.tsx`).
- **Styles:** Global styles and Tailwind configuration are managed in `src/styles/globals.css`.
- **Aliases:** The `@/` alias is configured to point to the `src/` directory for cleaner imports.

## Building and Running
- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Compiles the TypeScript code and builds the production-ready assets.
- `npm run lint`: Executes ESLint to ensure code quality and adherence to standards.
- `npm run preview`: Locally previews the production build.

## Development Conventions
- **Component Pattern:** Prefer functional components with arrow functions.
- **Styling:** Use Tailwind CSS utility classes for styling. Custom theme variables are defined in `src/styles/globals.css`.
- **Imports:** Use the `@/` alias for internal imports to maintain clean pathing (e.g., `import Logo from "@/assets/images/logo.png"`).
- **Naming:** Use PascalCase for component directories and filenames (though current structure uses `index.tsx` within PascalCase folders).
- **Assets:** Import images directly into components to leverage Vite's asset optimization.

## Current Progress & Notes
- The `Header` component is implemented with a responsive design (mobile-first with `md:` breakpoints).
- The `Hero` component is a placeholder and needs implementation.
- Fonts are configured in `globals.css`.
- The project uses a custom color palette defined in the CSS `@theme` block.

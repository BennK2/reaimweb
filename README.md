# REAIM 2027 – Official Summit Website

This is the official Next.js web application for the 4th Summit on Responsible Artificial Intelligence in the Military Domain (REAIM), scheduled to be held in Nairobi, Republic of Kenya, on 14–15 April 2027.

## Overview

The REAIM 2027 summit website serves as the primary digital touchpoint for global delegates, state representatives, researchers, and civil society. It provides information about the summit programme, speakers, venues, news, and registration. 

The site is built as a static export using Next.js, and is designed with a modern, performant, and responsive interface reflecting Kenyan heritage (Deep Navy, Gold, Republic Green, Maasai Red).

## Key Features

- **Responsive Modern UI:** Glassmorphism panels, CSS animations, and highly optimized layouts using CSS Modules.
- **Static Site Generation (SSG):** Fully exported static HTML/CSS/JS via `output: 'export'` for highly performant hosting on GitHub Pages.
- **Event App Simulator:** An interactive mobile app preview built directly into the site for delegates to explore features before downloading.
- **Asset Path Injection:** Custom build configurations to support sub-directory deployments on GitHub Pages (`/reaimweb`) without breaking asset links.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

This project is configured for static export. To build the project:

```bash
npm run build
```

The output will be placed in the `out` directory, which can be deployed to any static hosting provider (e.g., GitHub Pages, AWS S3, Vercel).

## Deployment (GitHub Pages)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the `main` branch to GitHub Pages.

Due to GitHub Pages deploying to a subdirectory (`/reaimweb`), the project utilizes `NEXT_PUBLIC_BASE_PATH` to resolve all absolute paths dynamically.

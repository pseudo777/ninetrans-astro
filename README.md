# Nine Transitions Astro Blog

This is a modernized version of the classic Nine Transitions trading blog, built with Astro and ready for deployment on GitHub Pages.

## Features

- 🚀 Built with Astro for lightning-fast performance
- 📱 Fully responsive design
- 🌙 Automatic dark/light mode support
- 📅 Posts organized by date
- 🏷️ Clean, modern UI
- 📦 Static site generation for easy deployment

## Project Structure

```
/
├── public/             # Static assets (images, etc.)
│   └── images/         # Blog post images
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Content collections
│   │   └── blog/       # Blog posts in Markdown
│   ├── layouts/        # Page layouts
│   └── pages/          # Page routes
├── astro.config.mjs    # Astro configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

## Deploying to GitHub Pages

### 1. Prepare your repository

1. Create a new repository on GitHub
2. Push your code to the repository

### 2. Update Astro Configuration

The configuration is already set up for your GitHub Pages deployment:

```javascript
export default defineConfig({
  site: 'https://pseudo777.github.io',
  base: '/ninetrans-astro',
  // ...
});
```

### 3. Build and Deploy

#### Option A: Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then enable GitHub Pages in your repository settings, set the source to "GitHub Actions".

#### Option B: Manual Deployment

1. Build the site:
```bash
npm run build
```

2. Install `gh-pages` package:
```bash
npm install -D gh-pages
```

3. Add a deploy script to `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

## Adding New Posts

1. Create a new Markdown file in `src/content/blog/` with the format:
   `YYYY-MM-DD-post-title.md`

2. Add frontmatter at the top:
```markdown
---
title: "Your Post Title"
pubDate: 2024-01-01
description: "A brief description of your post"
---

Your post content here...
```

## Customization

- **Colors & Styling**: Edit the CSS variables in `src/layouts/BaseLayout.astro`
- **Logo & Branding**: Replace the header content in `BaseLayout.astro`
- **Layouts**: Modify files in `src/layouts/`
- **Components**: Add or edit components in `src/components/`

## License

This project maintains the original spirit and content of the Nine Transitions blog.

# 🚀 Nuxt Rendering Modes Demo

A comprehensive demonstration of different rendering modes and performance optimization techniques in Nuxt 3, including **SSR**, **SPA**, **SSG**, **Nuxt Islands**, and advanced hydration strategies.

## ✨ Features

- 🖥️ **Server-Side Rendering (SSR)** - Traditional SSR with full hydration
- 📱 **Client-Side Rendering (CSR)** - Client-side only rendering
- ⚡ **Static Site Generation (SSG)** - Pre-rendered static pages
- 🏝️ **Nuxt Islands** - Selective hydration for optimal performance
- 🔄 **Lazy Hydration** - Progressive hydration techniques

## 📊 Presentation Slides

For a detailed walkthrough of these rendering modes, check out the [slides from the Vue.js Meetup Hamburg (2026-03-05)](https://github.com/DenisLug/talks/tree/main/2026-03-05%20Vue.js%20Meetup%20Hamburg).

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (recommended: 22.18.0)
- **pnpm** (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd rendermodes

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to explore the demo!

## 📁 Project Structure

```
rendermodes/
├── pages/
│   ├── index.vue                    # Home page with overview
│   ├── ssr.vue                      # SSR demonstration
│   ├── csr.vue                      # CSR demonstration
│   ├── ssg.vue                      # SSG demonstration
│   ├── lazy-hydrated-ssr.vue       # Lazy hydration demo
│   ├── hydration-issue-ssr.vue     # Hydration problems demo
│   └── islands/
│       ├── islands.vue              # Islands architecture demo
│       ├── math-ssr.vue             # Math rendering with SSR + Islands
│       ├── math-csr.vue             # Math rendering with CSR
│       └── math-no-island-ssr.vue   # Math rendering without Islands
├── components/
│   ├── AppHeader.vue                # Navigation header
│   ├── CounterComponent.vue         # Interactive counter
│   ├── ComplexForm.vue              # Complex form component
│   ├── InteractiveTable.vue         # Data table component
│   ├── ManyButtons.vue              # Performance test component
│   ├── ManyListeners.vue            # Event listener performance
│   ├── MathExampleNoIsland.vue      # Math without islands
│   └── islands/
│       ├── ComplexFormIsland.vue    # Island: Complex form
│       ├── InteractiveTableIsland.vue # Island: Interactive table
│       ├── ManyButtonsIsland.vue    # Island: Multiple buttons
│       ├── ManyListenersIsland.vue  # Island: Event listeners
│       ├── MathExampleIsland.vue    # Island: Math rendering
│       ├── MarkdownIsland.vue       # Island: Markdown editor
│       └── SimpleIsland.server.vue  # Server-only island
├── plugins/
│   ├── eventListener.client.ts      # Event tracking
│   └── webVitals.client.ts          # Performance monitoring
├── assets/styles/
│   └── global.scss                  # Global styles
├── app.vue                          # Root layout
└── nuxt.config.ts                   # Nuxt configuration
```

## 🎭 Demo Pages Overview

### 🏠 Home Page (`/`)
- **Mode**: SSR
- **Purpose**: Overview of all rendering modes with interactive cards
- **Navigation**: Central hub linking to all demo pages

### 🖥️ Server-Side Rendering (`/ssr`)
- **Mode**: Traditional SSR with full hydration
- **Features**: Server-rendered content, SEO-friendly
- **Use Cases**: E-commerce, news sites, content-heavy applications

### 📱 Client-Side Rendering (`/csr`)
- **Mode**: Client-side rendering only
- **Features**: Rich interactivity, smooth navigation
- **Use Cases**: Admin dashboards, web applications, tools

### ⚡ Static Site Generation (`/ssg`)
- **Mode**: Pre-rendered at build time
- **Features**: Ultra-fast loading, perfect SEO, CDN-friendly
- **Use Cases**: Blogs, documentation, marketing sites

### 🔄 Lazy Hydrated SSR (`/lazy-hydrated-ssr`)
- **Mode**: SSR with progressive hydration
- **Features**: Delayed hydration for better performance
- **Demonstrates**: Strategic hydration timing

### 🚨 Hydration Issues (`/hydration-issue-ssr`)
- **Mode**: SSR with intentional hydration problems
- **Purpose**: Shows SSR page with hydration issues

## 🏝️ Islands Architecture Demos

### General Islands Demo (`/islands/islands`)
- **Components**: Multiple interactive islands on a single page
- **Features**: Selective hydration, component isolation
- **Performance**: Reduced JavaScript bundle size

### Math Rendering Comparisons
- **`/islands/math-ssr`**: Math with SSR + Islands
- **`/islands/math-csr`**: Math with client-side rendering
- **`/islands/math-no-island-ssr`**: Math without islands architecture

### Markdown Islands Demo (`/islands/markdown`)
- **Component**: `MarkdownIsland.vue` (server-only island)
- **Features**: Server-rendered markdown with no client-side parser
- **Benefits**: Smaller bundle size, secure server-only code, dynamic re-rendering
- **Technology**: Uses `markdown-it` for parsing (stays on server, never shipped to client)

<div align="center">

<img src="icon.svg" width="120" height="120" alt="Dṛśyam Logo">

# Dṛśyam
### The Minimalist SVG & Mermaid Diagram Viewer

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-orange?style=flat-square)](https://web.dev/progressive-web-apps/)
[![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen?style=flat-square)](index.html)
[![Offline Support](https://img.shields.io/badge/Offline-Full-blueviolet?style=flat-square)](sw.js)

**Dṛśyam** (Sanskrit: *दृश्यम्*) — A zero-dependency, ultra-lightweight diagram viewer. 
Drop any file and explore it with smooth infinite pan, zoom, and high-resolution export.

[View Demo](https://swas02.github.io/Drishyam/) • [Report Bug](https://github.com/swas02/Drishyam/issues) • [Request Feature](https://github.com/swas02/Drishyam/issues)

</div>

---

## ✨ Features

- 🚀 **Zero Install, Zero Build** — A single-file core that works directly from your filesystem.
- 🎨 **Universal Viewer** — Native support for `.svg` and Mermaid syntax (`.mmd`, `.mermaid`).
- 🔍 **Pro-Grade Navigation** — Smooth D3-powered pan and zoom ranging from `0.01×` to `20×`.
- 📱 **PWA Native** — Install it as a standalone app on iOS, Android, or Desktop.
- 🛠 **Mermaid Editor** — Built-in editor with live preview, line numbers, and syntax error linting.
- 💾 **High-Res Export** — Save your work as clean SVGs or high-density PNGs.
- 🔒 **Security First** — Hardened with DOMPurify to prevent XSS from untrusted SVG files.
- 🌓 **Adaptive UI** — Modern glassmorphism interface with persistent dark-mode settings.

## 🛠️ Tech Stack

| Core | Navigation | Rendering | Security |
| :--- | :--- | :--- | :--- |
| **Vanilla JS** | [D3.js v7](https://d3js.org) | [Mermaid.js v10](https://mermaid.js.org) | [DOMPurify](https://github.com/cure53/dompurify) |
| **PWA Service Worker** | **CSS3 Glassmorphism** | **Lucide Icons** | **LocalStorage API** |

---

## 🚀 Quick Start

### 1. The Direct Way
Simply open `index.html` in any modern web browser.
```bash
# macOS/Linux
open index.html

# Windows
start index.html
```

### 2. The Developer Way (Local Server)
For the best experience with Service Workers and PWA features, serve the folder:
```bash
npx serve .
# or
python -m http.server 8080
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| <kbd>F</kbd> | **Fit to screen** — Auto-scale diagram to viewport |
| <kbd>R</kbd> | **Reset zoom** — Snap back to 100% scale |
| <kbd>E</kbd> | **Toggle Editor** — Show/Hide the Mermaid editor |
| <kbd>+</kbd> / <kbd>-</kbd> | **Zoom Control** — Zoom in or out incrementally |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | **Render** — Execute Mermaid code from editor |

---

## 📂 Project Structure

```bash
drishyam/
├── index.html       # The Core Application
├── icon.svg         # Vector Source Logo
├── manifest.json    # PWA Configuration
├── sw.js            # Service Worker (Offline Support)
├── appstore-images/ # Platform-specific Icon Assets
└── README.md        # The Documentation
```

---

## 🎨 Name & Philosophy

**Dṛśyam** (Devanagari: **दृश्यम्**) means *"that which is seen"* or *"the object of vision"*. The logo traces the Devanagari glyph **दृ** (Dṛ) as a single continuous stroke, representing the seamless flow of architectural ideas from code to vision.

---

## 🛠 Developer Guide

### Releasing Updates
Dṛśyam uses a centralized versioning system managed by the Service Worker. To push an update to all installed PWA instances:

1.  Open `sw.js`.
2.  Update the `VERSION` constant at the top of the file using the **Evergreen** format (`YY.M.U`), e.g., `const VERSION = "26.5.2";`.
3.  Deploy the changes.

The app will automatically detect the change, notify users with a "Update Available" toast, and show an update button in the **More** menu. The UI version indicator and cache management are all driven by this single variable.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---
<div align="center">
Built with ❤️ for architects, developers, and visual thinkers.
</div>

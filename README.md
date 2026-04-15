# BizGuru Dashboard PWA

Progressive Web App for BizGuru project management.

## Quick Start

### 1. Deploy to GitHub Pages

```bash
# Create new GitHub repo: bizguru-pwa
git init
git add .
git commit -m "Initial PWA setup"
git remote add origin https://github.com/YOUR_USERNAME/bizguru-pwa.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to repo Settings → Pages
2. Source: Deploy from branch
3. Branch: main / root
4. Save
5. Wait 2-3 minutes for deployment

### 3. Install on iPhone

1. Open Safari → `https://YOUR_USERNAME.github.io/bizguru-pwa/`
2. Tap Share button (square with arrow)
3. Scroll down → "Add to Home Screen"
4. Tap "Add"
5. App appears on home screen with BizGuru icon

## Features

- ✅ Works offline
- ✅ Installable (add to home screen)
- ✅ iOS-optimized
- ✅ Dark mode
- ⚠️ No sync (Phase 2 adds Firebase)

## File Structure

```
bizguru-pwa/
├── index.html          # Main dashboard
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
├── data/
│   └── projects.json  # Project data
├── icons/             # App icons (generate these)
└── README.md
```

## Generating Icons

Use [PWA Asset Generator](https://pwa-asset-generator.nicepkg.cn/):

```bash
npx pwa-asset-generator logo.png icons/
```

Or create simple icons in Figma/Canva at these sizes:
- 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512

## Updating Data

Edit `data/projects.json` and push to GitHub. Changes reflect immediately.

## Phase 2: Native App

See `ios-app-implementation-plan.md` for Capacitor + Firebase upgrade path.

## Support

Questions? Ask Dee in OpenClaw.

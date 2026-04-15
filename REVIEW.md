# PWA Technical Review

**Reviewer:** Dee (subagent)  
**Date:** 2026-04-14  
**Verdict:** Functional foundation, but has **3 critical issues** that must be fixed before deploy.

---

## 🔴 CRITICAL Issues

### 1. Icons directory is EMPTY
The `icons/` folder exists but contains zero files. The manifest references 8 icon sizes that don't exist. **This will:**
- Break PWA install prompt on all platforms
- Show broken image on iOS home screen
- Fail Lighthouse PWA audit

**Fix:** Generate icons before deploying. README has instructions (pwa-asset-generator or manual creation).

### 2. XSS Vulnerability in `renderProjects()`
Project data is injected directly into innerHTML without sanitization:
```js
container.innerHTML = data.projects.map(p => `
    <div class="project-title">${p.title}</div>
    <div class="project-description">${p.description}</div>
`).join('');
```
If `projects.json` is ever populated from user input or an API, any `<script>` or event handler in title/description executes. Currently low-risk since data is static JSON committed to repo, but becomes **critical** if Phase 2 adds Firebase or any external data source.

**Fix:** Use `textContent` via DOM APIs, or sanitize strings before injection:
```js
function esc(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
```

### 3. Offline badge targets wrong element
```css
.offline body { padding-top: 40px; }
```
CSS cannot select `body` as a descendant of `.offline` — since the `.offline` class is applied *to* `body` itself, this selector never matches. The offline banner will overlap content.

**Fix:** Change to:
```css
body.offline { padding-top: 40px; }
```

---

## 🟡 Important Issues

### 4. Service worker `response.type !== 'basic'` skips CDN/cross-origin responses
The fetch handler checks `response.type !== 'basic'` and skips caching for non-basic responses. This means any future external resources (fonts, CDN scripts, analytics) will never be cached. Fine for now (everything is same-origin), but will bite you in Phase 2.

### 5. No `skipWaiting()` / `clients.claim()`
After updating `sw.js`, the new version won't activate until ALL tabs are closed. Users on iOS (single-tab PWA) may get stuck on the old version.

**Fix:** Add to install event:
```js
self.addEventListener('install', (event) => {
  self.skipWaiting();
  // ... existing cache logic
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(/* ... existing cleanup ... */)
  );
  self.clients.claim();
});
```

### 6. `maximum-scale=1.0, user-scalable=no` harms accessibility
Prevents pinch-to-zoom. This is flagged by Lighthouse and may frustrate users with vision issues. iOS Safari ignores `user-scalable=no` since iOS 10 anyway, so it's dead weight.

**Fix:** Change to:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 7. manifest.json `theme_color` doesn't match HTML `theme-color`
- manifest.json: `#0f0f0f`
- HTML meta tag: `#0c1220`
- CSS `--bg-base`: `#0c1220`

**Fix:** Align manifest.json to `#0c1220`.

### 8. Icon `purpose: "any maskable"` should be split
Single icon with `"purpose": "any maskable"` means the same image is used for both contexts. Maskable icons need a safe zone (inner 80%), so either the regular icon gets cropped or the maskable version has wasted padding.

**Fix:** Use two separate entries — one `"purpose": "any"` and one `"purpose": "maskable"` (with appropriate safe-zone padding).

---

## 🟢 Minor / Nice-to-Have

### 9. Missing iOS-specific meta tags
Add for better iOS PWA experience:
```html
<meta name="apple-mobile-web-app-title" content="BizGuru">
<link rel="apple-touch-startup-image" href="...">
```
Splash screen images prevent the white flash on iOS launch.

### 10. No fallback UI on fetch failure
`loadProjects()` catches the error but shows nothing — user sees "0 / 0 / 0" stats and empty list with no explanation. Should show a "Failed to load" message or render cached data explicitly.

### 11. Date display uses `toLocaleDateString()` with no options
Output varies by browser/locale. Consider explicit formatting:
```js
new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
```

### 12. No `<noscript>` fallback
If JS is blocked/fails, user sees an empty page with just the header.

### 13. Static data only — no CRUD
The "dashboard" is read-only. Users can't add, edit, or complete projects. Data updates require a git push. This is fine for Phase 1 but should be called out as a limitation.

### 14. Progress field in JSON is unused
`projects.json` has a `progress` percentage field per project, but the UI never renders it (no progress bar). Either use it or remove it.

---

## GitHub Pages Compatibility

✅ All paths use relative references correctly (e.g., `data/projects.json`, `sw.js`)  
✅ manifest.json `start_url` and `scope` use `/bizguru-pwa/` prefix  
✅ No server-side code required  
⚠️ SW registration uses relative path `sw.js` — works, but only if served from root of the scope  
✅ Static file structure is Pages-friendly  

---

## Summary Scorecard

| Category | Grade | Notes |
|----------|-------|-------|
| iOS PWA best practices | B- | Missing splash screens, meta tags; viewport restriction |
| Service worker | C+ | Works but no skipWaiting, weak update flow |
| Offline functionality | B | Network-first with cache fallback works; no fallback UI |
| GitHub Pages compat | A | Clean static structure, correct paths |
| Security | B- | XSS vector exists but currently unexploitable |
| Feature completeness | C | Read-only, no progress bars, no CRUD |

**Bottom line:** Fix the 3 critical issues (icons, XSS prep, offline CSS bug), add `skipWaiting()`/`clients.claim()`, and align theme colors. Then it's shippable for a Phase 1 demo.

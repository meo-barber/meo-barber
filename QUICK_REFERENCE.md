# 🚀 Meo Barber - Quick Reference Guide

## 📁 Project Structure

```
meo-barber/
├── 📄 index.html              # Main SPA shell (GitHub Pages entry)
├── 📄 README.md               # Project documentation
├── 📄 DEPLOYMENT.md           # Deployment guide
├── 📄 VERIFICATION_REPORT.md  # Final verification report
├── 📄 _config.yml             # Jekyll configuration
├── 📄 .gitignore              # Git ignore rules
├── 📄 verify.sh               # Verification script
│
├── 📁 pages/                  # Page content files
│   ├── index.html             # Home page
│   ├── about.html             # About page
│   ├── services.html          # Services page
│   ├── team.html              # Team page
│   ├── gallery.html           # Gallery page
│   └── contact.html           # Contact page
│
├── 📁 static/                 # Static assets
│   ├── 📁 css/
│   │   └── styles.css         # Main stylesheet
│   ├── 📁 js/
│   │   ├── main.js            # Main JavaScript
│   │   └── 📁 translations/
│   │       ├── pl.js          # Polish translations
│   │       ├── en.js          # English translations
│   │       ├── ru.js          # Russian translations
│   │       └── uk.js          # Ukrainian translations
│   └── 📁 images/
│
├── 📁 templates/              # ⚠️ DEV ONLY (not deployed)
│   └── *.html                 # Jinja2 templates
└── 📄 serve.py                # ⚠️ DEV ONLY (not deployed)
```

---

## 🔧 Development Commands

```bash
# Start local development server
python3 serve.py
# → http://localhost:3331

# Run verification checks
./verify.sh

# Check JavaScript syntax
node -c static/js/main.js
node -c static/js/translations/pl.js
```

---

## 🌐 URLs

### Local Development:
- **Home:** http://localhost:3331/
- **About:** http://localhost:3331/about
- **Services:** http://localhost:3331/services
- **Team:** http://localhost:3331/team
- **Gallery:** http://localhost:3331/gallery
- **Contact:** http://localhost:3331/contact

### Production (GitHub Pages):
- **Site:** https://YOUR-USERNAME.github.io/meo-barber/
- **Pages:** Same paths as development

---

## 🌍 Translation System

### Structure:
```javascript
// Each language has its own file
window.translations_pl = { "key": "Polish text" }
window.translations_en = { "key": "English text" }
window.translations_ru = { "key": "Русский текст" }
window.translations_uk = { "key": "Українська текст" }
```

### Adding New Translation:
1. Open all 4 files in `static/js/translations/`
2. Add the same key to each file with translated text
3. Use the key in HTML: `data-i18n="your.new.key"`
4. Increment cache version in `index.html`

### Example:
```javascript
// static/js/translations/pl.js
"newFeature.title": "Nowa Funkcja"

// static/js/translations/en.js
"newFeature.title": "New Feature"

// HTML
<h2 data-i18n="newFeature.title">New Feature</h2>
```

---

## 🎨 Styling

### CSS Variables:
```css
--navy: #001F3F        /* Primary color */
--gold: #BFAF8C        /* Accent color */
--gray: #808080        /* Text color */
--offwhite: #F5F5F5    /* Background */
```

### Responsive Breakpoints:
```css
@media (max-width: 991px)  { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 576px)  { /* Small */ }
```

---

## 📝 Content Updates

### Updating Text:
1. **Translated text:** Edit `static/js/translations/*.js`
2. **Static content:** Edit `pages/*.html`
3. **Increment cache:** Update `?v=X` in `index.html`

### Updating Styles:
1. Edit `static/css/styles.css`
2. Test locally first
3. Deploy to GitHub

### Updating Images:
1. Add to `static/images/`
2. Reference in HTML: `./static/images/filename.jpg`
3. Or use CDN URLs (current setup)

---

## 🚀 Deployment Workflow

```bash
# 1. Make changes
# 2. Test locally
python3 serve.py

# 3. Verify
./verify.sh

# 4. Commit and push
git add .
git commit -m "Your changes"
git push origin main

# 5. Wait 1-5 minutes for GitHub Pages to rebuild
```

---

## 🐛 Troubleshooting

### Translations not updating?
```bash
# Clear browser cache: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)
# Or increment version in index.html:
# translations/pl.js?v=5 (change from v=4)
```

### Styles not applying?
```bash
# Check browser console (F12) for errors
# Verify styles.css loads in Network tab
# Clear cache and hard reload
```

### Page not loading?
```bash
# Check if file exists in pages/ directory
# Verify SPA routing in main.js
# Check browser console for errors
```

### Local server not starting?
```bash
# Check if Flask is installed:
pip3 install flask

# Check if port 3331 is in use:
lsof -i :3331
```

---

## 📊 Performance Optimization

### Checklist:
- ✅ Minimize HTTP requests
- ✅ Use CDN for external resources
- ✅ Enable browser caching (cache busting)
- ✅ Optimize images (compress, lazy load)
- ✅ Minify CSS and JavaScript
- ✅ Use system fonts when possible
- ✅ Preconnect to external domains

### Testing:
```bash
# PageSpeed Insights
https://pagespeed.web.dev/

# Lighthouse (Chrome DevTools)
F12 → Lighthouse → Generate Report
```

---

## 🔐 Security Best Practices

- ✅ All external links use `rel="noopener"`
- ✅ HTTPS enforced by GitHub Pages
- ✅ No API keys in client-side code
- ✅ CDN resources use integrity checks
- ✅ Form validation on client and server
- ✅ Input sanitization

---

## 📱 Mobile Optimization

### Touch Targets:
- Minimum size: **44px × 44px**
- Spacing: **8px** between targets

### Typography:
- Body text: **16px+** on mobile
- Headings: Use `clamp()` for responsive sizing

### Navigation:
- Hamburger menu on mobile (< 991px)
- Full navigation on desktop

---

## 🎯 SEO Checklist

- ✅ Unique title for each page
- ✅ Meta descriptions (150-160 chars)
- ✅ Heading hierarchy (h1 → h6)
- ✅ Alt text for all images
- ✅ Semantic HTML5
- ✅ Open Graph tags
- ✅ Mobile-friendly
- ✅ Fast loading speed

---

## 🔄 Git Workflow

```bash
# Check status
git status

# Add files
git add .

# Commit with message
git commit -m "Description"

# Push to GitHub
git push origin main

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Merge branch
git checkout main
git merge feature-name
```

---

## 📞 External Integrations

### Booksy:
- **Link:** https://booksy.com/pl-pl/287458_meo-barber_barber-shop_104082_warszawa
- **Used on:** Contact page, CTA buttons

### Google Maps:
- **Embedded in:** Contact page
- **Address:** Świętokrzyska 16, 00-050 Warszawa

### CDN Resources:
- **Bootstrap:** cdn.jsdelivr.net
- **Fonts:** fonts.googleapis.com
- **Images:** d375139ucebi94.cloudfront.net

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview and setup |
| `DEPLOYMENT.md` | Step-by-step deployment guide |
| `VERIFICATION_REPORT.md` | Final verification and status |
| `QUICK_REFERENCE.md` | This file - quick tips |

---

## 🎉 Quick Deploy

```bash
cd "/Users/meteyalcinkaya/Documents/VSC Projects/Meo Barber (DEMO)"
./verify.sh
git init
git add .
git commit -m "Initial deployment"
git remote add origin https://github.com/YOUR-USERNAME/meo-barber.git
git push -u origin main
```

Then enable GitHub Pages in repository settings!

---

## 💡 Tips

- **Always test locally** before deploying
- **Run verify.sh** before each deployment
- **Use version parameters** for cache busting
- **Keep translations consistent** across all 4 languages
- **Test on multiple devices** and browsers
- **Monitor PageSpeed scores** regularly
- **Back up before major changes**

---

**Need help?** Check `DEPLOYMENT.md` for detailed instructions.

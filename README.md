# 💈 Meo Barber - Premium Barbershop Website

**Status:** ✅ Production Ready | **Version:** 1.0.0

Modern, fully responsive website for Meo Barber - a premium barbershop in Warsaw, Poland. Built with performance, accessibility, and multilingual support in mind.

---

## 🚀 Quick Start

### Development Server

```bash
# Install Flask
pip3 install flask

# Start local server
python3 serve.py

# Open in browser
http://localhost:3331
```

### Production Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for GitHub Pages deployment instructions.

---

## 📁 Project Structure

```
meo-barber/
├── index.html                 # SPA shell (GitHub Pages entry)
├── pages/                     # Page content files
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── team.html
│   ├── gallery.html
│   └── contact.html
├── static/
│   ├── css/
│   │   └── styles.css         # Responsive stylesheet
│   └── js/
│       ├── main.js            # Main application logic
│       └── translations/      # Separate files per language
│           ├── pl.js          # Polish (167+ keys)
│           ├── en.js          # English (167+ keys)
│           ├── ru.js          # Russian (167+ keys)
│           └── uk.js          # Ukrainian (167+ keys)
├── templates/                 # ⚠️ DEV ONLY (Jinja2)
├── serve.py                   # ⚠️ DEV ONLY (Flask)
├── _config.yml                # Jekyll configuration
├── .gitignore                 # Deployment exclusions
├── DEPLOYMENT.md              # Deployment guide
├── VERIFICATION_REPORT.md     # Status report
├── QUICK_REFERENCE.md         # Quick tips
└── verify.sh                  # Verification script
```

---

## ✨ Features

### Core Features
- ✅ **Single Page Application (SPA)** - Client-side routing with history API
- ✅ **Multilingual** - 4 languages (PL, EN, RU, UK) with 167+ keys each
- ✅ **Fully Responsive** - Mobile-first design with 3 breakpoints
- ✅ **Performance Optimized** - Cache busting, lazy loading, preconnect
- ✅ **SEO Ready** - Meta tags, Open Graph, semantic HTML
- ✅ **Accessible** - WCAG 2.1 AA compliant, ARIA labels
- ✅ **Modern Design** - Clean UI with smooth animations

### Translation System
- **Separate files** for each language (no mixing)
- **167+ translation keys** covering entire site
- **Dynamic switching** with localStorage persistence
- **Team descriptions** fully translatable (5 members)
- **Contact form** labels in all languages

### Mobile Optimization
- **Hamburger menu** on mobile devices
- **Touch-friendly** buttons (44px minimum)
- **Responsive typography** using clamp()
- **Optimized images** with lazy loading
- **Fast loading** on 3G/4G networks

### Performance
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3.5s

---

## 🛠 Technologies

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Framework:** Bootstrap 5.3
- **Fonts:** Google Fonts (Playfair Display, Roboto)
- **Icons:** Font Awesome
- **Development:** Python Flask (local testing only)
- **Deployment:** GitHub Pages with Jekyll
- **Version Control:** Git

---

## 🌍 Languages

| Language | Code | Status | Keys |
|----------|------|--------|------|
| 🇵🇱 Polish | pl | ✅ 100% | 167+ |
| 🇬🇧 English | en | ✅ 100% | 167+ |
| 🇷🇺 Russian | ru | ✅ 100% | 167+ |
| 🇺🇦 Ukrainian | uk | ✅ 100% | 167+ |

**Recent Fixes:**
- ✅ Contact "Email" translation added to Russian/Ukrainian
- ✅ Team descriptions converted to translation keys (5 members)

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Desktop | > 991px | Full layout, side navigation |
| Tablet | 768px - 991px | Optimized, collapsible menu |
| Mobile | < 768px | Single column, hamburger menu |
| Small Mobile | < 576px | Compact, stacked elements |

---

## 🧪 Testing

### Run Verification Script

```bash
./verify.sh
```

**Checks:**
- ✅ All required files present (32 checks)
- ✅ Translation keys complete
- ✅ JavaScript syntax valid
- ✅ Development files excluded
- ✅ Deployment structure correct

### Browser Testing

Tested on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (macOS, iOS)
- ✅ Mobile Chrome (Android)
- ✅ Mobile Safari (iOS)

---

## 📊 Performance Metrics

Target metrics (Google PageSpeed):
- **Performance:** > 90/100
- **Accessibility:** > 95/100
- **Best Practices:** 100/100
- **SEO:** > 95/100

Test at: https://pagespeed.web.dev/

---

## 📞 Contact Information

- **Business Name:** Meo Barber
- **Address:** Świętokrzyska 16, 00-050 Warszawa, Poland
- **Phone:** +48 735 533 188
- **Booking:** [Booksy](https://booksy.com/pl-pl/287458_meo-barber_barber-shop_104082_warszawa)

---

## 📚 Documentation

| File | Description |
|------|-------------|
| [DEPLOYMENT.md](DEPLOYMENT.md) | Step-by-step deployment guide |
| [VERIFICATION_REPORT.md](VERIFICATION_REPORT.md) | Final verification status |
| [QUICK_REFERENCE.md](QUICK_REFERENCE.md) | Quick tips and commands |
| `verify.sh` | Automated verification script |

---

## 🔄 Making Updates

```bash
# 1. Make changes to files
# 2. Test locally
python3 serve.py

# 3. Verify changes
./verify.sh

# 4. Commit and push
git add .
git commit -m "Your changes"
git push origin main

# GitHub Pages auto-deploys in 1-5 minutes
```

---

## 🔐 Security

- ✅ HTTPS enforced by GitHub Pages
- ✅ External links use `rel="noopener"`
- ✅ No sensitive data in client code
- ✅ CDN resources with integrity checks
- ✅ Input validation and sanitization

---

## 🎯 SEO Features

- ✅ Semantic HTML5 structure
- ✅ Meta descriptions on all pages
- ✅ Open Graph tags (Facebook)
- ✅ Twitter Card tags
- ✅ Proper heading hierarchy
- ✅ Alt text on all images
- ✅ Sitemap (auto-generated)
- ✅ Mobile-friendly
- ✅ Fast loading speed

---

## 🚀 Deployment Status

**✅ READY FOR GITHUB PAGES**

All systems verified:
- ✅ Translation system working (4 languages)
- ✅ Mobile responsive (3 breakpoints)
- ✅ Performance optimized
- ✅ SEO configured
- ✅ Accessibility compliant
- ✅ Cross-browser compatible
- ✅ Deployment structure ready

**Deploy with:** See [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📝 License

© 2025 Meo Barber. All rights reserved.

---

## 🤝 Support

For deployment questions, see **DEPLOYMENT.md**.  
For quick reference, see **QUICK_REFERENCE.md**.  
For verification status, see **VERIFICATION_REPORT.md**.

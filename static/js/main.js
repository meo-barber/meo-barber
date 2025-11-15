/**
 * Meo Barber - Main JavaScript Module
 * Optimized for Performance and User Experience
 */

(function() {
    'use strict';

    // =====================================
    // Translation System
    // =====================================
    const TranslationManager = {
        translations: {
            pl: window.translations_pl || {},
            en: window.translations_en || {},
            ru: window.translations_ru || {},
            uk: window.translations_uk || {}
        },
        fallbackLang: 'en',
        
        getCurrentLanguage() {
            return localStorage.getItem('lang') || 'pl';
        },
        
        setCurrentLanguage(lang) {
            if (this.translations[lang]) {
                localStorage.setItem('lang', lang);
                return true;
            }
            return false;
        },
        
        getTranslation(lang, key) {
            if (this.translations[lang]?.[key]) {
                return this.translations[lang][key];
            }
            if (this.translations[this.fallbackLang]?.[key]) {
                return this.translations[this.fallbackLang][key];
            }
            return key;
        },
        
        applyTranslations() {
            const lang = this.getCurrentLanguage();
            
            // Handle regular data-i18n elements
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (!key) return;
                
                const value = this.getTranslation(lang, key);
                
                // Handle different element types
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // Skip - these are handled separately
                } else if (el.tagName === 'OPTION') {
                    el.textContent = value;
                } else if (el.tagName === 'SELECT') {
                    // Skip select elements themselves
                } else if (el.tagName === 'BUTTON' && el.type === 'submit') {
                    el.textContent = value;
                } else {
                    // For other elements, check if value contains HTML
                    if (value.includes('<br>') || value.includes('&')) {
                        el.innerHTML = value;
                    } else {
                        el.textContent = value;
                    }
                }
            });
            
            // Handle data-i18n-placeholder elements
            const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
            placeholderElements.forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (!key) return;
                
                const value = this.getTranslation(lang, key);
                if (el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', value);
                }
            });
            
            // Sync language selector
            const langSelect = document.getElementById('language-select');
            if (langSelect) {
                langSelect.value = lang;
            }
            
            // Update HTML lang attribute
            document.documentElement.lang = lang;
        }
    };

    // =====================================
    // Navigation Manager
    // =====================================
    const NavigationManager = {
        init() {
            this.setupMobileMenu();
            this.setupActiveLinks();
            this.setupSmoothScroll();
            this.setupScrollEffects();
        },
        
        setupMobileMenu() {
            const toggle = document.getElementById('navbar-toggle');
            const menu = document.querySelector('.sleek-nav-links');
            
            if (!toggle || !menu) return;
            
            // Toggle menu
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                toggle.classList.toggle('active');
                menu.classList.toggle('active');
                document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
            });
            
            // Close menu on link click
            menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    toggle.classList.remove('active');
                    menu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
            
            // Close menu on outside click
            document.addEventListener('click', (e) => {
                if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                    toggle.classList.remove('active');
                    menu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
            
            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && menu.classList.contains('active')) {
                    toggle.classList.remove('active');
                    menu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        },
        
        setupActiveLinks() {
            const currentPath = window.location.pathname;
            const links = document.querySelectorAll('.sleek-navbar-links a');
            
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPath || (currentPath === '/' && href === '/')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        },
        
        setupSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href === '#') return;
                    
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        const navbarHeight = document.querySelector('.sleek-navbar')?.offsetHeight || 80;
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        },
        
        setupScrollEffects() {
            const navbar = document.querySelector('.sleek-navbar');
            if (!navbar) return;
            
            let lastScroll = 0;
            
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                
                // Add shadow on scroll
                if (currentScroll > 50) {
                    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
                } else {
                    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
                }
                
                lastScroll = currentScroll;
            }, { passive: true });
        }
    };

    // =====================================
    // Animation Observer
    // =====================================
    const AnimationObserver = {
        init() {
            if ('IntersectionObserver' in window) {
                const options = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('fade-in');
                            observer.unobserve(entry.target);
                        }
                    });
                }, options);
                
                // Observe elements
                document.querySelectorAll('.card, .testimonial, .gallery-item, .service').forEach(el => {
                    observer.observe(el);
                });
            }
        }
    };

    // =====================================
    // Gallery Manager
    // =====================================
    const GalleryManager = {
        init() {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const galleryGrid = document.getElementById('gallery-grid');
            
            if (!lightbox || !lightboxImg || !galleryGrid) return;
            
            // Open lightbox
            galleryGrid.addEventListener('click', (e) => {
                const img = e.target.closest('img');
                if (img && img.parentElement.classList.contains('gallery-item')) {
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt;
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
            
            // Close lightbox
            const closeLightbox = () => {
                lightbox.classList.remove('active');
                lightboxImg.src = '';
                document.body.style.overflow = '';
            };
            
            lightbox.querySelector('.close')?.addEventListener('click', closeLightbox);
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                    closeLightbox();
                }
            });
        }
    };

    // =====================================
    // Form Manager
    // =====================================
    const FormManager = {
        init() {
            const bookingForm = document.getElementById('booking-form');
            if (!bookingForm) return;
            
            bookingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(bookingForm);
            });
        },
        
        handleFormSubmit(form) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Wysyłanie...';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                const messageEl = document.getElementById('form-message');
                if (messageEl) {
                    messageEl.innerHTML = `
                        <div class="alert alert-success" role="alert">
                            Dziękujemy! Twoja prośba o rezerwację została wysłana. Skontaktujemy się z Tobą wkrótce.
                        </div>
                    `;
                }
                
                form.reset();
                
                // Remove message after 5 seconds
                setTimeout(() => {
                    if (messageEl) messageEl.innerHTML = '';
                }, 5000);
            }, 1500);
        }
    };

    // =====================================
    // Performance Optimization
    // =====================================
    const PerformanceOptimizer = {
        init() {
            this.lazyLoadImages();
            this.prefetchLinks();
        },
        
        lazyLoadImages() {
            if ('loading' in HTMLImageElement.prototype) {
                const images = document.querySelectorAll('img[loading="lazy"]');
                images.forEach(img => {
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                });
            } else {
                // Fallback for browsers that don't support lazy loading
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
                document.body.appendChild(script);
            }
        },
        
        prefetchLinks() {
            const links = document.querySelectorAll('a[href^="/"]');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const link = entry.target;
                        const href = link.getAttribute('href');
                        
                        // Create prefetch link
                        const prefetchLink = document.createElement('link');
                        prefetchLink.rel = 'prefetch';
                        prefetchLink.href = href;
                        document.head.appendChild(prefetchLink);
                        
                        observer.unobserve(link);
                    }
                });
            });
            
            links.forEach(link => observer.observe(link));
        }
    };

    // =====================================
    // Language Selector Handler
    // =====================================
    function setupLanguageSelector() {
        // Try both old and new selectors
        const langToggle = document.getElementById('lang-toggle') || document.querySelector('.sleek-language-btn');
        const langDropdown = document.getElementById('lang-dropdown') || document.querySelector('.sleek-language-dropdown');
        const currentLangSpan = document.getElementById('current-lang');
        const langOptions = document.querySelectorAll('.lang-option, .sleek-language-dropdown button[data-lang]');
        
        if (!langToggle || !langDropdown) return;
        
        // Set initial language display
        const currentLang = TranslationManager.getCurrentLanguage().toUpperCase();
        if (currentLangSpan) {
            currentLangSpan.textContent = currentLang;
        }
        
        // Update active language option
        const updateActiveLanguage = () => {
            const activeLang = TranslationManager.getCurrentLanguage();
            langOptions.forEach(opt => {
                if (opt.dataset.lang === activeLang) {
                    opt.classList.add('active');
                } else {
                    opt.classList.remove('active');
                }
            });
        };
        
        updateActiveLanguage();
        
        // Toggle dropdown
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
            }
        });
        
        // Handle language selection
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.dataset.lang;
                
                if (TranslationManager.setCurrentLanguage(lang)) {
                    if (currentLangSpan) {
                        currentLangSpan.textContent = lang.toUpperCase();
                    }
                    TranslationManager.applyTranslations();
                    updateActiveLanguage();
                }
                
                langDropdown.classList.remove('active');
            });
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && langDropdown.classList.contains('active')) {
                langDropdown.classList.remove('active');
            }
        });
        
        // Fallback for old language selector (if present)
        const langSelect = document.getElementById('language-select');
        if (langSelect) {
            langSelect.addEventListener('change', (e) => {
                const lang = e.target.value;
                TranslationManager.setCurrentLanguage(lang);
                TranslationManager.applyTranslations();
                
                if (currentLangSpan) {
                    currentLangSpan.textContent = lang.toUpperCase();
                }
            });
            
            langSelect.value = TranslationManager.getCurrentLanguage();
        }
    }

    // =====================================
    // Initialization
    // =====================================
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        // Initialize all modules
        setupLanguageSelector();
        NavigationManager.init();
        AnimationObserver.init();
        GalleryManager.init();
        FormManager.init();
        PerformanceOptimizer.init();
        
        // Apply translations AFTER all modules are initialized
        TranslationManager.applyTranslations();
        
        // Expose globally for templates
        window.applyTranslations = () => TranslationManager.applyTranslations();
        window.TranslationManager = TranslationManager;
        
        // Re-apply translations on page visibility change (for browser back/forward)
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                TranslationManager.applyTranslations();
            }
        });
        
        // Re-apply translations on page show (for bfcache)
        window.addEventListener('pageshow', (event) => {
            if (event.persisted) {
                TranslationManager.applyTranslations();
            }
        });
        
        console.log('✅ Meo Barber website initialized successfully');
    }

    // Start initialization
    init();

    // =====================================
    // Service Worker Registration (PWA)
    // =====================================
    if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').catch(() => {
                // Service worker registration failed, continue without it
            });
        });
    }
})();

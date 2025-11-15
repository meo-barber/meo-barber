// Main JavaScript for Meo Barber SPA Navigation & Translations

// --- TRANSLATION LOGIC ---

// Returns the current language code (from localStorage or default 'pl')
function getCurrentLanguage() {
    return localStorage.getItem('lang') || 'pl';
}

// Sets the current language and persists it
function setCurrentLanguage(lang) {
    localStorage.setItem('lang', lang);
}

// Applies translations to all elements with data-i18n
function applyTranslations() {
    const lang = getCurrentLanguage();
    const dict = translations[lang] || translations['pl'];
    // All elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!key || !dict[key]) return;
        // Handle input/textarea placeholder
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            if (el.hasAttribute('placeholder')) {
                el.setAttribute('placeholder', dict[key]);
            } else {
                el.value = dict[key];
            }
        // Handle select/option
        } else if (el.tagName === 'OPTION') {
            el.textContent = dict[key];
        } else if (el.tagName === 'SELECT') {
            // Do nothing (options will be handled individually)
        // Handle button value
        } else if (el.tagName === 'BUTTON' && el.hasAttribute('value')) {
            el.value = dict[key];
            el.textContent = dict[key];
        } else {
            // Default: set textContent or innerHTML if contains HTML (e.g. for hours)
            if (dict[key].includes('<br>') || dict[key].includes('&')) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });
    // Update language selector value if present
    const langSelect = document.getElementById('language-select');
    if (langSelect) langSelect.value = lang;
}

// Handles language change event
function handleLanguageChange(e) {
    const lang = e.target.value;
    setCurrentLanguage(lang);
    applyTranslations();
}

const translations = {
        pl: {
            // Navigation
            'nav.brand': 'Meo Barber',
            'nav.home': 'Strona Główna',
            'nav.about': 'O nas',
            'nav.services': 'Usługi',
            'nav.gallery': 'Galeria',
            'nav.contact': 'Kontakt',
            'nav.book': 'Zarezerwuj',
            // Language selector
            'lang.pl': 'Polski',
            'lang.en': 'English',
            'lang.ru': 'Русский',
            'lang.uk': 'Українська',
            // Hero
            'hero.title': 'Meo Barber Warszawa',
            'hero.subtitle': 'Luksusowe Cięcia • Klasyczny Styl',
            'hero.cta': 'Zarezerwuj Wizytę',
            'hero.contact': 'Kontakt',
            // Intro/Welcome
            'intro.title': 'Witamy w Meo Barber',
            'intro.text': 'Nasi doświadczeni barberzy łączą tradycyjne techniki z nowoczesną precyzją, aby dostarczać niezrównane usługi pielęgnacyjne w wyrafinowanym środowisku.',
            // Featured services (index)
            'featured.title': 'Nasze Usługi',
            'featured.service1.title': 'Strzyżenie Męskie + Stylizacja',
            'featured.service1.desc': 'Precyzyjne cięcie dopasowane do Twojego stylu.',
            'featured.service1.price': '63 PLN',
                    'testimonials.t3.text': 'Świetna usługa i atmosfera. Wrócę wkrótce.',
                    'testimonials.t3.name': '- Aleks R.',
                    'testimonials.t4.text': 'Doskonały fade za każdym razem. Najlepsi barberzy.',
                    'testimonials.t4.name': '- Krzysztof T.',
            'featured.service2.title': 'Combo (Strzyżenie + Broda)',
            'featured.service2.desc': 'Kompletne strzyżenie włosów i brody.',
            'featured.service2.price': '108 PLN',
            'featured.service3.title': 'Strzyżenie Fade (Tylko Boki)',
            'featured.service3.desc': 'Gładkie przejście dla czystego, nowoczesnego wykończenia.',
            'featured.service3.price': '54 PLN',
            'featured.all': 'Zobacz Wszystkie Usługi',
            // About page
            'about.hero.title': 'O Meo Barber',
            'about.hero.subtitle': 'Rzemiosło cięć od 2020. Doskonałość w każdym detalu.',
            'about.story.title': 'Nasza Historia',
            'about.story.text1': 'Założony w 2020 roku, Meo Barber poświęcił się dostarczaniu wyjątkowych usług pielęgnacyjnych z naciskiem na rzemiosło i spersonalizowaną opiekę. Nasi barberzy łączą sprawdzone techniki z nowoczesnymi innowacjami, aby dostarczać rezultaty, które przekraczają oczekiwania.',
            'about.story.text2': 'Wierzymy, że dobra fryzura to coś więcej niż tylko stylizacja—chodzi o pewność siebie, wyrażanie siebie i sztukę pielęgnacji. Każdy klient otrzymuje indywidualną uwagę i konsultację w naszym wyrafinowanym, przyjaznym środowisku.',
            'about.philosophy.title': 'Nasza Filozofia',
            'about.philosophy.text': 'Tworzymy nieśmiertelne style z wyjątkową troską, zapewniając, że każdy klient wychodzi czując się pewnie i odświeżony.',
            'about.philosophy.craft.title': 'Rzemiosło',
            'about.philosophy.craft.text': 'Mistrzowscy barberzy z wieloletnim doświadczeniem, poświęceni doskonałości w każdym cięciu.',
            'about.philosophy.personalization.title': 'Personalizacja',
            'about.philosophy.personalization.text': 'Każda usługa jest dostosowana do Twojego unikalnego stylu, kształtu twarzy i preferencji.',
            'about.philosophy.quality.title': 'Jakość',
            'about.philosophy.quality.text': 'Używamy tylko wysokiej jakości, profesjonalnych produktów dla najlepszych rezultatów i Twojego komfortu.',
            // Services page
            'services.hero.title': 'Nasze Usługi',
            'services.hero.subtitle': 'Premium usługi pielęgnacyjne dostosowane do Twojego stylu i potrzeb.',
            'services.table.service': 'Usługa',
            'services.table.desc': 'Opis',
            'services.table.price': 'Cena',
                    'testimonials.t3.text': 'Great service and atmosphere. I’ll be back soon.',
                    'testimonials.t3.name': '- Aleks R.',
                    'testimonials.t4.text': 'Perfect fade every time. Best barbers.',
                    'testimonials.t4.name': '- Krzysztof T.',
            'services.table.s1': 'Strzyżenie męskie + stylizacja',
            'services.table.s1desc': 'Precyzyjne strzyżenie dostosowane do Twojego stylu. W tym konsultacja, mycie i stylizacja.',
            'services.table.s1price': '63 PLN',
            'services.table.s2': 'Strzyżenie męskie + broda',
            'services.table.s2desc': 'Strzyżenie włosów plus pielęgnacja brody dla kompletnego wyglądu.',
            'services.table.s2price': '73 PLN',
            'services.table.s3': 'Strzyżenie męskie + broda + golenie',
            'services.table.s3desc': 'Kompletny pakiet: strzyżenie, broda i tradycyjne golenie z gorącym ręcznikiem.',
            'services.table.s3price': '83 PLN',
            'services.table.s4': 'Strzyżenie męskie + golenie',
            'services.table.s4desc': 'Strzyżenie włosów plus relaksujące golenie twarzy z gorącym ręcznikiem.',
            'services.table.s4price': '73 PLN',
            'services.table.s5': 'Strzyżenie męskie',
            'services.table.s5desc': 'Klasyczne strzyżenie męskie z konsultacją i stylizacją.',
            'services.table.s5price': '53 PLN',
            'services.table.s6': 'Golenie brody',
            'services.table.s6desc': 'Profesjonalne golenie brody z użyciem wysokiej jakości produktów.',
            'services.table.s6price': '33 PLN',
            'services.table.s7': 'Golenie twarzy',
            'services.table.s7desc': 'Tradycyjne golenie twarzy z gorącym ręcznikiem i premium produktami.',
            'services.table.s7price': '43 PLN',
            'services.table.s8': 'Strzyżenie brody',
            'services.table.s8desc': 'Przycinanie i modelowanie brody dla wypielęgnowanego wyglądu.',
            'services.table.s8price': '33 PLN',
            'services.table.s9': 'Strzyżenie dziecięce',
            'services.table.s9desc': 'Delikatna usługa dla dzieci poniżej 12 lat. Przyjazne i komfortowe doświadczenie.',
            'services.table.s9price': '43 PLN',
                    'testimonials.t3.text': 'Отличный сервис и атмосфера. Вернусь снова.',
                    'testimonials.t3.name': '- Алекс Р.',
                    'testimonials.t4.text': 'Идеальный fade каждый раз. Лучшие барберы.',
                    'testimonials.t4.name': '- Кшиштоф Т.',
            'services.why.title': 'Dlaczego Wybrać Nasze Usługi?',
            'services.why.experts.title': 'Eksperccy Barberzy',
            'services.why.experts.text': 'Nasz zespół składa się z wykwalifikowanych profesjonalistów z wieloletnim doświadczeniem w tradycyjnych i nowoczesnych technikach.',
            'services.why.products.title': 'Premium Produkty',
            'services.why.products.text': 'Używamy tylko wysokiej jakości, profesjonalnych produktów dla najlepszych rezultatów i Twojego komfortu.',
            'services.why.fast.title': 'Szybka Obsługa',
            'services.why.fast.text': 'Efektywne wizyty bez kompromisów w jakości. Większość usług wykonywana w 30-45 minut.',
            'services.why.care.title': 'Personalizowana Opieka',
            'services.why.care.text': 'Każdy klient otrzymuje indywidualną uwagę i konsultację dla idealnego stylu.',
            'services.cta.title': 'Gotowy na Rezerwację?',
            'services.cta.text': 'Skontaktuj się z nami dzisiaj, aby umówić wizytę i doświadczyć premium pielęgnacji.',
            'services.cta.btn': 'Zarezerwuj Teraz',
            // Gallery
            'gallery.hero.title': 'Nasza Galeria',
            'gallery.hero.subtitle': 'Odkryj nasze portfolio premium strzyżeń i transformacji.',
            'gallery.title': 'Galeria',
            // Booking form
            'booking.title': 'Zarezerwuj Wizytę',
            'booking.form.name': 'Twoje Imię',
            'booking.form.phone': 'Numer Telefonu',
            'booking.form.service': 'Wybierz Usługę',
            'booking.form.s1': 'Strzyżenie Włosów',
            'booking.form.s2': 'Przycinanie i Kształtowanie Brody',
            'booking.form.s3': 'Golenie Ręcznikiem na Gorąco',
            'booking.form.s4': 'Fade / Skin Fade',
            'booking.form.s5': 'Pełny Pakiet Pielęgnacyjny',
            'booking.form.datetime': 'Data i Godzina Wizyty',
                    'testimonials.t3.text': 'Чудовий сервіс і атмосфера. Повернуся знову.',
                    'testimonials.t3.name': '- Олекс Р.',
                    'testimonials.t4.text': 'Ідеальний fade кожного разу. Найкращі барбери.',
                    'testimonials.t4.name': '- Кшиштоф Т.',
            'booking.form.submit': 'Zarezerwuj',
            // Testimonials
            'testimonials.title': 'Opinie Klientów',
            'testimonials.t1.text': 'Najlepsze strzyżenie, jakie kiedykolwiek miałem. Profesjonalne i precyzyjne!',
            'testimonials.t1.name': '- Jan D.',
            'testimonials.t2.text': 'Golenie gorącym ręcznikiem jest niesamowicie relaksujące. Gorąco polecam.',
            'testimonials.t2.name': '- Michał S.',
            'testimonials.t3.text': 'Świetna usługa i atmosfera. Wrócę wkrótce.',
            'testimonials.t3.name': '- Aleks R.',
            'testimonials.t4.text': 'Doskonały fade za każdym razem. Najlepsi barberzy.',
            'testimonials.t4.name': '- Krzysztof T.',
            // Contact
            'contact.title': 'Lokalizacja i Kontakt',
            'contact.address.label': 'Adres:',
            'contact.address.value': 'Wschodu Słońce 7/U9,U10 Warszawa, Polska',
            'contact.phone.label': 'Telefon:',
            'contact.phone.value': '+48 735 533 188',
            'contact.email.label': 'Email:',
            'contact.email.value': 'info@meobarber.com',
            'contact.hours.label': 'Godziny Otwarcia:',
            'contact.hours.value': 'Poniedziałek: 09:00 - 20:00<br>Wtorek: 09:00 - 20:00<br>Środa: 09:00 - 20:00<br>Czwartek: 09:00 - 20:00<br>Piątek: 09:00 - 20:00<br>Sobota: 09:00 - 20:00<br>Niedziela: 10:00 - 18:00',
            'contact.instagram.label': 'Instagram:',
            'contact.instagram.value': '@meo_barber',
            'contact.facebook.label': 'Facebook:',
            'contact.facebook.value': 'Meo Barber',
            // Footer
            'footer.copyright': '&copy; 2025 Meo Barber. Wszelkie prawa zastrzeżone.'
        },
        en: {
            // Navigation
            'nav.brand': 'Meo Barber',
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.gallery': 'Gallery',
            'nav.contact': 'Contact',
            'nav.book': 'Book',
            // Language selector
            'lang.pl': 'Polish',
            'lang.en': 'English',
            'lang.ru': 'Russian',
            'lang.uk': 'Ukrainian',
            // Hero
            'hero.title': 'Meo Barber Warsaw',
            'hero.subtitle': 'Premium Cuts • Classic Style',
            'hero.cta': 'Book Appointment',
            'hero.contact': 'Contact',
            // Intro/Welcome
            'intro.title': 'Welcome to Meo Barber',
            'intro.text': 'Our experienced barbers combine traditional techniques with modern precision to deliver unmatched grooming services in a refined environment.',
            // Featured services (index)
            'featured.title': 'Our Services',
            'featured.service1.title': 'Men’s Haircut + Styling',
            'featured.service1.desc': 'Precision cut tailored to your style.',
            'featured.service1.price': '63 PLN',
            'featured.service2.title': 'Combo (Haircut + Beard)',
            'featured.service2.desc': 'Complete haircut and beard trim.',
            'featured.service2.price': '108 PLN',
            'featured.service3.title': 'Fade Haircut (Sides Only)',
            'featured.service3.desc': 'Smooth fade for a clean, modern finish.',
            'featured.service3.price': '54 PLN',
            'featured.all': 'See All Services',
            // About page
            'about.hero.title': 'About Meo Barber',
            'about.hero.subtitle': 'Crafting cuts since 2020. Excellence in every detail.',
            'about.story.title': 'Our Story',
            'about.story.text1': 'Founded in 2020, Meo Barber is dedicated to delivering exceptional grooming services with a focus on craftsmanship and personalized care. Our barbers blend proven techniques with modern innovations to deliver results that exceed expectations.',
            'about.story.text2': 'We believe a good haircut is more than just styling—it’s about confidence, self-expression, and the art of grooming. Every client receives individual attention and consultation in our refined, friendly environment.',
            'about.philosophy.title': 'Our Philosophy',
            'about.philosophy.text': 'We create timeless styles with exceptional care, ensuring every client leaves feeling confident and refreshed.',
            'about.philosophy.craft.title': 'Craftsmanship',
            'about.philosophy.craft.text': 'Master barbers with years of experience, dedicated to excellence in every cut.',
            'about.philosophy.personalization.title': 'Personalization',
            'about.philosophy.personalization.text': 'Every service is tailored to your unique style, face shape, and preferences.',
            'about.philosophy.quality.title': 'Quality',
            'about.philosophy.quality.text': 'We use only high-quality, professional products for the best results and your comfort.',
            // Services page
            'services.hero.title': 'Our Services',
            'services.hero.subtitle': 'Premium grooming services tailored to your style and needs.',
            'services.table.service': 'Service',
            'services.table.desc': 'Description',
            'services.table.price': 'Price',
            'services.table.s1': 'Men’s haircut + styling',
            'services.table.s1desc': 'Precision haircut tailored to your style. Includes consultation, wash, and styling.',
            'services.table.s1price': '63 PLN',
            'services.table.s2': 'Men’s haircut + beard',
            'services.table.s2desc': 'Haircut plus beard grooming for a complete look.',
            'services.table.s2price': '73 PLN',
            'services.table.s3': 'Men’s haircut + beard + shave',
            'services.table.s3desc': 'Complete package: haircut, beard, and traditional hot towel shave.',
            'services.table.s3price': '83 PLN',
            'services.table.s4': 'Men’s haircut + shave',
            'services.table.s4desc': 'Haircut plus relaxing hot towel face shave.',
            'services.table.s4price': '73 PLN',
            'services.table.s5': 'Men’s haircut',
            'services.table.s5desc': 'Classic men’s haircut with consultation and styling.',
            'services.table.s5price': '53 PLN',
            'services.table.s6': 'Beard shave',
            'services.table.s6desc': 'Professional beard shave using high-quality products.',
            'services.table.s6price': '33 PLN',
            'services.table.s7': 'Face shave',
            'services.table.s7desc': 'Traditional hot towel face shave with premium products.',
            'services.table.s7price': '43 PLN',
            'services.table.s8': 'Beard trim',
            'services.table.s8desc': 'Beard trimming and shaping for a groomed look.',
            'services.table.s8price': '33 PLN',
            'services.table.s9': 'Kids’ haircut',
            'services.table.s9desc': 'Gentle service for children under 12. Friendly and comfortable experience.',
            'services.table.s9price': '43 PLN',
            'services.why.title': 'Why Choose Our Services?',
            'services.why.experts.title': 'Expert Barbers',
            'services.why.experts.text': 'Our team consists of skilled professionals with years of experience in both traditional and modern techniques.',
            'services.why.products.title': 'Premium Products',
            'services.why.products.text': 'We use only high-quality, professional products for the best results and your comfort.',
            'services.why.fast.title': 'Fast Service',
            'services.why.fast.text': 'Efficient visits without compromising quality. Most services completed in 30-45 minutes.',
            'services.why.care.title': 'Personalized Care',
            'services.why.care.text': 'Every client receives individual attention and consultation for the perfect style.',
            'services.cta.title': 'Ready to Book?',
            'services.cta.text': 'Contact us today to schedule your appointment and experience premium grooming.',
            'services.cta.btn': 'Book Now',
            // Gallery
            'gallery.hero.title': 'Our Gallery',
            'gallery.hero.subtitle': 'Discover our premium haircut and transformation portfolio.',
            'gallery.title': 'Gallery',
            // Booking form
            'booking.title': 'Book Appointment',
            'booking.form.name': 'Your Name',
            'booking.form.phone': 'Phone Number',
            'booking.form.service': 'Select Service',
            'booking.form.s1': 'Haircut',
            'booking.form.s2': 'Beard Trim & Shape',
            'booking.form.s3': 'Hot Towel Shave',
            'booking.form.s4': 'Fade / Skin Fade',
            'booking.form.s5': 'Full Grooming Package',
            'booking.form.datetime': 'Date & Time',
            'booking.form.submit': 'Book',
            // Testimonials
            'testimonials.title': 'Client Reviews',
            'testimonials.t1.text': 'Best haircut I’ve ever had. Professional and precise!',
            'testimonials.t1.name': '- Jan D.',
            'testimonials.t2.text': 'Hot towel shave is incredibly relaxing. Highly recommend.',
            'testimonials.t2.name': '- Michał S.',
            'testimonials.t3.text': 'Great service and atmosphere. I’ll be back soon.',
            'testimonials.t3.name': '- Aleks R.',
            'testimonials.t4.text': 'Perfect fade every time. Best barbers.',
            'testimonials.t4.name': '- Krzysztof T.',
            // Contact
            'contact.title': 'Location & Contact',
            'contact.address.label': 'Address:',
            'contact.address.value': 'Wschodu Słońce 7/U9,U10 Warsaw, Poland',
            'contact.phone.label': 'Phone:',
            'contact.phone.value': '+48 735 533 188',
            'contact.email.label': 'Email:',
            'contact.email.value': 'info@meobarber.com',
            'contact.hours.label': 'Opening Hours:',
            'contact.hours.value': 'Monday: 09:00 - 20:00<br>Tuesday: 09:00 - 20:00<br>Wednesday: 09:00 - 20:00<br>Thursday: 09:00 - 20:00<br>Friday: 09:00 - 20:00<br>Saturday: 09:00 - 20:00<br>Sunday: 10:00 - 18:00',
            'contact.instagram.label': 'Instagram:',
            'contact.instagram.value': '@meo_barber',
            'contact.facebook.label': 'Facebook:',
            'contact.facebook.value': 'Meo Barber',
            // Footer
            'footer.copyright': '&copy; 2025 Meo Barber. All rights reserved.'
        },
        ru: {
            // Navigation
            'nav.brand': 'Meo Barber',
            'nav.home': 'Главная',
            'nav.about': 'О нас',
            'nav.services': 'Услуги',
            'nav.gallery': 'Галерея',
            'nav.contact': 'Контакт',
            'nav.book': 'Записаться',
            // Language selector
            'lang.pl': 'Польский',
            'lang.en': 'Английский',
            'lang.ru': 'Русский',
            'lang.uk': 'Украинский',
            // Hero
            'hero.title': 'Meo Barber Варшава',
            'hero.subtitle': 'Премиум стрижки • Классический стиль',
            'hero.cta': 'Записаться',
            'hero.contact': 'Контакт',
            // Intro/Welcome
            'intro.title': 'Добро пожаловать в Meo Barber',
            'intro.text': 'Наши опытные барберы сочетают традиционные техники с современной точностью, чтобы предоставить непревзойденные услуги в изысканной атмосфере.',
            // Featured services (index)
            'featured.title': 'Наши услуги',
            'featured.service1.title': 'Мужская стрижка + укладка',
            'featured.service1.desc': 'Точная стрижка, соответствующая вашему стилю.',
            'featured.service1.price': '63 PLN',
            'featured.service2.title': 'Комбо (стрижка + борода)',
            'featured.service2.desc': 'Комплексная стрижка и оформление бороды.',
            'featured.service2.price': '108 PLN',
            'featured.service3.title': 'Стрижка Fade (только бока)',
            'featured.service3.desc': 'Плавный переход для чистого современного вида.',
            'featured.service3.price': '54 PLN',
            'featured.all': 'Все услуги',
            // About page
            'about.hero.title': 'О Meo Barber',
            'about.hero.subtitle': 'Мастерство с 2020 года. Совершенство в каждой детали.',
            'about.story.title': 'Наша история',
            'about.story.text1': 'Основанная в 2020 году, Meo Barber посвящена предоставлению исключительных услуг с акцентом на мастерство и индивидуальный подход. Наши барберы сочетают проверенные техники с современными инновациями для достижения лучших результатов.',
            'about.story.text2': 'Мы считаем, что хорошая стрижка — это больше, чем просто укладка — это уверенность, самовыражение и искусство ухода. Каждый клиент получает индивидуальное внимание и консультацию в нашей изысканной, дружелюбной атмосфере.',
            'about.philosophy.title': 'Наша философия',
            'about.philosophy.text': 'Мы создаем вечные образы с особой заботой, чтобы каждый клиент уходил уверенным и обновленным.',
            'about.philosophy.craft.title': 'Мастерство',
            'about.philosophy.craft.text': 'Мастера-барберы с многолетним опытом, преданные совершенству в каждом движении.',
            'about.philosophy.personalization.title': 'Персонализация',
            'about.philosophy.personalization.text': 'Каждая услуга адаптирована к вашему стилю, форме лица и предпочтениям.',
            'about.philosophy.quality.title': 'Качество',
            'about.philosophy.quality.text': 'Мы используем только профессиональные продукты высокого качества для лучших результатов и вашего комфорта.',
            // Services page
            'services.hero.title': 'Наши услуги',
            'services.hero.subtitle': 'Премиальные услуги, адаптированные к вашему стилю и потребностям.',
            'services.table.service': 'Услуга',
            'services.table.desc': 'Описание',
            'services.table.price': 'Цена',
            'services.table.s1': 'Мужская стрижка + укладка',
            'services.table.s1desc': 'Точная стрижка, консультация, мытье и укладка.',
            'services.table.s1price': '63 PLN',
            'services.table.s2': 'Мужская стрижка + борода',
            'services.table.s2desc': 'Стрижка и уход за бородой для полного образа.',
            'services.table.s2price': '73 PLN',
            'services.table.s3': 'Мужская стрижка + борода + бритье',
            'services.table.s3desc': 'Полный пакет: стрижка, борода и традиционное бритье горячим полотенцем.',
            'services.table.s3price': '83 PLN',
            'services.table.s4': 'Мужская стрижка + бритье',
            'services.table.s4desc': 'Стрижка и расслабляющее бритье лица горячим полотенцем.',
            'services.table.s4price': '73 PLN',
            'services.table.s5': 'Мужская стрижка',
            'services.table.s5desc': 'Классическая мужская стрижка с консультацией и укладкой.',
            'services.table.s5price': '53 PLN',
            'services.table.s6': 'Бритье бороды',
            'services.table.s6desc': 'Профессиональное бритье бороды с использованием качественных продуктов.',
            'services.table.s6price': '33 PLN',
            'services.table.s7': 'Бритье лица',
            'services.table.s7desc': 'Традиционное бритье лица горячим полотенцем и премиум продуктами.',
            'services.table.s7price': '43 PLN',
            'services.table.s8': 'Стрижка бороды',
            'services.table.s8desc': 'Стрижка и моделирование бороды для ухоженного вида.',
            'services.table.s8price': '33 PLN',
            'services.table.s9': 'Детская стрижка',
            'services.table.s9desc': 'Деликатная услуга для детей до 12 лет. Дружелюбная и комфортная атмосфера.',
            'services.table.s9price': '43 PLN',
            'services.why.title': 'Почему выбирают нас?',
            'services.why.experts.title': 'Экспертные барберы',
            'services.why.experts.text': 'Наша команда — это профессионалы с многолетним опытом в традиционных и современных техниках.',
            'services.why.products.title': 'Премиум продукты',
            'services.why.products.text': 'Мы используем только профессиональные продукты высокого качества для лучших результатов и вашего комфорта.',
            'services.why.fast.title': 'Быстрое обслуживание',
            'services.why.fast.text': 'Эффективные визиты без компромиссов по качеству. Большинство услуг выполняется за 30-45 минут.',
            'services.why.care.title': 'Персональный подход',
            'services.why.care.text': 'Каждому клиенту уделяется индивидуальное внимание и консультация для идеального стиля.',
            'services.cta.title': 'Готовы записаться?',
            'services.cta.text': 'Свяжитесь с нами сегодня, чтобы записаться и испытать премиальный уход.',
            'services.cta.btn': 'Записаться',
            // Gallery
            'gallery.hero.title': 'Наша галерея',
            'gallery.hero.subtitle': 'Откройте для себя наше портфолио стрижек и преображений.',
            'gallery.title': 'Галерея',
            // Booking form
            'booking.title': 'Записаться',
            'booking.form.name': 'Ваше имя',
            'booking.form.phone': 'Телефон',
            'booking.form.service': 'Выберите услугу',
            'booking.form.s1': 'Стрижка волос',
            'booking.form.s2': 'Стрижка и оформление бороды',
            'booking.form.s3': 'Бритье горячим полотенцем',
            'booking.form.s4': 'Fade / Skin Fade',
            'booking.form.s5': 'Полный пакет ухода',
            'booking.form.datetime': 'Дата и время',
            'booking.form.submit': 'Записаться',
            // Testimonials
            'testimonials.title': 'Отзывы клиентов',
            'testimonials.t1.text': 'Лучшая стрижка, что у меня была. Профессионально и точно!',
            'testimonials.t1.name': '- Ян Д.',
            'testimonials.t2.text': 'Бритье горячим полотенцем невероятно расслабляет. Очень рекомендую.',
            'testimonials.t2.name': '- Михаил С.',
            'testimonials.t3.text': 'Отличный сервис и атмосфера. Вернусь снова.',
            'testimonials.t3.name': '- Алекс Р.',
            'testimonials.t4.text': 'Идеальный fade каждый раз. Лучшие барберы.',
            'testimonials.t4.name': '- Кшиштоф Т.',
            // Contact
            'contact.title': 'Локация и контакт',
            'contact.address.label': 'Адрес:',
            'contact.address.value': 'Wschodu Słońce 7/U9,U10 Варшава, Польша',
            'contact.phone.label': 'Телефон:',
            'contact.phone.value': '+48 735 533 188',
            'contact.email.label': 'Email:',
            'contact.email.value': 'info@meobarber.com',
            'contact.hours.label': 'Часы работы:',
            'contact.hours.value': 'Понедельник: 09:00 - 20:00<br>Вторник: 09:00 - 20:00<br>Среда: 09:00 - 20:00<br>Четверг: 09:00 - 20:00<br>Пятница: 09:00 - 20:00<br>Суббота: 09:00 - 20:00<br>Воскресенье: 10:00 - 18:00',
            'contact.instagram.label': 'Instagram:',
            'contact.instagram.value': '@meo_barber',
            'contact.facebook.label': 'Facebook:',
            'contact.facebook.value': 'Meo Barber',
            // Footer
            'footer.copyright': '&copy; 2025 Meo Barber. Все права защищены.'
        },
        uk: {
            // Navigation
            'nav.brand': 'Meo Barber',
            'nav.home': 'Головна',
            'nav.about': 'Про нас',
            'nav.services': 'Послуги',
            'nav.gallery': 'Галерея',
            'nav.contact': 'Контакт',
            'nav.book': 'Забронювати',
            // Language selector
            'lang.pl': 'Польська',
            'lang.en': 'Англійська',
            'lang.ru': 'Російська',
            'lang.uk': 'Українська',
            // Hero
            'hero.title': 'Meo Barber Варшава',
            'hero.subtitle': 'Преміум стрижки • Класичний стиль',
            'hero.cta': 'Забронювати',
            'hero.contact': 'Контакт',
            // Intro/Welcome
            'intro.title': 'Ласкаво просимо до Meo Barber',
            'intro.text': 'Наші досвідчені барбери поєднують традиційні техніки з сучасною точністю, щоб надати неперевершені послуги вишуканого догляду.',
            // Featured services (index)
            'featured.title': 'Наші послуги',
            'featured.service1.title': 'Чоловіча стрижка + укладка',
            'featured.service1.desc': 'Точна стрижка, що підходить до вашого стилю.',
            'featured.service1.price': '63 PLN',
            'featured.service2.title': 'Комбо (стрижка + борода)',
            'featured.service2.desc': 'Комплексна стрижка та догляд за бородою.',
            'featured.service2.price': '108 PLN',
            'featured.service3.title': 'Стрижка Fade (лише боки)',
            'featured.service3.desc': 'Плавний перехід для чистого сучасного вигляду.',
            'featured.service3.price': '54 PLN',
            'featured.all': 'Всі послуги',
            // About page
            'about.hero.title': 'Про Meo Barber',
            'about.hero.subtitle': 'Майстерність з 2020 року. Досконалість у кожній деталі.',
            'about.story.title': 'Наша історія',
            'about.story.text1': 'Заснований у 2020 році, Meo Barber присвячений наданню виняткових послуг з акцентом на майстерність та індивідуальний підхід. Наші барбери поєднують перевірені техніки з сучасними інноваціями для досягнення найкращих результатів.',
            'about.story.text2': 'Ми вважаємо, що гарна стрижка — це більше, ніж просто укладка — це впевненість, самовираження та мистецтво догляду. Кожен клієнт отримує індивідуальну увагу та консультацію у нашій вишуканій, дружній атмосфері.',
            'about.philosophy.title': 'Наша філософія',
            'about.philosophy.text': 'Ми створюємо вічні образи з особливою турботою, щоб кожен клієнт виходив впевненим і оновленим.',
            'about.philosophy.craft.title': 'Майстерність',
            'about.philosophy.craft.text': 'Майстри-барбери з багаторічним досвідом, віддані досконалості у кожному русі.',
            'about.philosophy.personalization.title': 'Персоналізація',
            'about.philosophy.personalization.text': 'Кожна послуга адаптована до вашого стилю, форми обличчя та вподобань.',
            'about.philosophy.quality.title': 'Якість',
            'about.philosophy.quality.text': 'Ми використовуємо лише професійні продукти високої якості для найкращих результатів і вашого комфорту.',
            // Services page
            'services.hero.title': 'Наші послуги',
            'services.hero.subtitle': 'Преміальні послуги, адаптовані до вашого стилю та потреб.',
            'services.table.service': 'Послуга',
            'services.table.desc': 'Опис',
            'services.table.price': 'Ціна',
            'services.table.s1': 'Чоловіча стрижка + укладка',
            'services.table.s1desc': 'Точна стрижка, консультація, миття та укладка.',
            'services.table.s1price': '63 PLN',
            'services.table.s2': 'Чоловіча стрижка + борода',
            'services.table.s2desc': 'Стрижка та догляд за бородою для повного образу.',
            'services.table.s2price': '73 PLN',
            'services.table.s3': 'Чоловіча стрижка + борода + гоління',
            'services.table.s3desc': 'Повний пакет: стрижка, борода і традиційне гоління гарячим рушником.',
            'services.table.s3price': '83 PLN',
            'services.table.s4': 'Чоловіча стрижка + гоління',
            'services.table.s4desc': 'Стрижка та розслаблююче гоління обличчя гарячим рушником.',
            'services.table.s4price': '73 PLN',
            'services.table.s5': 'Чоловіча стрижка',
            'services.table.s5desc': 'Класична чоловіча стрижка з консультацією та укладкою.',
            'services.table.s5price': '53 PLN',
            'services.table.s6': 'Гоління бороди',
            'services.table.s6desc': 'Професійне гоління бороди з використанням якісних продуктів.',
            'services.table.s6price': '33 PLN',
            'services.table.s7': 'Гоління обличчя',
            'services.table.s7desc': 'Традиційне гоління обличчя гарячим рушником і преміум продуктами.',
            'services.table.s7price': '43 PLN',
            'services.table.s8': 'Стрижка бороди',
            'services.table.s8desc': 'Стрижка та моделювання бороди для доглянутого вигляду.',
            'services.table.s8price': '33 PLN',
            'services.table.s9': 'Дитяча стрижка',
            'services.table.s9desc': 'Делікатна послуга для дітей до 12 років. Дружня та комфортна атмосфера.',
            'services.table.s9price': '43 PLN',
            'services.why.title': 'Чому обирають нас?',
            'services.why.experts.title': 'Експертні барбери',
            'services.why.experts.text': 'Наша команда — це професіонали з багаторічним досвідом у традиційних і сучасних техніках.',
            'services.why.products.title': 'Преміум продукти',
            'services.why.products.text': 'Ми використовуємо лише професійні продукти високої якості для найкращих результатів і вашого комфорту.',
            'services.why.fast.title': 'Швидке обслуговування',
            'services.why.fast.text': 'Ефективні візити без компромісів щодо якості. Більшість послуг виконується за 30-45 хвилин.',
            'services.why.care.title': 'Персональний підхід',
            'services.why.care.text': 'Кожному клієнту приділяється індивідуальна увага та консультація для ідеального стилю.',
            'services.cta.title': 'Готові забронювати?',
            'services.cta.text': 'Зв’яжіться з нами сьогодні, щоб забронювати і відчути преміальний догляд.',
            'services.cta.btn': 'Забронювати',
            // Gallery
            'gallery.hero.title': 'Наша галерея',
            'gallery.hero.subtitle': 'Відкрийте для себе наше портфоліо стрижок і трансформацій.',
            'gallery.title': 'Галерея',
            // Booking form
            'booking.title': 'Забронювати',
            'booking.form.name': 'Ваше ім’я',
            'booking.form.phone': 'Телефон',
            'booking.form.service': 'Оберіть послугу',
            'booking.form.s1': 'Стрижка волосся',
            'booking.form.s2': 'Стрижка і моделювання бороди',
            'booking.form.s3': 'Гоління гарячим рушником',
            'booking.form.s4': 'Fade / Skin Fade',
            'booking.form.s5': 'Повний пакет догляду',
            'booking.form.datetime': 'Дата і час',
            'booking.form.submit': 'Забронювати',
            // Testimonials
            'testimonials.title': 'Відгуки клієнтів',
            'testimonials.t1.text': 'Найкраща стрижка, яку я коли-небудь мав. Професійно і точно!',
            'testimonials.t1.name': '- Ян Д.',
            'testimonials.t2.text': 'Гоління гарячим рушником неймовірно розслабляє. Дуже рекомендую.',
            'testimonials.t2.name': '- Михайло С.',
            'testimonials.t3.text': 'Чудовий сервіс і атмосфера. Повернуся знову.',
            'testimonials.t3.name': '- Олекс Р.',
            'testimonials.t4.text': 'Ідеальний fade кожного разу. Найкращі барбери.',
            'testimonials.t4.name': '- Кшиштоф Т.',
            // Contact
            'contact.title': 'Локація і контакт',
            'contact.address.label': 'Адреса:',
            'contact.address.value': 'Wschodu Słońce 7/U9,U10 Варшава, Польща',
            'contact.phone.label': 'Телефон:',
            'contact.phone.value': '+48 735 533 188',
            'contact.email.label': 'Email:',
            'contact.email.value': 'info@meobarber.com',
            'contact.hours.label': 'Години роботи:',
            'contact.hours.value': 'Понеділок: 09:00 - 20:00<br>Вівторок: 09:00 - 20:00<br>Середа: 09:00 - 20:00<br>Четвер: 09:00 - 20:00<br>П’ятниця: 09:00 - 20:00<br>Субота: 09:00 - 20:00<br>Неділя: 10:00 - 18:00',
            'contact.instagram.label': 'Instagram:',
            'contact.instagram.value': '@meo_barber',
            'contact.facebook.label': 'Facebook:',
            'contact.facebook.value': 'Meo Barber',
            // Footer
            'footer.copyright': '&copy; 2025 Meo Barber. Всі права захищені.'
        }
};

document.addEventListener('DOMContentLoaded', () => {
    // Language selector event
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.addEventListener('change', handleLanguageChange);
        langSelect.value = currentLanguage;
    }
    applyTranslations();
});

// Ensure translations are applied after SPA navigation
window.applyTranslations = applyTranslations;

// SPA Navigation Logic
const SPA = {
    mainSelector: '#spa-main', // The main content area to replace
    navSelector: 'a[data-spa-nav]',
    init() {
        // Attach click handlers to navigation links
        document.querySelectorAll(this.navSelector).forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
                    e.preventDefault();
                    SPA.navigate(href);
                }
            });
        });
        // Handle browser navigation (back/forward)
        window.addEventListener('popstate', (e) => {
            SPA.navigate(location.pathname, true);
        });
    },
    navigate(url, isPop=false) {
        // Show loading indicator (optional)
        const main = document.querySelector(this.mainSelector);
        if (main) main.classList.add('spa-loading');
        fetch(url)
            .then(res => res.text())
            .then(html => {
                // Extract the main content from the fetched HTML
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newMain = doc.querySelector(this.mainSelector);
                if (newMain && main) {
                    main.innerHTML = newMain.innerHTML;
                    if (!isPop) history.pushState({}, '', url);
                    // Only re-apply translation logic and scroll, do NOT call SPA.init() again
                    if (typeof window.applyTranslations === 'function') window.applyTranslations();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    // Fallback: reload full page if main not found
                    window.location.href = url;
                }
            })
            .catch(() => {
                window.location.href = url;
            })
            .finally(() => {
                if (main) main.classList.remove('spa-loading');
            });
    }
};

// Initialize SPA navigation on DOMContentLoaded (only once)
if (!window._spaInit) {
    document.addEventListener('DOMContentLoaded', () => {
        SPA.init();
        window._spaInit = true;
    });
}

// Smooth scrolling for anchor links (within page)
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);
document.querySelectorAll('.card, .testimonial, .fade-in').forEach(el => {
    observer.observe(el);
});
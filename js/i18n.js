/* ═══════════════════════════════════════════════════════════════
   ASMAR BARBERSHOP — Internationalization (i18n)
   ═══════════════════════════════════════════════════════════════
   Handles bilingual content switching between English and Arabic.
   ═══════════════════════════════════════════════════════════════ */

const I18N = {
  currentLang: 'en',

  // Arabic translations
  ar: {
    // Navigation
    'nav.services': 'الخدمات',
    'nav.gallery': 'معرض الأعمال',
    'nav.team': 'فريقنا',
    'nav.contact': 'تواصل معنا',
    'nav.book': 'احجز الآن',

    // Hero
    'hero.label': 'عناية راقية للرجال',
    'hero.title.line1': 'فن',
    'hero.title.line2': 'العناية',
    'hero.subtitle': 'قصات دقيقة. عناية متخصصة. حرفة مصقّلة للرجل العصري.',
    'hero.cta.whatsapp': 'احجز عبر واتساب',
    'hero.cta.services': 'استكشف الخدمات',
    'hero.scroll': 'مرر للأسفل',

    // About
    'about.label': 'قصتنا',
    'about.title.line1': 'حيث تلتقي الدقة',
    'about.title.line2': 'بالأناقة',
    'about.body1': 'في صالون عزمار، نؤمن بأن العناية بالpearance ليست مجرد خدمة — إنها تجربة. تأسس على يد عبدالله عزمار، نمزج بين التقنية العصرية والحرفية الخالدة لتقديم إطلالات تُعرّف الثقة.',
    'about.body2': 'كل عميل يدخلประตورنا يتلقى اهتماماً كاملاً، وأيدٍ خبيرة، وإطلالة مصممة خصيصاً له.',
    'about.signature': 'المؤسس',
    'about.signature.name': 'عبدالله أسمر',

    // Services
    'services.label': 'ما نقدمه',
    'services.title': 'خدماتنا',
    'services.subtitle': 'كل خدمة هي تجربة مصممة بعناية — ليست مجرد معاملة.',

    'service.1.title': 'قصة كلاسيكية',
    'service.1.desc': 'قصة دقيقة مصممة خصيصاً لشكل وجهك ونمط حياتك. تشمل الاستشارة والغسل والقص والتسريح.',
    'service.2.title': 'تشكيل اللحية',
    'service.2.desc': 'تشكيل متخصص للحية، معالجة المنشفة الساخنة، وتحديد دقيق لإطلالة حادة وواضحة.',
    'service.3.title': 'عناية كاملة',
    'service.3.desc': 'التجربة الكاملة: قصة شعر، تشكيل لحية، حلاقة بالمنشفة الساخنة، تدلي scalp والتسريح الفاخر.',
    'service.4.title': 'حلاقة بالمنشفة الساخنة',
    'service.4.desc': 'حلاقة تقليدية بالشفرة مع تحضير بالمنشفة الساخنة وزيت ما قبل الحلاقة وبلسم بعد.',
    'service.5.title': 'قصة أطفال',
    'service.5.desc': 'قصات صبور وودودة للأولاد. نحرص على أن يشعر الصغار بالراحة من البداية للنهاية.',
    'service.6.title': 'combo شعر ولحية',
    'service.6.desc': 'قصة شعر + تشكيل لحية في موعد واحد سلس. الخيار الأمثل للرجل المتكامل.',

    'service.book': 'احجز هذا',

    // Gallery
    'gallery.label': 'أعمالنا',
    'gallery.title': 'جديد من الكرسي',
    'gallery.subtitle': 'كل قَصة تحكي قِصة. إليك بعضها.',
    'gallery.cta': 'المزيد على انستغرام',
    'gallery.view': 'عرض انستغرام',

    // Team
    'team.label': 'الحرفيون',
    'team.title': 'تعرّف على فريقنا',
    'team.caption': 'الحرفيون خلف الكرسي.',

    // Contact
    'contact.label': 'تواصل معنا',
    'contact.title': 'اعثر علينا',
    'contact.whatsapp': 'واتساب',
    'contact.whatsapp.desc': 'تحدث معنا مباشرة',
    'contact.instagram': 'انستغرام',
    'contact.instagram.desc': '@asmar_barbarshop',
    'contact.hours': 'ساعات العمل',
    'contact.hours.desc': 'يومياً: 10:00 صباحاً — 10:00 مساءً',
    'contact.map.title': 'موقع صالون أسمر',

    // Footer
    'footer.tagline': 'عناية راقية للرجال.',
    'footer.services': 'الخدمات',
    'footer.gallery': 'معرض الأعمال',
    'footer.team': 'فريقنا',
    'footer.contact': 'تواصل معنا',
    'footer.rights': '© 2025 صالون أسمر. جميع الحقوق محفوظة.',

    // WhatsApp Float
    'whatsapp.float': 'تحدث على واتساب',
  },

  // English translations
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.book': 'Book Now',

    // Hero
    'hero.label': 'Premium Men\'s Grooming',
    'hero.title.line1': 'The Art of',
    'hero.title.line2': 'Grooming',
    'hero.subtitle': 'Precision cuts. Expert grooming. A craft refined for the modern gentleman.',
    'hero.cta.whatsapp': 'Book via WhatsApp',
    'hero.cta.services': 'Explore Services',
    'hero.scroll': 'Scroll',

    // About
    'about.label': 'Our Story',
    'about.title.line1': 'Where Precision',
    'about.title.line2': 'Meets Style',
    'about.body1': 'At Asmar Barber Shop, we believe grooming is more than a service — it\'s an experience. Founded by Abdullah Asmar, we blend modern technique with timeless craft to deliver looks that define confidence.',
    'about.body2': 'Every client who walks through our door receives complete attention, expert hands, and a look tailored precisely to them.',
    'about.signature': 'Founder',
    'about.signature.name': 'Abdullah Asmar',

    // Services
    'services.label': 'What We Offer',
    'services.title': 'Our Services',
    'services.subtitle': 'Every service is a carefully crafted experience — not a transaction.',

    'service.1.title': 'Classic Haircut',
    'service.1.desc': 'A precision cut tailored to your face shape and lifestyle. Includes consultation, shampoo, cut & finish.',
    'service.2.title': 'Beard Sculpt',
    'service.2.desc': 'Expert beard sculpting, hot towel treatment, and precise line-up for a sharp, defined look.',
    'service.3.title': 'Full Grooming',
    'service.3.desc': 'The complete experience: haircut, beard trim, hot towel shave, scalp massage & premium styling.',
    'service.4.title': 'Hot Towel Shave',
    'service.4.desc': 'A traditional straight-razor shave with hot towel prep, pre-shave oil, and soothing aftercare.',
    'service.5.title': 'Kids Haircut',
    'service.5.desc': 'Patient, friendly cuts for boys. We make sure the little ones feel comfortable from start to finish.',
    'service.6.title': 'Hair & Beard Combo',
    'service.6.desc': 'Haircut + beard sculpt in one seamless appointment. The go-to for the complete gentleman.',

    'service.book': 'Book This',

    // Gallery
    'gallery.label': 'Our Work',
    'gallery.title': 'Fresh Out the Chair',
    'gallery.subtitle': 'Every cut tells a story. Here are a few of ours.',
    'gallery.cta': 'See more on our Instagram',
    'gallery.view': 'View Instagram',

    // Team
    'team.label': 'The Craftsmen',
    'team.title': 'Meet Our Team',
    'team.caption': 'The craftsmen behind the chair.',

    // Contact
    'contact.label': 'Get in Touch',
    'contact.title': 'Find Us',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.desc': 'Chat with us directly',
    'contact.instagram': 'Instagram',
    'contact.instagram.desc': '@asmar_barbarshop',
    'contact.hours': 'Opening Hours',
    'contact.hours.desc': 'Daily: 10:00 AM — 10:00 PM',
    'contact.map.title': 'Asmar Barber Shop Location',

    // Footer
    'footer.tagline': 'Premium men\'s grooming.',
    'footer.services': 'Services',
    'footer.gallery': 'Gallery',
    'footer.team': 'Team',
    'footer.contact': 'Contact',
    'footer.rights': '© 2025 Asmar Barber Shop. All rights reserved.',

    // WhatsApp Float
    'whatsapp.float': 'Chat on WhatsApp',
  },

  /**
   * Initialize the i18n system
   */
  init() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('asmar-lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      this.currentLang = savedLang;
    }

    // Apply saved language
    this.applyLanguage(this.currentLang);
  },

  /**
   * Switch to the opposite language
   */
  toggle() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('asmar-lang', this.currentLang);
    this.applyLanguage(this.currentLang);
    this.updateSwitchButton();
  },

  /**
   * Apply language to the entire page
   */
  applyLanguage(lang) {
    const html = document.documentElement;
    const translations = this[lang];

    // Set HTML attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });

    // Update all elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[key]) {
        el.placeholder = translations[key];
      }
    });

    // Update all elements with data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (translations[key]) {
        el.setAttribute('aria-label', translations[key]);
      }
    });

    // Update all elements with data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (translations[key]) {
        el.setAttribute('title', translations[key]);
      }
    });

    // Update switch button
    this.updateSwitchButton();
  },

  /**
   * Update the language switch button text
   */
  updateSwitchButton() {
    const langEn = document.querySelector('[data-lang="en"]');
    const langAr = document.querySelector('[data-lang="ar"]');

    if (langEn && langAr) {
      if (this.currentLang === 'en') {
        langEn.classList.add('nav__lang-active');
        langEn.classList.remove('nav__lang-inactive');
        langAr.classList.add('nav__lang-inactive');
        langAr.classList.remove('nav__lang-active');
      } else {
        langAr.classList.add('nav__lang-active');
        langAr.classList.remove('nav__lang-inactive');
        langEn.classList.add('nav__lang-inactive');
        langEn.classList.remove('nav__lang-active');
      }
    }
  },

  /**
   * Get translation for a key
   */
  t(key) {
    return this[this.currentLang][key] || key;
  }
};

// Export for use in main.js
window.I18N = I18N;

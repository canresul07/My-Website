/**
 * Portfolyo sitesi - Minimal JavaScript
 * Dark mode, dil seçeneği (TR/EN), smooth scroll, animasyonlar, typing, scroll progress, back to top
 */

(function () {
  'use strict';

  // ========== DİL (i18n) - TR / EN ==========
  var translations = {
    tr: {
      nav: { home: 'Ana Sayfa', about: 'Hakkımda', skills: 'Yetenekler', projects: 'Projeler', contact: 'İletişim', theme: 'Tema Değiştir', langSwitch: 'Dil: Türkçe / English' },
      hero: { greeting: 'Merhaba, ben', tagline: 'Full stack web geliştirme odaklı, React, .NET ve Node.js ile modern uygulamalar üreten; oyun geliştirme deneyimiyle problem çözme becerilerini güçlendiren bilgisayar mühendisliği öğrencisi.', ctaProjects: 'Projelerimi Gör', ctaContact: 'İletişime Geç' },
      about: { title: 'Hakkımda', p1: 'Bilgisayar mühendisliği öğrencisi olarak full stack web geliştirme alanında pratik deneyime sahibim; React, Angular, .NET, Node.js ve MySQL teknolojilerinde uzmanlaşmaktayım. REST API tasarımı, veritabanı şemaları oluşturma ve kullanıcı dostu arayüz geliştirme konularında yetkin olup temiz kod ve yazılım mimarisi prensiplerine önem veriyorum. Fintech alanındaki stajımda çevik bir ekip içinde e-ticaret platformu geliştirme sürecine katkıda bulundum; frontend–backend entegrasyonu ve veritabanı operasyonlarında aktif rol aldım. Ayrıca Unity ve C# ile oyun projeleri geliştirerek problem çözme, hata ayıklama ve performans optimizasyonu becerilerimi güçlendirdim. Yenilikçi projelerde sorumluluk almayı, ekipler arası iş birliğini ve profesyonel bir full stack mühendis olarak kendimi geliştirmeyi hedefliyorum.'},
      skills: { title: 'Yetenekler & Teknolojiler', skill1: 'Full Stack Web Geliştirme', skill2: 'Backend & API Tasarımı', skill3: 'Veritabanı & Yazılım Mimarisi', skill4: 'Oyun Geliştirme & Problem Çözme', desc1: 'React, Angular, .NET ve Node.js kullanarak uçtan uca web uygulamaları geliştiriyorum. Temiz mimari, duyarlı arayüz ve ölçeklenebilir backend çözümlerine odaklanıyorum.', desc2: '.NET ve Node.js ile REST API, kimlik doğrulama ve sunucu tarafı iş mantığı geliştiriyorum. Frontend ile güvenli ve verimli backend entegrasyonu konusunda deneyim sahibiyim.', desc3: 'MySQL veritabanı tasarımı, ER modelleme ve optimize sorgular üzerinde çalışıyorum. Sürdürülebilir ve performanslı sistemler için mimari prensipleri uyguluyorum.', desc4: 'Unity ve C# ile oyun projeleri geliştirerek algoritmik düşünme, hata ayıklama ve performans optimizasyonu becerilerimi güçlendiriyorum.' },
      projects: { title: 'Projeler', project1Title: 'Projenizin Adı', project1Desc: 'Projenizin kısa açıklaması buraya. Ne yaptığınızı ve hangi teknolojileri kullandığınızı yazın.', project1Detail: "Ek detay: hover'da görünen açıklama.", project2Title: 'İkinci Projeniz', project2Desc: 'İkinci proje açıklaması. Placeholder metin.', project2Detail: 'Hover detayı.', project3Title: 'Üçüncü Projeniz', project3Desc: 'Üçüncü proje açıklaması. Placeholder.', project3Detail: 'Hover detayı.', live: 'Canlı', source: 'Kaynak' },
      contact: { title: 'İletişim', email: 'E-posta', nameLabel: 'Adınız', emailLabel: 'E-posta', messageLabel: 'Mesajınız', namePlaceholder: 'Adınız Soyadınız', messagePlaceholder: 'Mesajınızı buraya yazın...', send: 'Gönder' },
      footer: { rights: 'Tüm hakları saklıdır.' },
      backToTop: 'Yukarı çık',
      formDemo: 'İletişim formu şu an demo modunda. Backend bağlandığında çalışacak.'
    },
    en: {
      nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact', theme: 'Toggle theme', langSwitch: 'Language: Türkçe / English' },
      hero: { greeting: "Hi, I'm", tagline: 'Computer Engineering student focused on full stack web development with React, .NET, and Node.js, strengthening problem-solving skills through game development with Unity.', ctaProjects: 'View Projects', ctaContact: 'Get in Touch' },
      about: { title: 'About', p1: 'Computer Engineering student with hands-on experience in full stack web development, specializing in React, Angular, .NET, Node.js, and MySQL. Skilled in designing REST APIs, database schemas, and user-friendly interfaces while following clean code and software architecture principles. Completed a fintech internship where I contributed to an agile team developing an e-commerce platform, working on frontend–backend integration and database operations. Additionally developing games with Unity and C#, gaining strong problem-solving, debugging, and performance optimization skills. Motivated to contribute to innovative projects, collaborate within cross-functional teams, and grow as a professional full stack engineer.' },
      skills: { title: 'Skills & Technologies', skill1: 'Full Stack Web Development', skill2: 'Backend & API Design', skill3: 'Database & Architecture', skill4: 'Game Development & Problem Solving', desc1: 'Building end-to-end web applications using React, Angular, .NET, and Node.js. Focused on clean architecture, responsive UI, and scalable backend solutions.', desc2: 'Developing RESTful APIs, authentication systems, and server-side logic with .NET and Node.js. Experienced in integrating frontend with secure and efficient backend services.', desc3: 'Designing MySQL databases, ER models, and optimized queries. Applying software architecture principles to create maintainable and high-performance systems.', desc4: 'Creating games with Unity and C#, improving algorithmic thinking, debugging, and performance optimization skills that support my software development workflow.' },
      projects: { title: 'Projects', project1Title: 'Your Project Name', project1Desc: 'Short description of your project. What you built and which technologies you used.', project1Detail: 'Extra detail shown on hover.', project2Title: 'Second Project', project2Desc: 'Second project description. Placeholder.', project2Detail: 'Hover detail.', project3Title: 'Third Project', project3Desc: 'Third project description. Placeholder.', project3Detail: 'Hover detail.', live: 'Live', source: 'Source' },
      contact: { title: 'Contact', email: 'Email', nameLabel: 'Your name', emailLabel: 'Email', messageLabel: 'Your message', namePlaceholder: 'Your name', messagePlaceholder: 'Write your message here...', send: 'Send' },
      footer: { rights: 'All rights reserved.' },
      backToTop: 'Back to top',
      formDemo: 'Contact form is in demo mode. It will work when connected to a backend.'
    }
  };

  function getLang() {
    return localStorage.getItem('lang') || 'tr';
  }

  function getText(lang, key) {
    var parts = key.split('.');
    var obj = translations[lang];
    for (var i = 0; i < parts.length && obj; i++) obj = obj[parts[i]];
    return obj != null ? obj : key;
  }

  function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = getText(lang, key);
      if (text !== key) el.textContent = text;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var text = getText(lang, key);
      if (text !== key) el.placeholder = text;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      var text = getText(lang, key);
      if (text !== key) el.setAttribute('aria-label', text);
    });
    document.documentElement.lang = lang === 'en' ? 'en' : 'tr';
    var langDisplay = document.getElementById('lang-display');
    if (langDisplay) langDisplay.textContent = lang === 'en' ? 'EN' : 'TR';
    var langBtnMobile = document.getElementById('lang-toggle-mobile');
    if (langBtnMobile) langBtnMobile.textContent = lang === 'en' ? 'Language: English / Türkçe' : 'Dil: Türkçe / English';
  }

  function setLang(lang) {
    var main = document.querySelector('main');
    if (main) {
      main.classList.add('lang-switching');
      setTimeout(function () {
        localStorage.setItem('lang', lang);
        applyTranslations(lang);
        main.classList.remove('lang-switching');
      }, 200);
    } else {
      localStorage.setItem('lang', lang);
      applyTranslations(lang);
    }
  }

  function toggleLang() {
    var next = getLang() === 'tr' ? 'en' : 'tr';
    setLang(next);
  }

  document.getElementById('lang-toggle')?.addEventListener('click', toggleLang);
  document.getElementById('lang-toggle-mobile')?.addEventListener('click', function () {
    toggleLang();
    document.getElementById('mobile-menu')?.classList.add('hidden');
  });

  function initLang() {
    applyTranslations(getLang());
  }

  // ========== DARK MODE ==========
  function initTheme() {
    const isDark = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
      showThemeIcon('light');
    } else {
      document.documentElement.classList.remove('dark');
      showThemeIcon('dark');
    }
  }

  function showThemeIcon(show) {
    const iconDark = document.getElementById('theme-icon-dark');
    const iconLight = document.getElementById('theme-icon-light');
    if (iconDark && iconLight) {
      iconDark.classList.toggle('hidden', show !== 'dark');
      iconLight.classList.toggle('hidden', show !== 'light');
    }
  }

  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    showThemeIcon(isDark ? 'light' : 'dark');
  }

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-mobile')?.addEventListener('click', function () {
    toggleTheme();
    document.getElementById('mobile-menu')?.classList.add('hidden');
  });

  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ========== TYPING ANIMATION (Hero başlık) ==========
  var typingText = document.getElementById('typing-text');
  var typingNames = { tr: 'Rasul Can', en: 'Rasul Can' }; // tr ve en için ayrı ad (isterseniz en: 'Your Name')
  function getTypingName() {
    return typingNames[getLang()] || typingNames.tr;
  }
  if (typingText) {
    var title = getTypingName();
    var i = 0;
    function type() {
      if (i < title.length) {
        typingText.textContent += title.charAt(i);
        i++;
        setTimeout(type, 120);
      } else {
        setTimeout(function () {
          title = getTypingName();
          typingText.textContent = '';
          i = 0;
          type();
        }, 2000);
      }
    }
    setTimeout(type, 500);
  }

  // ========== INTERSECTION OBSERVER (Fade-in / Slide-up) ==========
  var observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        entry.target.classList.remove('opacity-0', 'translate-y-6');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section-title, .skill-card, .project-card').forEach(function (el) {
    el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out');
    observer.observe(el);
  });

  // Hakkımda içeriği (foto + metin container)
  var aboutContent = document.querySelector('#hakkimda .flex.flex-col');
  if (aboutContent) {
    aboutContent.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out');
    observer.observe(aboutContent);
  }

  // ========== SCROLL PROGRESS INDICATOR ==========
  var scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', function () {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      scrollProgress.style.width = scrolled + '%';
    });
  }

  // ========== BACK TO TOP ==========
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.remove('opacity-0', 'pointer-events-none');
      } else {
        backToTop.classList.add('opacity-0', 'pointer-events-none');
      }
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ========== MOBİL MENÜ ==========
  var mobileBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // ========== FOOTER YILI ==========
  var yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ========== FORM GÖNDERİMİ (placeholder - sunucu yok) ==========
  document.querySelector('#iletisim form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert(getText(getLang(), 'formDemo'));
  });

  // Sayfa yüklendiğinde tema ve dil uygula
  initTheme();
  initLang();
})();

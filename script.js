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
      hero: { greeting: 'Merhaba, ben', tagline: 'Full stack web geliştirme odaklı; React, Next.js, Angular, .NET, Spring Boot ve PostgreSQL ile modern ve ölçeklenebilir uygulamalar üreten yazılım mühendisi.', ctaProjects: 'Projelerimi Gör', ctaContact: 'İletişime Geç' },
      about: {
        title: 'Hakkımda', content: `
        <ul class="space-y-4 list-none pl-0">
          <li class="flex gap-3"><span class="text-cyan-600 dark:text-cyan-400 mt-1">✦</span><div><strong>Frontend Mimari (Modern UI/UX):</strong> Angular (Standalone Components, RxJS Reactive Programming), React ve Next.js ile yüksek performanslı, dinamik ve kullanıcı dostu arayüzler geliştiriyorum.</div></li>
          <li class="flex gap-3"><span class="text-cyan-600 dark:text-cyan-400 mt-1">✦</span><div><strong>Kurumsal Backend & Güvenlik (Enterprise Backend):</strong> .NET ve Spring Boot ekosistemlerinde Stateless JWT mimarisi, BCrypt şifreleme ve Bucket4j (Rate Limiting) kullanarak güvenli, mikroservis yapısına uygun RESTful API'ler tasarlıyorum.</div></li>
          <li class="flex gap-3"><span class="text-cyan-600 dark:text-cyan-400 mt-1">✦</span><div><strong>İleri Düzey Finansal Sistemler:</strong> "Double Spending" (Çifte Harcama) problemlerini önlemek için Redis (SETNX) ile Distributed Lock (Dağıtık Kilit) mekanizmaları kuruyor; Idempotency (Eşetkisellik) algoritmaları ve ACID Transactions (@Transactional) ile veri tutarlılığını %100 güvence altına alıyorum.</div></li>
          <li class="flex gap-3"><span class="text-cyan-600 dark:text-cyan-400 mt-1">✦</span><div><strong>Tasarım Desenleri ve Veritabanı:</strong> Uygulamaları Event-Driven Architecture (Olay Güdümlü Mimari), Domain-Driven Design (DDD) ve Clean Architecture prensipleriyle decouple (bağımsız) modüller halinde kodluyorum. PostgreSQL, MySQL ve MongoDB ile Entity Framework / Hibernate (ORM) entegrasyonlarını optimize ediyorum.</div></li>
        </ul>
      `},
      skills: {
        title: 'Yetenekler & Teknolojiler', skill1: 'Full Stack Web Geliştirme', skill2: 'Backend & API Tasarımı', skill3: 'Veritabanı & Yazılım Mimarisi', skill4: 'Oyun Geliştirme & Problem Çözme',
        desc1: '<ul class="list-disc pl-5 mt-2 space-y-2"><li><strong>React</strong>, <strong>Angular</strong>, <strong>.NET</strong> ve <strong>Node.js</strong> ile uçtan uca web uygulamaları.</li><li><strong>Temiz Mimari (Clean Architecture)</strong> ve <strong>Duyarlı Arayüz (Responsive)</strong> odaklı sistemler.</li><li>Ölçeklenebilir <strong>Backend Çözümleri</strong> tasarımı.</li></ul>',
        desc2: '<ul class="list-disc pl-5 mt-2 space-y-2"><li><strong>.NET</strong> ve <strong>Node.js</strong> ile güvenli <strong>RESTful API</strong> ve kimlik doğrulama.</li><li>Sunucu tarafı iş mantığı (<strong>Business Logic</strong>) geliştirme.</li><li>Frontend ile verimli ve hızlı entegrasyon deneyimi.</li></ul>',
        desc3: '<ul class="list-disc pl-5 mt-2 space-y-2"><li><strong>MySQL</strong> ve <strong>PostgreSQL</strong> veritabanı tasarımı.</li><li><strong>ER Modelleme</strong> ve <strong>Optimize Sorgular</strong> ile veri yönetimi.</li><li>Sürdürülebilir ve performanslı sistemler için <strong>Mimari Prensipler</strong> (DDD).</li></ul>',
        desc4: '<ul class="list-disc pl-5 mt-2 space-y-2"><li><strong>Unity</strong> ve <strong>C#</strong> ile performans odaklı oyun projeleri.</li><li>Kompleks sistemlerde <strong>Algoritmik Düşünme</strong> ve <strong>Hata Ayıklama</strong>.</li><li>Yazılım geliştirme iş akışını destekleyen optimizasyon yetenekleri.</li></ul>'
      },
      projects: {
        title: 'Projeler', clickToDetails: 'İncele', githubProfile: 'Tüm Projelerim (GitHub)',
        project1Title: 'BBS E-Commerce', project1Desc: 'Modern e-ticaret platformu çözümü.', project1Detail: 'Gelişmiş sepet yönetimi ve ödeme entegrasyonu.',
        project2Title: 'CoreBanking', project2Desc: 'Kurumsal mimari ile geliştirilmiş bankacılık sistemi.', project2Detail: 'Distributed Lock, Idempotency ve Event-Driven mimari.',
        project3Title: 'FileNet Ldap', project3Desc: 'LDAP tabanlı dosya ve yetki yönetimi.', project3Detail: 'Kurumsal belge yönetimi entegrasyonu.',
        project4Title: 'Advanced Application', project4Desc: 'Gelişmiş yazılım çözümleri.', project4Detail: 'Kompleks iş kuralları ve optimizasyon.',
        project5Title: 'Kayıp Eşya Bulma Uygulaması', project5Desc: 'Mobil tabanlı kayıp eşya yönetim sistemi.', project5Detail: 'Kullanıcı dostu arayüz ve hızlı bildirim sistemi.',
        project6Title: 'Belediye Bildiri & Şikayet Sistemi', project6Desc: 'Vatandaşlar için akıllı şehir çözümü.', project6Detail: 'Lokasyon tabanlı şikayet bildirim ve yönetim paneli.'
      },
      contact: { title: 'İletişim', email: 'E-posta', nameLabel: 'Adınız', emailLabel: 'E-posta', messageLabel: 'Mesajınız', namePlaceholder: 'Adınız Soyadınız', messagePlaceholder: 'Mesajınızı buraya yazın...', send: 'Gönder' },
      footer: { rights: 'Tüm hakları saklıdır.' },
      backToTop: 'Yukarı çık',
      formDemo: 'İletişim formu şu an demo modunda. Backend bağlandığında çalışacak.'
    },
    en: {
      nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact', theme: 'Toggle theme', langSwitch: 'Language: Türkçe / English' },
      hero: { greeting: "Hi, I'm", tagline: 'Software engineer focused on full-stack web development, building scalable and modern applications using React, Next.js, Angular, .NET, Spring Boot, and PostgreSQL.', ctaProjects: 'View Projects', ctaContact: 'Get in Touch' },
      about: {
        title: 'About', content: `
        <ul class="space-y-4 list-none pl-0">
          <li class="flex gap-3"><span class="text-cyan-600 dark:text-cyan-400 mt-1">✦</span><div><strong>Frontend Architecture:</strong> Building high-performance, dynamic interfaces with Angular (Standalone Components, RxJS Reactive Programming), React, and Next.js.</div></li>
          <li class="flex gap-3"><span class="text-cyan-600 dark:text-cyan-400 mt-1">✦</span><div><strong>Enterprise Backend & Security:</strong> Designing microservices-ready RESTful APIs in .NET and Spring Boot using Stateless JWT architecture, BCrypt, and Bucket4j (Rate Limiting).</div></li>
          <li class="flex gap-3"><span class="text-cyan-600 dark:text-cyan-400 mt-1">✦</span><div><strong>Advanced Financial Systems:</strong> Preventing "Double Spending" with Distributed Locking (Redis SETNX), implementing Idempotency algorithms, and guaranteeing data integrity via ACID Transactions (@Transactional).</div></li>
          <li class="flex gap-3"><span class="text-cyan-600 dark:text-cyan-400 mt-1">✦</span><div><strong>Design Patterns & Database:</strong> Decoupling systems with Event-Driven Architecture, Domain-Driven Design (DDD), and Clean Architecture. Optimizing ORM integrations (Entity Framework/Hibernate) with PostgreSQL, MySQL, and MongoDB.</div></li>
        </ul>
      `},
      skills: {
        title: 'Skills & Technologies', skill1: 'Full Stack Web Development', skill2: 'Backend & API Design', skill3: 'Database & Architecture', skill4: 'Game Development & Problem Solving',
        desc1: '<ul class="list-disc pl-5 mt-2 space-y-2"><li>End-to-end web apps with <strong>React</strong>, <strong>Angular</strong>, <strong>.NET</strong>, and <strong>Node.js</strong>.</li><li>Focused on <strong>Clean Architecture</strong> and <strong>Responsive UI</strong>.</li><li>Scalable <strong>Backend Solutions</strong>.</li></ul>',
        desc2: '<ul class="list-disc pl-5 mt-2 space-y-2"><li>Secure <strong>RESTful APIs</strong> and authentication via <strong>.NET</strong> & <strong>Node.js</strong>.</li><li>Server-side <strong>Business Logic</strong> development.</li><li>Efficient and seamless frontend integration.</li></ul>',
        desc3: '<ul class="list-disc pl-5 mt-2 space-y-2"><li><strong>MySQL</strong> and <strong>PostgreSQL</strong> database design.</li><li><strong>ER Modeling</strong> and <strong>Optimized Queries</strong>.</li><li>Software architecture principles for maintainable systems (<strong>DDD</strong>).</li></ul>',
        desc4: '<ul class="list-disc pl-5 mt-2 space-y-2"><li>Performance-focused games with <strong>Unity</strong> and <strong>C#</strong>.</li><li><strong>Algorithmic Thinking</strong> and <strong>Debugging</strong> in complex systems.</li><li>Optimization skills that support modern software workflows.</li></ul>'
      },
      projects: {
        title: 'Projects', clickToDetails: 'View Details', githubProfile: 'All Projects (GitHub)',
        project1Title: 'BBS E-Commerce', project1Desc: 'Modern e-commerce platform solution.', project1Detail: 'Advanced cart management and payment integration.',
        project2Title: 'CoreBanking', project2Desc: 'Enterprise banking system.', project2Detail: 'Distributed Lock, Idempotency and Event-Driven architecture.',
        project3Title: 'FileNet Ldap', project3Desc: 'LDAP based file and authorization management.', project3Detail: 'Enterprise document management integration.',
        project4Title: 'Advanced Application', project4Desc: 'Advanced software solutions.', project4Detail: 'Complex business rules and optimization.',
        project5Title: 'Lost & Found Mobile App', project5Desc: 'Mobile based lost item management.', project5Detail: 'User-friendly interface and fast notification system.',
        project6Title: 'Municipality Complaint System', project6Desc: 'Smart city solution for citizens.', project6Detail: 'Location-based complaint reporting and management panel.'
      },
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
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var text = getText(lang, key);
      if (text !== key) el.innerHTML = text;
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

  // ========== PROJE DETAY MODALI VE DATA ==========

  // Proje verileri (İleride resimleri eklediğinde buralara path gireceksin)
  // Not: Kapak resmi hariç (diğer resimler carousel'de dönecek).
  var projectData = {
    1: {
      tags: ['Angular', 'Spring Boot', 'PostgreSQL'],
      images: [
        'photos/ecommerce/Ekran görüntüsü 2026-07-23 110248.png',
        'photos/ecommerce/Ekran görüntüsü 2026-07-23 110301.png',
        'photos/ecommerce/Ekran görüntüsü 2026-07-23 110340.png',
        'photos/ecommerce/Ekran görüntüsü 2026-07-23 110448.png',
        'photos/ecommerce/Ekran görüntüsü 2026-07-23 110458.png',
        'photos/ecommerce/Ekran görüntüsü 2026-07-23 110537.png',
        'photos/ecommerce/Ekran görüntüsü 2026-07-23 110602.png',
        'photos/ecommerce/Ekran görüntüsü 2026-07-23 110609.png'
      ],
      liveLink: 'https://bbs-ecommerce-psi.vercel.app/',
      githubLink: 'https://github.com/canresul07/Fullstack-e-commerce-project-with-modern-tech-stack',
      descTr: '<p>BBS E-Commerce, Angular ve Spring Boot kullanılarak geliştirilmiş modern bir e-ticaret platformudur. Kullanıcı dostu arayüzü ile ürün yönetimi, sepet işlemleri ve güvenli ödeme süreçlerini içerir.</p><p>Clean Architecture prensiplerine sadık kalınarak tasarlanmıştır.</p>',
      descEn: '<p>BBS E-Commerce is a modern e-commerce platform developed using Angular and Spring Boot. It features a user-friendly interface with product management, cart operations, and secure payment processes.</p>'
    },
    2: {
      tags: ['Spring Boot', 'Redis', 'MongoDB', 'Angular'],
      images: [
        'photos/Ekran görüntüsü 2026-07-28 174434.png',
        'photos/Ekran görüntüsü 2026-07-28 174800.png',
        'photos/Ekran görüntüsü 2026-07-28 174813.png',
        'photos/Ekran görüntüsü 2026-07-28 174904.png',
        'photos/Ekran görüntüsü 2026-07-28 174920.png',
        'photos/Ekran görüntüsü 2026-07-28 174929.png',
        'photos/Ekran görüntüsü 2026-07-28 174944.png',
        'photos/Ekran görüntüsü 2026-07-28 175015.png',
        'photos/Ekran görüntüsü 2026-07-28 175026.png',
        'photos/Ekran görüntüsü 2026-07-28 175133.png',
        'photos/Ekran görüntüsü 2026-07-28 175147.png'
      ],
      liveLink: 'https://github.com/canresul07/CoreBanking',
      githubLink: 'https://github.com/canresul07/CoreBanking',
      descTr: '<p>CoreBanking, finansal işlemler için tasarlanmış kurumsal bir bankacılık simülasyonudur. Redis kullanılarak Distributed Lock (Double Spending önleme) ve Idempotency gibi kritik mühendislik problemlerine çözüm getirilmiştir.</p>',
      descEn: '<p>CoreBanking is an enterprise banking simulation designed for financial transactions. It solves critical engineering problems such as Distributed Lock (Double Spending prevention) and Idempotency using Redis.</p>'
    },
    3: {
      tags: ['Java', 'LDAP', 'FileNet'],
      images: [
        ,
        'photos/FileNet/Ekran görüntüsü 2026-07-21 114808.png',
        'photos/FileNet/Ekran görüntüsü 2026-07-21 115455.png',
        'photos/FileNet/Ekran görüntüsü 2026-07-21 114906.png',
        'photos/FileNet/Ekran görüntüsü 2026-07-21 115217.png',
        'photos/FileNet/Ekran görüntüsü 2026-07-21 115246.png',
        'photos/FileNet/Ekran görüntüsü 2026-07-21 115438.png'


      ],
      liveLink: 'https://github.com/canresul07/IBM-FileNet-LDAP-Fullstack-Internship-Project',
      githubLink: 'https://github.com/canresul07/IBM-FileNet-LDAP-Fullstack-Internship-Project',
      descTr: '<p>Kurumsal seviyede doküman yönetimi (FileNet) ve kullanıcı yetkilendirme (LDAP) süreçlerini entegre eden güvenli bir sistem projesidir.</p>',
      descEn: '<p>A secure system project integrating enterprise-level document management (FileNet) and user authorization (LDAP) processes.</p>'
    },
    4: {
      tags: ['C#', '.NET', 'Architecture'],
      images: ['photos/github foto/github.jpg'],
      liveLink: 'https://github.com/canresul07?tab=repositories',
      githubLink: 'https://github.com/canresul07?tab=repositories',
      descTr: '<p>Karmaşık iş kurallarını işlemek ve optimize etmek amacıyla geliştirilmiş ileri düzey yazılım projesi.</p>',
      descEn: '<p>An advanced software project developed to process and optimize complex business rules.</p>'
    },
    5: {
      tags: ['Mobile', 'UI/UX', 'Database'],
      images: ['photos/github foto/github.jpg'],
      liveLink: 'https://github.com/canresul07?tab=repositories',
      githubLink: 'https://github.com/canresul07?tab=repositories',
      descTr: '<p>Kullanıcıların kayıp eşyalarını bildirebilecekleri ve bulabilecekleri, hızlı bildirim sistemine sahip mobil uygulama.</p>',
      descEn: '<p>A mobile application with a fast notification system where users can report and find lost items.</p>'
    },
    6: {
      tags: ['Web', 'Map Integration'],
      images: ['photos/github foto/github.jpg'],
      liveLink: 'https://github.com/canresul07?tab=repositories',
      githubLink: 'https://github.com/canresul07?tab=repositories',
      descTr: '<p>Vatandaşların belediyeye lokasyon bazlı şikayet ve bildirim gönderebilmesini sağlayan akıllı şehir yönetim paneli.</p>',
      descEn: '<p>A smart city management panel enabling citizens to send location-based complaints and reports to the municipality.</p>'
    }
  };

  const modal = document.getElementById('project-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');
  const carouselInner = document.getElementById('modal-carousel');
  const carouselDots = document.getElementById('carousel-dots');
  const btnPrev = document.getElementById('carousel-prev');
  const btnNext = document.getElementById('carousel-next');

  let currentSlide = 0;
  let totalSlides = 0;

  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    Array.from(carouselDots.children).forEach((dot, index) => {
      dot.classList.toggle('bg-cyan-600', index === currentSlide);
      dot.classList.toggle('bg-slate-300', index !== currentSlide);
    });
  }

  function openModal(id) {
    const data = projectData[id];
    if (!data) return;

    // İçeriği Doldur
    const lang = getLang();
    document.getElementById('modal-title').textContent = getText(lang, `projects.project${id}Title`);
    document.getElementById('modal-desc').innerHTML = lang === 'en' ? data.descEn : data.descTr;

    document.getElementById('modal-live-btn').href = data.liveLink;
    document.getElementById('modal-github-btn').href = data.githubLink;

    // Etiketler (Tags)
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'px-3 py-1 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-300 rounded-full text-sm font-medium';
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    // Carousel Resimleri
    carouselInner.innerHTML = '';
    carouselDots.innerHTML = '';
    totalSlides = data.images.length;
    currentSlide = 0;

    if (totalSlides === 0) {
      carouselInner.innerHTML = '<div class="carousel-item flex items-center justify-center text-slate-500">Görsel bulunamadı</div>';
      btnPrev.classList.add('hidden');
      btnNext.classList.add('hidden');
    } else {
      btnPrev.classList.remove('hidden');
      btnNext.classList.remove('hidden');

      data.images.forEach((src, index) => {
        // Image div
        const div = document.createElement('div');
        div.className = 'carousel-item h-full bg-contain bg-no-repeat bg-center';
        div.style.backgroundImage = `url('${src}')`;
        carouselInner.appendChild(div);

        // Dot
        const dot = document.createElement('button');
        dot.className = 'w-2.5 h-2.5 rounded-full transition-colors';
        dot.addEventListener('click', () => {
          currentSlide = index;
          updateCarousel();
        });
        carouselDots.appendChild(dot);
      });
      updateCarousel();
    }

    // Modalı Göster
    modal.classList.remove('hidden');
    // Animasyon frame'i için timeout
    setTimeout(() => {
      modalOverlay.classList.remove('opacity-0');
      modalContent.classList.remove('opacity-0', 'scale-95');
      document.body.style.overflow = 'hidden'; // Arka plan scroll'u engelle
    }, 10);
  }

  function closeModal() {
    modalOverlay.classList.add('opacity-0');
    modalContent.classList.add('opacity-0', 'scale-95');
    document.body.style.overflow = '';
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300); // transition süresi kadar bekle
  }

  // Event Listeners
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
      const id = this.getAttribute('data-project-id');
      openModal(id);
    });
  });

  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', closeModal);

  btnNext?.addEventListener('click', () => {
    if (totalSlides <= 1) return;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  });

  btnPrev?.addEventListener('click', () => {
    if (totalSlides <= 1) return;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  // Sayfa yüklendiğinde tema ve dil uygula
  initTheme();
  initLang();
})();

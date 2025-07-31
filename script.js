// Menüden tıklanan bölüme yumuşak kaydırma

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Geliştirilebilir: Dinamik içerik, blog ekleme, tema değiştirme vb. için buraya kod eklenebilir. 
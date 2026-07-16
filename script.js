document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".hero-text, .hero-image, .section, .feature, .collection-text, .collection-image, .collection-section, .collection-info");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); 
        observer.unobserve(entry.target);   
      }
    });
  }, { threshold: 0.2 });

  targets.forEach(target => observer.observe(target));
});
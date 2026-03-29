// Nav scroll
window.addEventListener("scroll", () => {
  document.getElementById("nav").style.boxShadow =
    window.scrollY > 20 ? "0 4px 30px rgba(0,0,0,.7)" : "none";
});

// Menu mobile
document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("nav-mobile").classList.toggle("aberto");
});
document.querySelectorAll(".nav-mobile a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("nav-mobile").classList.remove("aberto"));
});

// Animação de entrada nos cards
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
      }, i * 100);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card-ben, .plano").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  obs.observe(el);
});

// Fallback mobile
setTimeout(() => {
  document.querySelectorAll(".card-ben, .plano").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
}, 1000);

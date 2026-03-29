// Animação de entrada ao rolar
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll([
  ".cap-titulo", ".frase-grande", ".destaque-box", ".citacao",
  ".texto-bloco", ".lista-inimigos", ".dualidade", ".codigo-conduta",
  ".acoes-disciplina", ".trio-conquista", ".corpo-grid", ".enquanto-grid",
  ".rotina-steps", ".identidade", ".construcao-lista", ".nao-nao-nao",
  ".melhor-ontem", ".cap-label", ".corpo-item", ".enq-item"
].join(",")).forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

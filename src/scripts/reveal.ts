/* Mostra os elementos [data-reveal] quando entram na tela (e esconde ao sair) */
const STAGGER_MS = 100;

const observer = new IntersectionObserver((entries) => {
  let position = 0;

  for (const { target, isIntersecting } of entries) {
    const element = target as HTMLElement;

    if (isIntersecting) {
      // elementos que entram juntos aparecem em sequência
      element.style.setProperty("--reveal-delay", `${position++ * STAGGER_MS}ms`);
      element.classList.add("revealed");
    } else {
      element.style.removeProperty("--reveal-delay");
      element.classList.remove("revealed");
    }
  }
});

document
  .querySelectorAll("[data-reveal]")
  .forEach((element) => observer.observe(element));

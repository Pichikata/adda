const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Carruseles horizontales

document.querySelectorAll('.carousel-arrow').forEach(button => {
  button.addEventListener('click', () => {
    const carousel = document.getElementById(button.dataset.carousel);
    if (!carousel) return;

    const card = carousel.querySelector('.product-card');
    const gap = 24;
    const amount = (card?.getBoundingClientRect().width || 360) + gap;
    const direction = button.dataset.direction === 'next' ? 1 : -1;

    carousel.scrollBy({ left: amount * direction, behavior: 'smooth' });
  });
});

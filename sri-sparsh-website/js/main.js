/* =========================
   FADE IN ON SCROLL
========================= */
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

fadeElements.forEach(el => observer.observe(el));

/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
// MOBILE NAV TOGGLE
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


/* =========================
   FADE IN ON SCROLL
========================= */
const fadeElements = document.querySelectorAll(".fade-in");

if (fadeElements.length > 0) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeElements.forEach(el => observer.observe(el));
}

/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
}

/* =========================
   MOBILE NAV TOGGLE
========================= */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Optional: close menu when link clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

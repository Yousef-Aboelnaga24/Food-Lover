// ----- Highlight active nav link on scroll -----
let ticking = false;

function highlightNav() {
  const top = window.scrollY;
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    if (top >= section.offsetTop - window.innerHeight / 2) {
      current = section.id;
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
}

document.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      highlightNav();
      ticking = false;
    });
    ticking = true;
  }
});

// ----- Smooth scroll with offset for fixed navbar -----
const navbarHeight = document.querySelector(".navbar").offsetHeight || 70;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Sweet Alert
document.querySelector(".btn-send").addEventListener("click", function (e) {
  e.preventDefault();

  let name = document.getElementById("nameInp");
  let email = document.getElementById("emailInp");
  let message = document.getElementById("messageInp");

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Please fill in all fields before submitting",
      confirmButtonColor: "#fd5227",
    });
    return;
  }
  Swal.fire({
    icon: "success",
    title: "Message Sent!",
    text: "Thank you for contacting us. We will reply soon.",
    confirmButtonColor: "#09906f",
  });

  name = "";
  email = "";
  message = "";
});

// Animate On Scroll
AOS.init({
  once: true,
});

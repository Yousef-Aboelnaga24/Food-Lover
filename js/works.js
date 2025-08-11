document.addEventListener("scroll", () => {
  let top = window.scrollY;

  let current = "";
  let section = document.querySelectorAll("section");
  section.forEach((section) => {
    if (top >= section.offsetTop - window.innerHeight / 2) {
      current = section.id;
    }
  });

  let navbar = document.querySelectorAll(".nav-link");
  navbar.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

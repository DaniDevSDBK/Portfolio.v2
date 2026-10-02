document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const subject = encodeURIComponent("Contacto desde el portfolio de DaniDev");
      const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:danidevsdbk@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-20% 0px -65% 0px" });

  sections.forEach((section) => observer.observe(section));
});

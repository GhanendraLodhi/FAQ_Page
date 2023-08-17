document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".faq-section");
  
    sections.forEach((section) => {
      section.addEventListener("click", () => {
        section.classList.toggle("active");
      });
    });
  });
  
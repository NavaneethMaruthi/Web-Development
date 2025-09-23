
  function scrollToTopFeature() {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (!scrollBtn) return;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollBtn.classList.remove("d-none");
      } else {
        scrollBtn.classList.add("d-none");
      }
    });
  
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function updateYear() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    scrollToTopFeature();
    updateYear();
  });
  
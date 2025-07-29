document.addEventListener("DOMContentLoaded", function() {
  const carousels = document.querySelectorAll(".carousel-content-container");

  carousels.forEach((container) => {
    const slides = container.querySelectorAll(".carousel-content");
    const btnPrev = container.querySelector(".carousel-button[aria-label='Previous slide']");
    const btnNext = container.querySelector(".carousel-button[aria-label='Next slide']");
    let currentSlide = 0;

    function updateSlides() {
      const slideWidth = container.offsetWidth;
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * slideWidth}px)`;
      });

      // Button visibility
      btnPrev.style.display = currentSlide === 0 ? "none" : "flex";
      btnNext.style.display = currentSlide === slides.length - 1 ? "none" : "flex";
    }

    // Event listeners
    btnNext.addEventListener("click", () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlides();
      }
    });

    btnPrev.addEventListener("click", () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlides();
      }
    });

    // Initial position
    updateSlides();

    // Update positions on window resize (for responsiveness)
    window.addEventListener("resize", updateSlides);
  });
});

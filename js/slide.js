document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".carousel-content-container");
  const slide1 = container.querySelector(".content-slide-1");
  const slide2 = container.querySelector(".content-slide-2");
  const btnPrev = container.querySelector(".carousel-button[aria-label='Previous slide']");
  const btnNext = container.querySelector(".carousel-button[aria-label='Next slide']");

  let currentSlide = 1;

  // Initial state
  btnPrev.style.display = "none";
  btnNext.style.display = "flex";

  function showSlide(slideNum) {
    if (slideNum === 1) {
      slide1.style.transform = "translateX(0)";
      slide2.style.transform = "translateX(462px)";
      btnPrev.style.display = "none";
      btnNext.style.display = "flex";
    } else if (slideNum === 2) {
      slide1.style.transform = "translateX(-462px)";
      slide2.style.transform = "translateX(0)";
      btnPrev.style.display = "flex";
      btnNext.style.display = "none";
    }
    currentSlide = slideNum;
  }

  btnNext.addEventListener("click", () => {
    if (currentSlide === 1) showSlide(2);
  });

  btnPrev.addEventListener("click", () => {
    if (currentSlide === 2) showSlide(1);
  });

  // Add smooth transition
  [slide1, slide2].forEach(slide => {
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.position = "absolute";
    slide.style.top = "0";
    slide.style.left = "0";
  });

  // Set initial positions
  slide1.style.transform = "translateX(0)";
  slide2.style.transform = "translateX(462px)";
});
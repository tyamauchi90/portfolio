"use strict";
{
  const slideItem = document.querySelectorAll(".slide_item");
  const sliderWrapper = document.querySelectorAll(".slider_wrapper");
  let current = 0;

  function slideshow() {
    if (current === 3) {
      current = 0;
      slideItem[current].classList.add("active");
      slideItem[3].classList.remove("active");
      sliderWrapper[current].classList.add("active");
      sliderWrapper[3].classList.remove("active");
    } else {
      current++;
      slideItem[current].classList.add("active");
      slideItem[current - 1].classList.remove("active");
      sliderWrapper[current].classList.add("active");
      sliderWrapper[current - 1].classList.remove("active");
    }
  }
  setInterval(slideshow, 5000);
}

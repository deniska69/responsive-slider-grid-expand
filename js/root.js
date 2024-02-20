// Get width on browser window
const width = window.innerWidth;

// Initialize Swiper
if (width < 768) {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

// Handle onclick expand button
const expandButton = document.querySelector(".expand-button");
const textButton = document.querySelector(".expand-button-text");
const swiperWrapper = document.querySelector(".swiper-wrapper");

expandButton.addEventListener("click", () => {
  const isExpand = expandButton.classList.contains("expand");

  if (isExpand) {
    expandButton.classList.remove("expand");
    swiperWrapper.classList.remove("expand");
    textButton.innerHTML = "Показать все";
  } else {
    expandButton.classList.add("expand");
    swiperWrapper.classList.add("expand");
    textButton.innerHTML = "Скрыть";
  }
});

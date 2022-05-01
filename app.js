const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    сlearActiveClasses();
    slide.classList.add("activ");
  });
}

function сlearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("activ");
  });
}

const starBox = document.querySelectorAll(".star__box");
const starContent = document.querySelectorAll(".tab__content");
starBox.forEach((star) => {
    star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active")
});
});

function removeActiveStar() {
    starBox.forEach((star) => {
        star.classList.remove("active");
    });
}

function removeActiveContent() {
    starContent.forEach((star) => {
        star.classList.remove("active");
    });
}

// ----------------------------------------------------------------------------------//
// accordion
const accordions = document.querySelectorAll(".accordion__item h4");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.nextElementSibling.classList.toggle("open");
    accordion.querySelector("i").classList.toggle("open");
  });
});
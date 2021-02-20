const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close");
const burger = document.querySelector(".burger");

const overlayStart = gsap.to(overlay, {
  y: "50%",
});

burger.addEventListener("click", () => {
  overlayStart.play();
  body.style.overflow = "hidden";
});

closeIcon.addEventListener("click", () => {
  overlayStart.reverse(0.8);
  body.style.overflow = "auto";
});

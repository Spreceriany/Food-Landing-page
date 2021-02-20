const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close");
const burger = document.querySelector(".burger");


overlayStart.paused(true);

const overlayStart = gsap.to(overlay, {
  y: "50%",
});

burger.addEventListener("click", () => {
  overlayStart.play();
  
});

closeIcon.addEventListener("click", () => {
  overlayStart.reverse(0.8);
 
});

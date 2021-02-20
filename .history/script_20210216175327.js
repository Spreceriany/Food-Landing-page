const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close");
const burger = document.querySelector(".burger");
const t2 = gsap.timeline({
    defaults: { duration: 1, ease: Back.easeOut.config(1) },
});




t2.paused(true);

t2.to(overlay, {
    y: "50%",
  });

burger.addEventListener("click", () => {
  overlayStart.play();
  
});

closeIcon.addEventListener("click", () => {
  overlayStart.reverse(0.8);
 
});

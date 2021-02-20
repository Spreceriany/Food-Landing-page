const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close");
const burger = document.querySelector(".burger");
const t2 = gsap.timeline({
    defaults: { duration: 1, ease: Back.easeOut.config(1) },
});




t2.paused(true);

t2.to(overlay, {
    y: 50%,
  });

burger.addEventListener("click", () => {
    t2.play();
});

closeIcon.addEventListener("click", () => {
    t2.reverse(0.8);
 
});

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close");
const burger = document.querySelector(".burger");
const t1 = gsap.timeline({
  defaults: { duration: 1, ease: Back.easeOut.config(1) },
});

/*overlay*/
t1.paused(true);
t1.to(overlay, {
  y: 0,
  duration: 0.5,
});

burger.addEventListener("click", () => {
  t1.play();
  overlay.style.zIndex = 8;
});

closeIcon.addEventListener("click", () => {
  t1.reverse(0.8);
});

/*hero*/

const t2 = gsap.timeline({
  defaults: {
    ease: Back.easeOut.config(1),
    duration: 1,
  },
});

const rule = CSSRulePlugin.getRule(".hero__container::after");

t2.from(
  ".left-col-hero",
  {
    autoAlpha: 0,
    duration: 1,
    stagger: 0.2,
  },
  "+=1"
)
  .from(
    ".paprika",
    {
      x: "-40%",
      autoAlpha: 0,
      duration: 1.5,
    },
    "-=1.2"
  )
  .from(
    ".food-bg",
    {
      rotate: 250,
      x: "100%",
      y: "-30%",
      duration: 3,
    },
    "-=2"
  );

var x = window.matchMedia("(min-width:29.62em)");
if (x.matches) {
  t2.from(
    rule,
    {
      cssRule: { scale: 0 },

      duration: 2,
    },
    "-=3"
  );
} else {
  t2.from(
    rule,
    {
      cssRule: { scale: 0 },

      duration: 2,
    },
    "-=4.5"
  );
}

/*About*/

gsap.from(".about-stagger", {
  autoAlpha: 0,
  y: 20,
  stagger: 0.3,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".about-stagger",
    start: "top bottom",
  },
});

/*Background animation*/
const rule2 = CSSRulePlugin.getRule(".about-container::after");
var aboutQuery = window.matchMedia("(min-width:68.75em)");
if (aboutQuery.matches) {
  gsap.from(rule2, {
    cssRule: {
      
      scale:0,
      ease: "power2.inOut",
      duration:4
    },
    scrollTrigger: {
      trigger: ".about-stagger",
      start: "top center",
      end:"center center"
    },
  });

  gsap.from(".about-container", {
    // backgroundSize: "0%",
   duration:2,
    backgroundPosition:"-50% 50%",
    ease:"power2.inOut",
    scrollTrigger:{
        trigger:".about-stagger",
        start:"top bottom",
        end:"center center"
       
    },
   
  });
} else {
  gsap.from(rule2, {
    cssRule: {
      x: "100%",
      autoAlpha: 0,
      rotate: 80,
      ease: "power2.inOut",
      duration: 1.5,
    },
    scrollTrigger: {
      trigger: ".about-stagger",
      start: "top center",
    },
    duration: 2,
  });
}


/*Menu*/

gsap.from(".menu-stagger",{
    stagger:0.3,
    autoAlpha:0,
    y:30,
    scrollTrigger:{
        trigger:".menu-stagger",
        scrub:1
    }
})

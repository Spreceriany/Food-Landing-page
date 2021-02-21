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

  const t2 = gsap.timeline({
    defaults: {
      ease: Back.easeOut.config(1),
      duration: 1,
    },
  });
t2.set(".hero",{visibility:"hidden"})
window.addEventListener("load", (event) => {
  /*hero*/



  const rule = CSSRulePlugin.getRule(".hero__container::after");

  t2.set(".hero",{visibility:"visible"})
    .from(
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

  t2.delay(1)
});

/*About*/

gsap.from(".about-stagger", {
  autoAlpha: 0,
  y: 20,
  stagger: 0.3,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".about-stagger",
    start: "top bottom",
    end: "center center",
    scrub: 1,
  },
});

/*Background animation*/
const rule2 = CSSRulePlugin.getRule(".about-container::after");
var aboutQuery = window.matchMedia("(min-width:68.75em)");
if (aboutQuery.matches) {
  gsap.from(rule2, {
    cssRule: {
      scale: 0,
      ease: "power2.inOut",
      duration: 4,
    },
    scrollTrigger: {
      trigger: ".about-stagger",
      start: "top center",
      end: "center center",
    },
  });

  gsap.from(".about-container", {
    // backgroundSize: "0%",
    duration: 2,
    backgroundPosition: "-50% 50%",
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".about-stagger",
      start: "top bottom",
      end: "center center",
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

gsap.from(".menu-stagger", {
  stagger: 0.3,
  autoAlpha: 0,
  y: 30,
  scrollTrigger: {
    trigger: ".menu-stagger",
    scrub: 1,
    start: "top bottom",
    end: "center center",
  },
});

gsap.from(".card__stagger", {
  stagger: 0.3,
  autoAlpha: 0,
  y: 30,
  scrollTrigger: {
    trigger: ".card__stagger",
    scrub: 1,
    start: "top bottom",
    end: "30% 70%"
  },
});

gsap.from(".gallery h3", {
  stagger: 0.3,
  autoAlpha: 0,
  y: 30,
  scrollTrigger: {
    trigger: ".gallery h3",
    scrub: 1,
    start: "top bottom",
    end: "30% 70%",
  },
});

gsap.from(".gallery__grid img", {
  stagger: 0.3,
  autoAlpha: 0,
  y: 30,
  scrollTrigger: {
    trigger: ".gallery__grid img",
    scrub: 1,
    start: " bottom bottom",
    end: "bottom 30%",
    markers:true
  },
});

// const rule3 = CSSRulePlugin.getRule(".footer::after");
// const t4 = gsap.timeline({defaults:{ease: "power2.inOut",}})
// t4.from(rule3,{
//     cssRule:{
//         scale:0,
//         autoAlpha:0,
//         duration: 1.5,
//         transformOrigin:"50% center"
//     },

//     scrollTrigger:{
//         trigger:".footer",
//         start:"10% bottom",
//         end:"30% 70%",
//         scrub:1,
//         end:"center 70%"
//     }
// })
//   .from(".row ul li",{
//       autoAlpha:0,
//       y:"-20%",
//       duration:1,
//       stagger:.2,
//       scrollTrigger:{
//         trigger:".row ul li",
//         scrub:1,
//         end:"bottom 90%",
//         markers:true
//       }
//   })

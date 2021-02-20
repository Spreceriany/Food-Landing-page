gsap.registerPlugin(CSSRulePlugin);

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
    duration:.5
});

burger.addEventListener("click", () => {
    t1.play();
    overlay.style.zIndex = 8
});

closeIcon.addEventListener("click", () => {
    t1.reverse(0.8);
});

/*hero*/
var x = window.matchMedia("(min-width:29.62em)")

const t2 = gsap.timeline({
    defaults: {
        ease: Back.easeOut.config(1),
        duration:1
    }
}) 

const rule = CSSRulePlugin.getRule(".hero__container::after");

t2
.from(".left-col h1",{
    autoAlpha:0,
    duration:1
},"+=1")
.from(".left-col p",{
    autoAlpha:0,
    duration:1.5
},'-=.5')
.from(".left-col a",{
    autoAlpha:0,
    duration:1.5
},'-=.9')
.from(".paprika",{
    x:"-40%",
    autoAlpha:0,
    duration:1.5
},'-=1.2')
.from(".food-bg",{
    rotate:250,
    x:'60%',
    y:"-30%",
    duration:3
},"-=2")

if(x.matches){
    t2.from(rule,{
    cssRule:{scale:0,},
    
    duration:2
},"-=3")
}
else{
    t2.from(rule,{
        cssRule:{scale:0,},
        
        duration:2
    },"-=10")
}




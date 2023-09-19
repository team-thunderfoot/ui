import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

gsap.to(".section3", {
    xPercent: -100,
    scrollTrigger: {
        trigger: ".section3",
        start: "center center",
        end: "+=3000px",
        pin: ".container",
        scrub: true,
    },
})

import { tns } from "/node_modules/tiny-slider/src/tiny-slider.js"
import { sliderIndex } from "./sliderIndex"

import gsap from "gsap"

class SliderA {
    constructor() {
        this.DOM = {
            element: document.querySelectorAll(".js--slider-a"),
        }
        this.autoplayTime = 15
        this.tl = gsap.timeline()

        if (this.DOM.element) this.init()
    }
    init() {
        this.DOM.element.forEach((el) => {
            var tl = gsap.timeline()
            var sliderAWrapper = tns({
                container: el,
                items: 1,
                center: true,
                gutter: 32,
                slideBy: 1,
                nav: false,
                controls: false,
                controlsContainer: el.nextElementSibling,
                rewind: false,
                swipeAngle: false,
                lazyload: false,
                lazyloadSelector: ".g--lazy-01",
                preventActionWhenRunning: true,
                mouseDrag: true,
                autoplayButtonOutput: false,
                speed: 1000,
            })

            if (sliderAWrapper) {
                this.customizedFunction(el, sliderAWrapper, tl)

                const sliderA = document.querySelectorAll(".g--slider-01")

                sliderA.forEach((element) => {
                    element.addEventListener("mouseover", () => {
                        tl.pause()
                    })
                })

                sliderA.forEach((element) => {
                    element.addEventListener("mouseout", () => {
                        tl.resume()
                    })
                })

                sliderAWrapper.events.on("indexChanged", () => {
                    el.closest(".g--slider-01").querySelector(".js--dash").style.width = 0
                    tl.restart()
                })

                sliderAWrapper.events.on("transitionEnd", () => {
                    sliderIndex(".js--slider-a")
                })
            }
        })
    }
    customizedFunction(el, slider, tl) {
        tl.fromTo(
            el.closest(".g--slider-01").querySelector(".js--dash"),
            { width: "0%" },
            {
                width: "100%",
                duration: this.autoplayTime,
                repeat: -1,
                ease: "power0.out",
                onRepeat: () => {
                    this.tl.restart()
                    slider.goTo("next")
                },
            }
        )
    }
}
export default SliderA

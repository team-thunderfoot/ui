import { tns } from "/node_modules/tiny-slider/src/tiny-slider.js"
import { sliderIndex } from "./sliderIndex"

import gsap from "gsap"

class Slider01 {
    constructor() {
        this.DOM = {
            element: document.querySelectorAll(".js--slider-01"),
        }
        this.autoplayTime = 15
        this.tl = gsap.timeline()

        if (this.DOM.element) this.init()
    }
    init() {
        this.DOM.element.forEach((el) => {
            var tl = gsap.timeline()
            var slider01Wrapper = tns({
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

            if (slider01Wrapper) {
                this.customizedFunction(el, slider01Wrapper, tl)

                const slider01 = document.querySelectorAll(".g--slider-01")

                slider01.forEach((element) => {
                    element.addEventListener("mouseover", () => {
                        tl.pause()
                    })
                })

                slider01.forEach((element) => {
                    element.addEventListener("mouseout", () => {
                        tl.resume()
                    })
                })

                slider01Wrapper.events.on("indexChanged", () => {
                    el.closest(".g--slider-01").querySelector(".js--dash").style.width = 0
                    tl.restart()
                })

                slider01Wrapper.events.on("transitionEnd", () => {
                    sliderIndex(".js--slider-01")
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
export default Slider01

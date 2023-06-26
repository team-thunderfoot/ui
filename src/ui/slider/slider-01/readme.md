# Slider-01

## Layout

![alt text][slider-01]

[slider-01]: /src/img/global-components/slider/slider-01.jpg

## Html for a card

```html
<div class="g--slider-01">
    <div class="g--slider-01__wrapper js--slider-a">
        <div class="g--slider-01__wrapper__item">// item</div>
    </div>
    <div class="g--slider-01__controls js--controls-a">
        <div class="g--slider-01__controls__dash">
            <span class="g--slider-01__controls__dash__artwork js--dash"></span>
        </div>
    </div>
</div>
```

## Editable variables

-   $background-color-dash
-   $background-color-line
-   $height-dash

## use

```scss
.g--slider-01 {
    @include make-slider-01();
    @include make-slider-01-modifier(
        // $background-color-dash: rgba(map-get($color-options, a), 0.1),
        // $background-color-line: rgba(map-get($color-options, a), 0.5),
        // $height-dash: $measure
    );
}
```

## JS

1- You need to install the package

```sh
npm install tiny-slider
```

2- Create a SliderA.js class with all the necessary settings

```sh
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

```

```sh
export const sliderIndex = (wrapperClass) => {
    if (document.querySelector('*[tabindex="-1"]')) {
        document.querySelectorAll('button[tabindex="-1"]').forEach((sliderButton) => {
            sliderButton.setAttribute("tabindex", "0")
        })

        document.querySelectorAll(`${wrapperClass}>div`).forEach((sliderItem) => {
            let sliderCard = sliderItem.querySelector("*")

            if (sliderItem.getAttribute("tabIndex") == null) {
                sliderCard.setAttribute("tabIndex", "0")
            } else {
                sliderCard.setAttribute("tabIndex", sliderItem.getAttribute("tabIndex"))
            }
        })
    }
}
```

3- Import and instance the class SliderA.js in your Index.js

```sh
import SliderA from "./SliderA"

class Index {
    constructor() {
        this.init()
    }
    init() {
        new SliderA()
    }
}

export default Index
new Index()
```

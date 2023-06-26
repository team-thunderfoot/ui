# Slider-01 without controls

## Layout

![alt text][slider-01]

[slider-01]: /src/img/global-components/slider/slider-01.jpg

## Html for the slider

```html
<div class="g--slider-01">
    <div class="g--slider-01__wrapper js--slider-01">
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

2- Create a Slider01.js class with all the necessary settings

```sh
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

3- Import and instance the class Slider01.js in your Index.js

```sh
import Slider01from "./Slider01"

class Index {
    constructor() {
        this.init()
    }
    init() {
        new Slider01()
    }
}

export default Index
new Index()
```

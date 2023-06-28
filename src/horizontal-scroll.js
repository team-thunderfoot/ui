import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { tns } from "/node_modules/tiny-slider/src/tiny-slider.js"

import DOMTF from './DOMTF.js';

class HorizontalScroll{
  
    constructor(){
        this.DOM = {
            container: document.querySelectorAll(".f--vw-container"),
            columns: document.querySelectorAll("*[class*='f--vw-col']"),
            sections: document.querySelectorAll(".js--horizontal-wrapper"),
            trigger: document.querySelectorAll('.js--horizontal-section'),
            slider: document.querySelectorAll(".js--slider-01")
        };
        this.classes = {
            container: 'f--vw-container--remove-row',
            col: 'display--flex',
        }
        this.init();
    }

    init(){

        this.dom_tf = new DOMTF();

        if(this.DOM.sections && this.DOM.trigger){
            this.DOM.sections.forEach(section => {
                gsap.to(section, {
                    x: () => -(section.scrollWidth - document.documentElement.clientWidth) + "px",
                    ease: "none",
                    duration: 4,
                    scrollTrigger: {
                        trigger: section.parentElement,
                        invalidateOnRefresh: true,
                        pin: true,
                        scrub: 1,
                        end: () => "+=" + section.offsetWidth,
                    }
                })
            });
        }

        this.containerHeight();
        window.addEventListener("resize", this._debounce((e) => {
            this.containerHeight();
        }));

        this.DOM.slider.forEach((el) => {
            var slider = tns({
                container: el,
                items: 1,
                center: true,
                gutter: 32,
                slideBy: 1,
                nav: false,
                controls: true,
                controlsContainer: el.nextElementSibling,
                rewind: false,
                swipeAngle: false,
                lazyload: false,
                lazyloadSelector: ".g--lazy-01",
                preventActionWhenRunning: true,
                mouseDrag: true,
                autoplayButtonOutput: false,
                speed: 1000,
                responsive: {
                    1025: {
                        items: 2,
                    },
                },
            })
        })

    }

    containerHeight(){
        this.DOM.container.forEach((el) => {
            if(el.classList.contains(this.classes.container)) {
                el.classList.remove(this.classes.container);
            }
            if(el.offsetHeight > window.innerHeight){
                el.classList.add(this.classes.container);
            }
        })
        this.DOM.columns.forEach((element) => {
            if(element.classList.contains(this.classes.col)) {
                element.classList.remove(this.classes.col);
            }
            if(element.offsetHeight > window.innerHeight){
                element.classList.add(this.classes.col);
            }
        })
    }

    _debounce(func) {
        let timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(func, 750, event);
        };
    }
}

export default HorizontalScroll;
new HorizontalScroll();
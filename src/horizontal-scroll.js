import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { tns } from "/node_modules/tiny-slider/src/tiny-slider.js";

import DOMTF from './DOMTF.js';
import JSUTIL from "@andresclua/jsutil";
import {tf_debounce,tf_throttle} from '@andresclua/debounce-throttle';

class HorizontalScroll{
  
    constructor(){
        this.DOM = {
            // container: document.querySelectorAll(".f--vw-container"),
            container: document.querySelectorAll(".g--horizontal-scroll-01__wrapper__item"),
            columns: document.querySelectorAll("*[class*='f--vw-col']"),
            sections: document.querySelectorAll(".js--horizontal-wrapper"),
            trigger: document.querySelectorAll('.js--horizontal-section'),
            slider: document.querySelectorAll(".js--slider-01")
        };
        this.classes = {
            // container: 'f--vw-container--remove-row',
            container: 'g--horizontal-scroll-01__wrapper__item--remove-row',
            col: 'display--flex',
        }
        this.init();
    }

    init(){

        this.dom_tf = new DOMTF();
        this.js_ui = new JSUTIL();

        if(this.DOM.sections && this.DOM.trigger){
            this.DOM.sections.forEach(section => {
                var tl = gsap.to(section, {
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

                const newLocal = gsap.to(".js--test", {
                    left: "-50%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".js--test",
                        containerAnimation: tl,
                        start: "left 90%",
                        end: "left 10%",
                        scrub: true,
                        // id: "2",
                        markers: true
                    }
                });
            });
        }


        this.containerHeight();
        window.addEventListener('resize', tf_debounce((e)=>{
            this.containerHeight();
        },500));

        this.DOM.slider.forEach((el) => {
            var slider = tns({
                container: el,
                items: 2,
                gutter: 32,
                slideBy: 2,
                nav: false,
                controls: false,
                rewind: false,
                swipeAngle: false,
                lazyload: true,
                lazyloadSelector: ".g--lazy-01",
                preventActionWhenRunning: true,
                mouseDrag: true,
                autoplayButtonOutput: false,
                speed: 1000,
                autoplay: true,
                responsive: {
                    581: {
                        items: 3,
                        slideBy: 3,
                    },
                    811: {
                        items: 4,
                        slideBy: 4,
                    },
                    1025: {
                        items: 6,
                        slideBy: 6,
                    },
                },
            })
        })

    }

    containerHeight(){
        this.DOM.container.forEach((el) => {


            if(this.js_ui.matches(el, this.classes.container)) {
                this.js_ui.removeClass(el, this.classes.container);
            }
            if(el.offsetHeight > window.innerHeight){
                this.js_ui.addClass(el, this.classes.container);
            }
        })
        this.DOM.columns.forEach((element) => {
            if(this.js_ui.matches(element, this.classes.col)) {
                this.js_ui.removeClass(element, this.classes.col);
            }
            if(element.offsetHeight > window.innerHeight){
                this.js_ui.addClass(element, this.classes.col);
            }
        })
    }
}

export default HorizontalScroll;
new HorizontalScroll();
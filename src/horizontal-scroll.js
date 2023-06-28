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
        this.js_ui = new JSUTIL();

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
        window.addEventListener('resize', tf_debounce((e)=>{
            this.containerHeight();
        },500));

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
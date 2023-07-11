import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
// import {ScrollSmoother} from "gsap/ScrollSmoother";
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// import { tns } from "/node_modules/tiny-slider/src/tiny-slider.js";

// import DOMTF from './DOMTF.js';
// import JSUTIL from "@andresclua/jsutil";
// import {tf_debounce,tf_throttle} from '@andresclua/debounce-throttle';

class Grid{
  
    constructor(){
        // this.DOM = {
        //     // container: document.querySelectorAll(".f--vw-container"),
        //     container: document.querySelectorAll(".g--horizontal-scroll-01__wrapper__item"),
        //     columns: document.querySelectorAll("*[class*='f--vw-col']"),
        //     sections: document.querySelectorAll(".js--horizontal-wrapper"),
        //     trigger: document.querySelectorAll('.js--horizontal-section'),
        //     slider: document.querySelectorAll(".js--slider-01")
        // };
        // this.classes = {
        //     // container: 'f--vw-container--remove-row',
        //     container: 'g--horizontal-scroll-01__wrapper__item--remove-row',
        //     col: 'display--flex',
        // }
        this.init();
    }

    init(){

        // let smoother = ScrollSmoother.create({
        //     smooth: 2,   // seconds it takes to "catch up" to native scroll position
        //     effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
        //   });

    }
}

export default Grid;
new Grid();
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import DOMTF from './DOMTF.js';

class HorizontalScroll{
  
    constructor(){
        this.DOM = {
            sections: document.querySelectorAll(".js--horizontal-wrapper"),
            trigger: document.querySelectorAll('.js--horizontal-section'),
        };
        this.init();
    }

    init(){
      document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");

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
    }
}

export default HorizontalScroll;
new HorizontalScroll();
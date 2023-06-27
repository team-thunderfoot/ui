import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import DOMTF from './DOMTF.js';

class HorizontalScroll{
  
    constructor(){
        this.DOM = {
            container: document.querySelectorAll(".c--container"),
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

        this.containerHeight();
        window.addEventListener("resize", this._debounce((e) => {
            this.containerHeight();
        }));

    }

    containerHeight(){
        this.DOM.container.forEach((el) => {
            if(el.classList.contains('c--container--second')) {
                el.classList.remove("c--container--second");
            }
            if(el.offsetHeight > window.innerHeight){
                el.classList.add("c--container--second");
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
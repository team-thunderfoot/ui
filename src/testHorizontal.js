import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class HorizontalScroll{

  constructor(){
    this.DOM = {
      container: document.querySelectorAll(".c--group-a"),
      columns: document.querySelectorAll("*[class*='f--vw-col']"),
      sections: document.querySelectorAll(".js--horizontal-wrapper"),
      trigger: document.querySelectorAll('.js--horizontal-section'),
    };
    this.init();
  }

  init(){

    if(this.DOM.sections && this.DOM.trigger){
      this.DOM.sections.forEach(section => {
        var tl = gsap.to(section, {
          x: () => -(section.scrollWidth - document.documentElement.clientWidth) + "px",
          ease: "none",
          duration: 4,
          scrollTrigger: {
            trigger: section.parentElement,
            start: "center center",
            invalidateOnRefresh: true,
            pin: "main",
            scrub: 1,
            end: () => "+=" + section.offsetWidth,
            markers: true
          }
        })
        });
    }

  }

}

export default HorizontalScroll;
new HorizontalScroll();
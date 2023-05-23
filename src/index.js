/**
 * Styles
 */
// import "./index.scss";

/**
 * Lazy Loading
 */
import Blazy from "blazy";
import BackToTop from "@teamthunderfoot/back-to-top";
import "@lottiefiles/lottie-player";

class Index {
  constructor() {
    this.init();
  }
  init() {
    // lazy loading for images
    new Blazy({
      selector: ".g--lazy-01",
      successClass: "g--lazy-01--is-loaded",
      errorClass: "g--lazy-01--is-error",
    });
    const backToTop = new BackToTop({
      activeClass: "js--back-top--is-active",
      distance: 300,
    });
  }
}

export default Index;
new Index();

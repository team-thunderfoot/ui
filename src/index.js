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
      linkClass: "js--back-top",
      activeClass: "g--back-top-01--is-active",
      distanceTrigger: "tf-data-distance",
    });
  }
}

export default Index;
new Index();

/**
 * Styles
 */
// import "./index.scss";

/**
 * Lazy Loading
 */
import Blazy from "blazy";
import BackToTop from "./ui/back-top/back-top-01/back-top";
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
    new BackToTop({
      activeClass: 'g--back-top-01--is-active',
      distance: 300,
    });
  }
}

export default Index;
new Index();

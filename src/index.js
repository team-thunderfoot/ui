/**
 * Styles
 */
// import "./index.scss";

/**
 * Lazy Loading
 */
import Blazy from "blazy";
import BackToTop from "./back-top";

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
    new BackToTop();
  }
}

export default Index;
new Index();

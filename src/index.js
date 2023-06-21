/**
 * Styles
 */
// import "./index.scss";

/**
 * Lazy Loading
 */
import Blazy from "blazy";
import BackToTop from "@teamthunderfoot/back-to-top";
import AnchorTo from "@teamthunderfoot/anchor-to";

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

    new AnchorTo({
      trigger: "js--anchor-to",
      checkUrl: true,
      anchorTo: "tf-data-target",
      offsetTop: "tf-data-distance",
      offsetTopURL: 100,
    });
  }
}

export default Index;
new Index();

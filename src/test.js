/**
 * Styles
 */
// import "./index.scss";

/**
 * Lazy Loading
 */
import Blazy from "blazy";
import PreventBounceIOS from "@teamthunderfoot/prevent-bounce-ios";
import MobileHeightAdjust from "@teamthunderfoot/mobile-height-adjust";

import "@lottiefiles/lottie-player";

class Test {
  constructor() {
    this.init();
  }
  init() {
    const preventBounceIOS = new PreventBounceIOS();
    const mobileHeightAdjust = new MobileHeightAdjust();
  }
}

export default Test;
new Test();

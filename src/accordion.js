/**
 * Accordion
 */

import Accordion from "@andresclua/accordion";

const accordion = new Accordion({
  accActive: "accordion-1", //id of the initially active accordion
  accActiveClass: "g--accordion-01--is-active", //class for the active accordion
  accClose: true, //preset if the accordion should start closed
  accAllOpen: false, //preset if all accordion items should start open
  accTrigger: "tf-ds-acc-target", //class for all links that trigger an accordion item
  accBody: "tf-ds-acc-body", //class for the accordion body
  onChange: () => {
    //do something
  },
});

/**
 * Lazy Loading
 */
import Blazy from "blazy";

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
  }
}

export default Index;
new Index();

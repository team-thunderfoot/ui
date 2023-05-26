/**
 * Modal
 */

import Modal from '@andresclua/modal';

const modal = new Modal({
  backdrop: 'g--modal-01__backdrop', //class of the backdrop
  backdropActiveClass: 'g--modal-01__backdrop--is-active', //active class of the backdrop
  modal:'g--modal-01__wrapper', //class of the modal
  modalIdTarget : 'modal-1', //ID of the modal
  modalActiveClass:'g--modal-01__wrapper--is-active', //active class of the modal
  onHide : () => {
      //do something when the modal closes
  },
  onShow : () =>{
      //do something when the modal pops up
  }
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

//

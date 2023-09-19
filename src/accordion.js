/**
 * Accordion
 */

import Accordion from "@teamthunderfoot/accordion"
import BackToTop from "@teamthunderfoot/back-to-top"

/**
 * Lazy Loading
 */
import Blazy from "blazy"

class Index {
    constructor() {
        this.init()
    }
    init() {
        // lazy loading for images
        new Blazy({
            selector: ".g--lazy-01",
            successClass: "g--lazy-01--is-loaded",
            errorClass: "g--lazy-01--is-error",
        })
        const backToTop = new BackToTop({
            linkClass: "js--back-top",
            activeClass: "g--back-top-01--is-active",
            distanceTrigger: "tf-data-distance",
        })

        const accordionA = new Accordion({
            element:  document.querySelector(".js--container-a"),
            accActive: "tf-ds-acc-active-a",
            accActiveClass: "g--accordion-01--is-active",
            accBodyClass: "g--accordion-01__bd",
            accClose: true,
            accAllOpen: false,
            accTrigger: "tf-ds-acc-target-a",
            accExternalTrigger: "tf-ds-acc-external-target-a",
            accBody: "tf-ds-acc-body-a",
            onHide: () => {
                //do something
            },
            onShow: () => {
                //do something
            },
        })
        
        const accordionB = new Accordion({
            element:  document.querySelector(".js--container-b"),
            accActive: "tf-ds-acc-active-b",
            accActiveClass: "g--accordion-02--is-active",
            accBodyClass: "g--accordion-02__bd",
            accClose: false,
            accAllOpen: false,
            accTrigger: "tf-ds-acc-target-b",
            accExternalTrigger: "tf-ds-acc-external-target-b",
            accBody: "tf-ds-acc-body-b",
            onHide: () => {
                //do something
            },
            onShow: () => {
                //do something
            },
        })
    }
}

export default Index
new Index()

//

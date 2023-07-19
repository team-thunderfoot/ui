# Accordion-02

## Layout

![alt text][accordion-02]

[accordion-02]: /src/img/global-components/accordion/accordion-02.png

## Html for a card

```html
<div class="js--container-a">
    <div class="g--accordion-02" id="accordion-1" tf-ds-acc-body-b="accordion-1"> 
        <button class="g--accordion-02__hd" tf-ds-acc-target-b="accordion-1">
            <p class="g--accordion-02__hd__title">Accordion 1</p>
            <span class="g--accordion-02__hd__icon"></span>
        </button>
        <div class="g--accordion-02__bd">
            <div class="g--accordion-02__bd__content b--content-a">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nesciunt, sed quaerat ut a sapiente quia ea! Doloribus architecto aut voluptates quasi perspiciatis fugiat non nisi magni libero rem! Ducimus.
            </div>
        </div>
    </div>
</div>
```

## Editable variables

- $active-background-color
- $active-icon-color
- $active-title-color
- $border-color
- $border-style
- $border-width
- $hover-background-color
- $hover-icon-color
- $hover-title-color
- $icon-color
- $title-color
- $title-font
- $title-font-weight

## Use

```scss
.g--accordion-01 {
    @include make-accordion-01();
    @include make-accordion-01-modifier(
        // $active-background-color: map-get($color-options, g),
        // $active-icon-color: map-get($color-options, g),
        // $active-title-color: map-get($color-options, b),
        // $border-color: map-get($color-options, a),
        // $border-style: solid,
        // $border-width: 1px,
        // $hover-background-color: map-get($color-options, g),
        // $hover-icon-color: map-get($color-options, g),
        // $hover-title-color: map-get($color-options, g),
        // $icon-color: map-get($color-options, a),
        // $title-color: map-get($color-options, a),
        // $title-font-weight: 400,
        // $title-font: c,
    );
}
```

## Install the package

[@teamthunderfoot/accordion](https://www.npmjs.com/package/@teamthunderfoot/accordion)

```sh
npm install @teamthunderfoot/accordion
```

### JS

Import the package and initialize it.

```js
import Accordion from "@teamthunderfoot/accordion";

const accordion = new Accordion({
    element:  document.querySelector(".js--container-a"),
    accActive: "tf-ds-acc-active-a",
    accActiveClass: "g--accordion-01--is-active",
    accBodyClass: "g--accordion-01__bd",
    accClose: false,
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
```

### Nuxt

1- Create a file accordion.js inside plugins folder & add this.

```js
import Accordion from "@teamthunderfoot/accordion";

export default ({ app },inject) => {
    inject('Accordion', () => new Accordion({
        element : document.querySelector(".js--container-a"),
        accActive: "tf-ds-acc-active-a",
        accActiveClass: "c--accordion-a--is-active",
        accBodyClass: "c--accordion-a__bd",
        accClose: true,
        accAllOpen: false,
        accTrigger: "tf-ds-acc-target-a",
        accBody: "tf-ds-acc-body-a",
        onHide: () => {
            //do something
        },
        onShow: () => {
            //do something
        },
    }) );
};
```

2- Reference in your nuxt.config.js

```js
plugins: [
    { src: '~/plugins/accordion.js', ssr: false }
]
```

3- In your accordion.js

```js
import Accordion from "@teamthunderfoot/accordion";
export default ({ app },inject) => {
    inject('Accordion', () => new Accordion({
        element:  document.querySelector(".js--container-a"),
        accActive: "tf-ds-acc-active-a",
        accActiveClass: "c--accordion-a--is-active",
        accBodyClass: "c--accordion-a__bd",
        accClose: false,
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
    }) );
};
```

4- In your Page.vue

```js
async mounted() {
    setTimeout(() => {
        this.$Accordion();
    }, 200)
}
```
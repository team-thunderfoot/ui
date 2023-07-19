# Accordion-01

## Layout

![alt text][accordion-01]

[accordion-01]: /src/img/global-components/accordion/accordion-01.png

## Html for a card

```html
<div class="js--container-a">
    <div class="g--accordion-01" id="accordion-1" tf-ds-acc-body-a="accordion-1"> 
        <button class="g--accordion-01__hd" tf-ds-acc-target-a="accordion-1">
            <p class="g--accordion-01__hd__title">Accordion 1</p>
            <svg class="g--accordion-01__hd__icon" viewBox="0 0 21 12" fill="none">
            <path d="M21.0003 1.81432L10.8146 12L0.628906 1.81432L2.4114 -7.79153e-08L10.8146 8.18037L19.2178 -8.12545e-07L21.0003 1.81432Z" fill="#1A191D"/>
            </svg>
        </button>
        <div class="g--accordion-01__bd">
            <div class="g--accordion-01__bd__content b--content-a">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nesciunt, sed quaerat ut a sapiente quia ea! Doloribus architecto aut voluptates quasi perspiciatis fugiat non nisi magni libero rem! Ducimus.
            </div>
        </div>
    </div>
</div>
```

## Editable variables

- $active-background-color
- $active-icon-background
- $active-icon-border-color
- $active-icon-border-radius
- $active-icon-color
- $active-title-color
- $border-color
- $border-style
- $border-width
- $hover-icon-background
- $hover-icon-border-color
- $hover-icon-border-radius
- $hover-icon-color
- $hover-title-color
- $icon-background
- $icon-border-color
- $icon-border-radius
- $icon-border-style
- $icon-border-width
- $icon-color
- $icon-top
- $icon-width
- $title-color
- $title-font
- $title-font-weight

## Use

```scss
.g--accordion-01 {
    @include make-accordion-01();
    @include make-accordion-01-modifier(
        // $active-background-color: rgba(map-get($color-options, h), .2),
        // $active-icon-background: map-get($color-options, h),
        // $active-icon-border-color: map-get($color-options, h),
        // $active-icon-border-radius: 2px,
        // $active-icon-color: map-get($color-options, h),
        // $active-title-color: map-get($color-options, h),
        // $border-color: map-get($color-options, a),
        // $border-style: solid,
        // $border-width: 1px,
        // $hover-icon-background: map-get($color-options, a),
        // $hover-icon-border-color: map-get($color-options, a),
        // $hover-icon-border-radius: $measure,
        // $hover-icon-color: map-get($color-options, a),
        // $hover-title-color: map-get($color-options, a),
        // $icon-background: map-get($color-options, a),
        // $icon-border-color: map-get($color-options, a),
        // $icon-border-radius: 50%,
        // $icon-border-style: solid,
        // $icon-border-width: 2px,
        // $icon-color: map-get($color-options, a),
        // $icon-top: 2px,
        // $icon-width: $measure*2,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
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
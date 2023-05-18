# Accordion-02

## Layout

![alt text][accordion-02]

[accordion-02]: /src/img/global-components/accordion/accordion-01.png

## Html for a card

```sh
<div class="g--accordion-02" id="accordion-4" tf-ds-acc-body="accordion-4">
    <button class="g--accordion-02__hd" tf-ds-acc-target="accordion-4">
        <p class="g--accordion-02__hd__title">Accordion 1</p>
        <span class="g--accordion-02__hd__icon"></span>
    </button>
    <div class="g--accordion-02__bd">
        <div class="g--accordion-02__bd__content b--content-a">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nesciunt, sed quaerat ut a sapiente quia ea! Doloribus architecto aut voluptates quasi perspiciatis fugiat non nisi magni libero rem! Ducimus.
        </div>
    </div>
</div>
```

## Editable variables

- $border-color
- $border-style
- $border-width
- $icon-color
- $title-color
- $title-font
- $title-font-weight

## Use

```sh
.g--accordion-02 {
    @include make-accordion-02();
    @include make-accordion-02-modifier(
        $border-color: map-get($color-options, a),
        $border-style: solid,
        $border-width: 1px,
        $icon-color: map-get($color-options, g),
        $title-color: map-get($color-options, a),
        $title-font: d,
        // $title-font-weight: false,
    );
}
```

## Install the package

[@andresclua/accordion](https://www.jsdelivr.com/package/npm/@andresclua/accordion)

```sh
npm i @andresclua/accordion
```

### JS

Import the package and initialize it.

```sh
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
```

### Nuxt

1- Create a file accordion.js inside plugins folder & add this.

```sh
import Accordion from '@andresclua/accordion';

export default ({ app }, inject) => {
    inject('Accordion', data => new Accordion(data) );
};
```

2- Reference in your nuxt.config.js

```sh
plugins: [
    { src: '~/plugins/accordion.js', ssr: false }
  ]
```

3- Use it in your .vue file

```sh
mounted() {
   const accordion = this.$Accordion({
        accActive : 'accordion-1', //id of the initially active accordion
        accActiveClass : 'g--accordion-01--is-active', //class for the active accordion
        accClose : true, //preset if the accordion should start closed
        accAllOpen : false, //preset if all accordion items should start open
        accTrigger : 'tf-ds-acc-target', //class for all links that trigger an accordion item
        accBody : 'tf-ds-acc-body', //class for the accordion body
        onChange : () =>{
            //do something
        }
    });
}
```

# Accordion-01

## Layout

![alt text][accordion-01]

[accordion-01]: /src/img/global-components/accordion/accordion-01.png

## Html for a card

```sh
<div class="g--accordion-01" id="accordion-1" tf-ds-acc-body="accordion-1">
    <div class="g--accordion-01__hd" tf-ds-acc-target="accordion-1">
        <p class="g--accordion-01__hd__title">Accordion 1</p>
        <svg class="g--accordion-01__hd__icon" width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0003 1.81432L10.8146 12L0.628906 1.81432L2.4114 -7.79153e-08L10.8146 8.18037L19.2178 -8.12545e-07L21.0003 1.81432Z" fill="#1A191D"/>
        </svg>
    </div>
    <div class="g--accordion-01__bd">
        <div class="g--accordion-01__bd__content b--content-a">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nesciunt, sed quaerat ut a sapiente quia ea! Doloribus architecto aut voluptates quasi perspiciatis fugiat non nisi magni libero rem! Ducimus.
        </div>
    </div>
</div>
```

## Editable variables

- $background-color-hd: false by default
- $border-color
- $border-width
- $icon-color
- $title-color
- $title-font

### For modifiers

- $background-color-hd
- $border-color
- $icon-color
- $title-color

## Use

```sh
.g--accordion-01 {
    @include make-accordion-01(
        $border-width: 1px,
        $title-font: d
    );

    @include make-accordion-01-modifier(
        $border-color: map-get($color-options, a),
        $icon-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $background-color-hd: default,
    );
}
```

# btn-04

## Layout

![alt text][btn-04]

[btn-04]: /src/img/global-components/btn/g--btn-04.jpg

## Html for a button

```html
<button class="g--btn-04">btn 04
    <svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.5L5 5.5L1 1.5" stroke="#4D49F3" stroke-width="1.5"/>
    </svg>
</button>
```

## Html for a btn

```html
<a href="#" class="g--btn-04" target="_blank" rel="noopener noreferrer">btn 04 btn
    <svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.5L5 5.5L1 1.5" stroke="#4D49F3" stroke-width="1.5"/>
    </svg>
</a>
```

## Editable variables

- $artwork-color-fill
- $artwork-color-stroke
- $btn-font
- $btn-font-weight
- $hover-artwork-color
- $hover-text-color
- $hover-icon-transform
- $icon-top
- $icon-width
- $text-color
- $underline-color
- $underline-gradient
- $underline-height

## Use

We need to add `$icon-width` for the underline to work. This is because we need to know the width of the underline.

```scss
.g--btn-04{
    @include make-btn-04();
    @include make-btn-04-modifier(
        // $artwork-color-fill: map-get($color-options, a),
        // $artwork-color-stroke: map-get($color-options, a),
        // $btn-font: f,
        // $btn-font-weight: 600,
        // $hover-artwork-color: map-get($color-options, g),
        // $hover-text-color: map-get($color-options, g),
        // $hover-icon-transform: translateX($measure,)
        // $icon-top: 0px,
        // $icon-width: $measure,
        // $text-color: map-get($color-options, a),
        // $underline-color: map-get($color-options, a),
        // $underline-gradient: linear-gradient(to right, map-get($color-options, a), map-get($color-options, g)),
        // $underline-height: 2px,
    );
}
```

# btn-02

## Layout

![alt text][btn-02]

[btn-02]: /src/img/global-components/btn/g--btn-02.png

## Html for a button

```html
<button class="g--btn-02">btn 03
    <svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.5L5 5.5L1 1.5" stroke="#4D49F3" stroke-width="1.5"/>
    </svg>
</button>
```

## Html for a btn

```html
<a href="#" class="g--btn-02" target="_blank" rel="noopener noreferrer">btn 03 btn
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
- $icon-top
- $icon-width
- $text-color

## Use

```scss
.g--btn-02{
    @include make-btn-02();
    @include make-btn-02-modifier(
        // $artwork-color-fill: map-get($color-options, a),
        // $artwork-color-stroke: map-get($color-options, a),
        // $btn-font: f,
        // $btn-font-weight: 600,
        // $hover-artwork-color: map-get($color-options, g),
        // $hover-text-color: map-get($color-options, g),
        // $icon-top: 0px,
        // $icon-width: $measure,
        // $text-color: map-get($color-options, a),
    );
}
```

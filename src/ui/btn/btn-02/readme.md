# Btn-02

## Layout

![alt text][btn-02]

[btn-02]: /src/img/global-components/btn/g--btn-02.png

## Html for a button

```html
<button class="g--btn-02">button 02</button>
```

## Html for a link

```html
<a href="#" class="g--btn-02" target="_blank" rel="noopener noreferrer">button 02</a>
```

## Editable variables

- $border-width
- $border-color
- $border-color-hover
- $border-style
- $font
- $font-weight
- $text-color
- $text-color-hover
- $background-color
- $background-color-hover

## Use

```scss
.g--btn-02{
    @include make-btn-02();
    @include make-btn-02-modifier(
        $border-width: 1px,
        $border-color: map-get($color-options, a),
        $border-color-hover: map-get($color-options, g),
        $border-style: solid,
        $font: f,
        $font-weight: 400,
        $text-color: map-get($color-options, a),
        $text-color-hover: map-get($color-options, g),
        // $background-color: map-get($color-options, f),
        // $background-color-hover: map-get($color-options, g)
    );
}
```

# Btn-02

## Layout

![alt text][btn-02]

[btn-02]: /src/img/global-components/btn/g--btn-02.png

## Editable variables

- $font
- $border-width
- $border-color
- $text-color
- $background-color: false by default
- $border-color-hover
- $text-color-hover
- $background-color-hover: false by default

### For Modifiers

- $border-color
- $text-color
- $background-color
- $border-color-hover
- $text-color-hover
- $background-color-hover

## Html for a button

```sh
<button class="g--btn-02">button 02</button>
```

## Html for a link

```sh
<a href="#" class="g--btn-02" target="_blank" rel="noopener noreferrer">button 02</a>
```

## Use

```sh
.g--btn-02{
    @include make-btn-02(
        $font: c,
        $border-width: 1px,
    );
    @include make-btn-02-color(
        $border-color: map-get($color-options, a),
        $text-color: map-get($color-options, a),
        $border-color-hover: map-get($color-options, g),
        $text-color-hover: map-get($color-options, g),
        // $background-color: default,
        // $background-color-hover: defaullt
    );
}
```

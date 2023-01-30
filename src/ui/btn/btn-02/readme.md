# Btn-02

## Layout

![alt text][btn-02]

[btn-02]: /src/img/global-components/btn/g--btn-02.png

## Editable variables

- $background-color: false by default
- $background-color-hover: false by default
- $border-color
- $border-width
- $border-color-hover
- $font
- $text-color
- $text-color-hover

### For Modifiers

- $background-color
- $background-color-hover
- $border-color
- $border-color-hover
- $text-color
- $text-color-hover

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
        $border-width: 1px,
        $font: c,
    );
    @include make-btn-02-modifier(
        $border-color: map-get($color-options, a),
        $border-color-hover: map-get($color-options, g),
        $text-color: map-get($color-options, a),
        $text-color-hover: map-get($color-options, g),
        // $background-color: default,
        // $background-color-hover: defaullt
    );
}
```

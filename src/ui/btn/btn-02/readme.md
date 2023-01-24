# Btn-02

## Html for a button

```sh
<button class="g--btn-02">button 02</button>
```

## Html for a link

```sh
<a href="#" class="g--btn-02" target="_blank" rel="noopener noreferrer">button 02</a>
```

## editable variables
- $font
- $border-width
- $border-color
- $text-color
- $background-color
- $border-color-hover
- $text-color-hover
- $background-color-hover

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/btn/btn-02/_make-g--btn-02';
.g--btn-02{
    @include make-btn-02(
        $font: b,
        $border-width: 1px,
    );
    @include make-btn-02-color(
        $border-color: map-get($color-options, a),
        $text-color: map-get($color-options, a),
        $background-color: transparent,
        $border-color-hover: map-get($color-options, a),
        $text-color-hover: map-get($color-options, b),
        $background-color-hover: map-get($color-options, a)
    );
}
```

## layout
![alt text][btn-02]

[btn-02]: /src/img/global-components/btn/btn-02.svg 
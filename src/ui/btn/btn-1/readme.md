# Btn-1

Html for a button

```sh
<button class="g--btn-1">button 1</button>
```

Html for a link

```sh
<a href="#" class="g--btn-1" target="_blank" rel="noopener noreferrer">button 1</a>
```

## editable variables
- $font
- $border-width
- $border-color
- $text-color
- $border-color-hover
- $text-color-hover

## mixin and scss code

### mixin
```sh
@mixin make-btn-1(
    $font,
    $border-width,
) {
    @extend .f--font-#{$font} !optional;
    padding: $measure $measure*3;
    border-radius: 200px;
    text-decoration: none;
    display: inline-block;
    border: $border-width solid;
    background-color: transparent;
    transition: border-color $time-b $ease-standard-a, color $time-b $ease-standard-a;
    @media all and ($viewport-type: $mobile) {
        display: block;
        width: 100%;
        text-align: center;
    }
}

@mixin make-btn-1-color(
    $border-color,
    $text-color,
    $border-color-hover,
    $text-color-hover,
) {
    border-color: $border-color;
    color: $text-color;
    @media (hover: hover) {
        &:hover ,
        &:focus ,
        &:active {
            border-color: $border-color-hover;
            color: $text-color-hover;
        }
    }
}
```

### scss
```sh
.g--btn-1{
    @include make-btn-1(
        $font: b,
        $border-width: 1px,
    );
    @include make-btn-1-color(
        $border-color: map-get($color-options, a),
        $text-color: map-get($color-options, a),
        $border-color-hover: map-get($color-options, g),
        $text-color-hover: map-get($color-options, g),
    );
}
```

## how to use it
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/btn/_make-g--btn-1';
.g--btn-1{
    @include make-btn-1(
        $font: b,
        $border-width: 1px,
    );
    @include make-btn-1-color(
        $border-color: map-get($color-options, a),
        $text-color: map-get($color-options, a),
        $border-color-hover: map-get($color-options, g),
        $text-color-hover: map-get($color-options, g),
    );
}
```
# Btn-04

## Html for a button

```sh
<button class="g--btn-04">button 04</button>
```

## Html for a link

```sh
<a href="#" class="g--btn-04" target="_blank" rel="noopener noreferrer">button 04</a>
```

## editable variables
- $font:
- $border-width
- $border-color
- $text-color
- $background-color
- $border-color-hover
- $text-color-hover
- $background-color-hover

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/btn/btn-04/_make-g--btn-04';
.g--btn-04{
    @include make-btn-04(
        $font: b,
        $border-width: 1px,
    );
    @include make-btn-04-color(
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
![alt text][btn-04]

[btn-04]: /src/img/global-components/btn/btn-04.svg 
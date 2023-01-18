# Btn-2

## Html for a button

```sh
<button class="g--btn-2">button 2</button>
```

## Html for a link

```sh
<a href="#" class="g--btn-2" target="_blank" rel="noopener noreferrer">button 2</a>
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
@import '@teamthunderfoot/ui/src/ui/g-components/btn/btn-2/_make-g--btn-2';
.g--btn-2{
    @include make-btn-2(
        $font: b,
        $border-width: 1px,
    );
    @include make-btn-2-color(
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
![alt text][btn-2]

[btn-2]: /src/img/global-components/btn/btn-2.svg 
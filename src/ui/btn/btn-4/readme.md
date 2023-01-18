# Btn-4

## Html for a button

```sh
<button class="g--btn-4">button 4</button>
```

## Html for a link

```sh
<a href="#" class="g--btn-4" target="_blank" rel="noopener noreferrer">button 4</a>
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
@import '@teamthunderfoot/ui/src/ui/g-components/btn/btn-4/_make-g--btn-4';
.g--btn-4{
    @include make-btn-4(
        $font: b,
        $border-width: 1px,
    );
    @include make-btn-4-color(
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
![alt text][btn-4]

[btn-4]: /src/img/global-components/btn/btn-4.svg 
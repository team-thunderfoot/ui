# Btn-1

## Html for a button

```sh
<button class="g--btn-1">button 1</button>
```

## Html for a link

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

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/btn/btn-1/_make-g--btn-1';
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

## layout
![alt text][btn-1]

[btn-a]: /src/img/global-components/btn/btn-1.svg 
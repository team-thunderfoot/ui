# Btn-3

## Html for a button

```sh
<button class="g--btn-3">button 3</button>
```

## Html for a link

```sh
<a href="#" class="g--btn-3" target="_blank" rel="noopener noreferrer">button 3</a>
```

## editable variables
- $font:
- $border-width
- $border-color
- $text-color
- $border-color-hover
- $text-color-hover

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/btn/btn-3/_make-g--btn-3';
.g--btn-3{
    @include make-btn-3(
        $font: b,
        $border-width: 1px,
    );
    @include make-btn-3-color(
        $border-color: map-get($color-options, a),
        $text-color: map-get($color-options, a),
        $border-color-hover: map-get($color-options, g),
        $text-color-hover: map-get($color-options, g),
    );
}
```

## layout
![alt text][btn-3]

[btn-3]: /src/img/global-components/btn/btn-3.svg 
# Btn-03

## Html for a button

```sh
<button class="g--btn-03">button 03</button>
```

## Html for a link

```sh
<a href="#" class="g--btn-03" target="_blank" rel="noopener noreferrer">button 03</a>
```

## editable variables
- $font:
- $border-width
- $border-color
- $text-color
- $border-color-hover
- $text-color-hover

## use
```sh
.g--btn-03{
    @include make-btn-03(
        $font: b,
        $border-width: 1px,
    );
    @include make-btn-03-color(
        $border-color: map-get($color-options, a),
        $text-color: map-get($color-options, a),
        $border-color-hover: map-get($color-options, g),
        $text-color-hover: map-get($color-options, g),
    );
}
```

## layout
![alt text][btn-03]

[btn-03]: /src/img/global-components/btn/btn-03.svg 
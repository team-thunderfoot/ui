# Btn-01

## Html for a button

```sh
<button class="g--btn-01">button 01</button>
```

## Html for a link

```sh
<a href="#" class="g--btn-01" target="_blank" rel="noopener noreferrer">button 01</a>
```

## editable variables
- $font
- $border-width
- $border-color
- $text-color
- $border-color-hover
- $text-color-hover

## use
```sh
.g--btn-01{
    @include make-btn-01(
        $font: b,
        $border-width: 01px,
    );
    @include make-btn-01-color(
        $border-color: map-get($color-options, a),
        $text-color: map-get($color-options, a),
        $border-color-hover: map-get($color-options, g),
        $text-color-hover: map-get($color-options, g),
    );
}
```

## layout
![alt text][btn-01]

[btn-01]: /src/img/global-components/btn/btn-01.svg 
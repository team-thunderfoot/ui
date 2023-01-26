# Btn-01

## layout

![alt text][btn-01]
![alt text][btn-01--second]

[btn-01]: /src/img/global-components/btn/g--btn-01.png
[btn-01--second]: /src/img/global-components/btn/g--btn-01--second.png

## editable variables

- $font
- $border-width
- $border-color
- $text-color
- $background-color: false by default
- $border-color-hover
- $text-color-hover
- $background-color-hover: false by default

### For Modifiers

- $border-color
- $text-color
- $background-color: false by default
- $border-color-hover
- $text-color-hover
- $background-color-hover: false by default

## Html for a button

```sh
<button class="g--btn-01">button 01</button>
```

## Html for a link

```sh
<a href="#" class="g--btn-01" target="_blank" rel="noopener noreferrer">button 01</a>
```

## use

```sh
.g--btn-01{
    @include make-btn-01(
        $font: c,
        $border-width: 1px,
    );
    @include make-btn-01-color(
        $border-color: map-get($color-options, a),
        $text-color: map-get($color-options, a),
        $border-color-hover: map-get($color-options, g),
        $text-color-hover: map-get($color-options, g),
        // $background-color: default,
        // $background-color-hover: default
    );
}
```

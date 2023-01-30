# Btn-01

## layout

![alt text][btn-01]
![alt text][btn-01--second]

[btn-01]: /src/img/global-components/btn/g--btn-01.png
[btn-01--second]: /src/img/global-components/btn/g--btn-01--second.png

## Html for a button

```sh
<button class="g--btn-01">button 01</button>
```

## Html for a link

```sh
<a href="#" class="g--btn-01" target="_blank" rel="noopener noreferrer">button 01</a>
```

## Editable variables

- $background-color: false by default
- $background-color-hover: false by default
- $border-color
- $border-width
- $border-color-hover
- $font
- $text-color
- $text-color-hover

### For Modifiers

- $background-color
- $background-color-hover
- $border-color
- $border-color-hover
- $text-color
- $text-color-hover

## Use

```sh
.g--btn-01{
    @include make-btn-01(
        $border-width: 1px,
        $font: c,
    );
    @include make-btn-01-modifier(
        $border-color: map-get($color-options, a),
        $border-color-hover: map-get($color-options, g),
        $text-color: map-get($color-options, a),
        $text-color-hover: map-get($color-options, g),
        // $background-color: default,
        // $background-color-hover: default
    );
}
```

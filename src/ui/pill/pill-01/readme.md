# Pill-01

## Layout

![alt text][pill-01]

[pill-01]: /src/img/global-components/pill/pill-01.png

## Editable variables

#### By Default

- $font
- $background-color
- $text-color
- $background-color-hover: false by default
- $text-color-hover: false by default

#### For Modifiers

- $background-color
- $text-color
- $background-color-hover: false by default
- $text-color-hover: false by default

## Html for a pill

```sh
<div class="g--pill-01">pill 01</div>
```

## Html for a link

```sh
<a href="#" class="g--pill-01" target="_blank" rel="noopener noreferrer">pill 01</a>
```

## Use

```sh
.g--pill-01{
    @include make-pill-01(
        $font: d,
    );
    @include make-pill-01-color(
        $background-color: map-get($color-options, d),
        $text-color: map-get($color-options, a),
        $background-color-hover: map-get($color-options, a),
        $text-color-hover: map-get($color-options, d),
    );
}
```

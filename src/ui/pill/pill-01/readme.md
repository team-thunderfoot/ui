# Pill-01

## Layout

![alt text][pill-01]

[pill-01]: /src/img/global-components/pill/g--pill-01.png

## Html for a pill

```sh
<div class="g--pill-01">pill 01</div>
```

## Html for a link

```sh
<a href="#" class="g--pill-01" target="_blank" rel="noopener noreferrer">pill 01</a>
```

## Editable variables

- $background-color
- $background-color-hover: false by default
- $font
- $text-color
- $text-color-hover: false by default
- $font-weight: false by default

#### For Modifiers

- $background-color
- $background-color-hover
- $text-color
- $text-color-hover

## Use

```sh
.g--pill-01{
    @include make-pill-01(
        $font: d,
        // $font-weight: default,
    );
    @include make-pill-01-modifier(
        $background-color: map-get($color-options, d),
        $text-color: map-get($color-options, a),
        // $background-color-hover: default,
        // $text-color-hover: default,
    );
}
```

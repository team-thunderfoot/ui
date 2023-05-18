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
- $hover-background-color
- $border-width
- $border-style
- $border-color
- $hover-border-color
- $text-color
- $hover-text-color
- $text-font
- $text-font-weight
- $hover-shadow
- $hover-transform

## Use

```sh
.g--pill-01{
    @include make-pill-01();
    @include make-pill-01-modifier(
        $background-color: map-get($color-options, g),
        $hover-background-color: map-get($color-options, f),
        $border-width: 3px,
        $border-style: dotted,
        $border-color: map-get($color-options, e),
        $hover-border-color: map-get($color-options, b),
        $text-color: map-get($color-options, a),
        $hover-text-color: map-get($color-options, b),
        $text-font: f,
        // $text-font-weight: false,
        $hover-shadow: 0 0 $measure*2 map-get($color-options, h),
        $hover-transform: translateY(-$measure),
    );
}
```

# Pill-01

## Layout

![alt text][pill-01]

[pill-01]: /src/img/global-components/pill/g--pill-01.png

## Html for a pill

```html
<div class="g--pill-01">pill 01</div>
```

## Html for a link

```html
<a href="#" class="g--pill-01" target="_blank" rel="noopener noreferrer">pill 01</a>
```

## Editable variables

- $background-color
- $border-color
- $border-radius
- $border-style
- $border-width
- $hover-background-color
- $hover-border-color
- $hover-shadow
- $hover-text-color
- $hover-transform
- $text-color
- $text-font
- $text-font-weight

## Use

```scss
.g--pill-01{
    @include make-pill-01();
    @include make-pill-01-modifier(
    // $background-color: lighten(map-get($color-options, a), 75%),
    // $border-color: map-get($color-options, e),
    // $border-radius: 100px,
    // $border-style: solid,
    // $border-width: 1px,
    // $hover-background-color: map-get($color-options, a),
    // $hover-border-color: map-get($color-options, a),
    // $hover-shadow: 0 0 $measure*2 map-get($color-options, h),
    // $hover-text-color: map-get($color-options, b),
    // $hover-transform: translateY(-$measure),
    // $text-color: map-get($color-options, a),
    // $text-font: f,
    // $text-font-weight: 600,
    );
}
```

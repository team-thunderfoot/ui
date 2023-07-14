# Card-13

## Layout

![alt text][card-13]

[card-13]: /src/img/global-components/card/card-13.jpg

## Html for a card

```html
<div class="g--card-13">
    <h3 class="g--card-13__title">Lorem ipsum</h3>
    <p class="g--card-13__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-13">
    <h3 class="g--card-13__title">Lorem ipsum</h3>
    <div class="g--card-13__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

- $background-color
- $border-color
- $border-style
- $border-width
- $border-radius
- $card-min-height
- $hover-background-color
- $hover-shadow
- $hover-title-color
- $hover-title-underline-color
- $hover-transform
- $shadow
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $subtitle-max-lines
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

```scss
.g--card-13{
    @include make-card-13();
    @include make-card-13-modifier(
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: $measure,
        // $border-style: solid,
        // $border-width: 1px,
        // $card-min-height: 500px,
        // $hover-background-color: map-get($color-options, g),
        // $hover-shadow: 0 0 $measure*4 map-get($color-options, a),
        // $hover-title-color: map-get($color-options, h),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $subtitle-color: map-get($color-options, a),
        // $subtitle-font: f,
        // $subtitle-font-weight: 400,
        // $subtitle-max-lines: 3,
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3
    );
}
```
# Card-19

## Layout

![alt text][card-19]

[card-19]: /src/img/global-components/card/card-19.jpg

## Html for a card

```html
<div class="g--card-19">
    <p class="g--card-19__meta">Lorem ipsum | Lorem ipsum</p>
    <p class="g--card-19__title">
        Card-19 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam
        consectetur pretium fringilla metus.
    </p>
    <div class="g--card-19__list-group">
        <div class="g--card-19__list-group__list-item">Category</div>
        <div class="g--card-19__list-group__list-item">Category</div>
    </div>
</div>
```

## Editable variables

-   $background-color
-   $border-color
-   $border-radius
-   $border-style
-   $border-width
-   $card-min-height
-   $hover-background-color
-   $hover-border-color
-   $hover-border-radius
-   $hover-meta-color
-   $hover-shadow
-   $hover-title-color
-   $hover-title-underline-color
-   $hover-transform
-   $meta-color
-   $meta-font
-   $meta-font-weight
-   $pill-class
-   $shadow
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## use

```scss
.g--card-19 {
    @include make-card-19();
    @include make-card-19-modifier(
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: 0,
        // $border-style: solid,
        // $border-width: 1px,
        // $card-min-height: 500px,
        // $hover-background-color: map-get($color-options, g),
        // $hover-border-color: map-get($color-options, f)
        // $hover-border-radius: $measure * 4,
        // $hover-meta-color: map-get($color-options, g),
        // $hover-shadow: 0 0 16px 0 rgba(map-get($color-options, a), 0.5),
        // $hover-title-color: map-get($color-options, b),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-5%),
        // $meta-color: map-get($color-options, a),
        // $meta-font-weight: 400,
        // $meta-font: f,
        // $pill-class: g--pill-01,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font-weight: 400,
        // $title-font: c,
        // $title-max-lines: 3
    );
}
```

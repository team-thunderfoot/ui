# Card-19

## Layout

![alt text][card-19]

[card-19]: /src/img/global-components/card/card-19.jpg

## Html for a card

```html
<div class="g--card-19">
    <p class="g--card-19__meta">Lorem ipsum | Lorem ipsum</p>
    <p class="g--card-19__title">Card-19 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    <div class="g--card-19__list-group">
        <div class="g--card-19__list-group__list-item">Category</div>
        <div class="g--card-19__list-group__list-item">Category</div>
    </div>
</div>
```

## Editable variables

-   $background-color
-   $border-color
-   $border-style
-   $border-width
-   $border-radius
-   $hover-background-color
-   $hover-shadow
-   $hover-title-color
-   $hover-transform
-   $meta-color
-   $meta-font
-   $meta-font-weight
-   $pill-class
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
        $background-color: map-get($color-options, e),
        $border-color: map-get($color-options, a),
        $border-style: dashed,
        $border-width: 2px,
        $border-radius: $measure,
        $hover-background-color: map-get($color-options, g),
        $hover-shadow: 0 0 16px 0 rgba(map-get($color-options, a), 0.5),
        $hover-title-color: map-get($color-options, b),
        $hover-transform: translateY(-5%),
        $meta-color: map-get($color-options, a),
        $meta-font: f,
        $meta-font-weight: 600,
        $pill-class: g--pill-01,
        $text-align: left,
        $title-color: map-get($color-options, a),
        $title-font: c,
        $title-font-weight: 600,
        $title-max-lines: 3
    );
}
```

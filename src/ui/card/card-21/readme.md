# Card-21

## Layout

![alt text][card-21]

[card-21]: /src/img/global-components/card/card-21.jpg

## Html for a card

```html
<div class="g--card-21">
    <div class="g--card-21__hd">
        <p class="g--card-21__hd__meta">Lorem ipsum | Lorem ipsum</p>
        <p class="g--card-21__hd__author">By Author</p>
    </div>
    <p class="g--card-21__title">Card-21 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    <div class="g--card-21__list-group">
        <div class="g--card-21__list-group__list-item">Category</div>
        <div class="g--card-21__list-group__list-item">Category</div>
    </div>
</div>
```

## Editable variables

-   $author-font
-   $author-font-weight
-   $author-color
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
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## use

```scss
.g--card-21 {
    @include make-card-21();
    @include make-card-21-modifier(
        $author-font: f,
        $author-font-weight: 400,
        $author-color: map-get($color-options, a),
        $background-color: lighten(map-get($color-options,a), 82%),
        $border-color: map-get($color-options, a),
        $border-style: solid,
        $border-width: 1px,
        $border-radius: 0,
        $hover-background-color: map-get($color-options, g),
        $hover-shadow: 0 0 16px 0 rgba(map-get($color-options, a), 0.5),
        $hover-title-color: map-get($color-options, b),
        $hover-transform: translateY(-5%),
        $meta-color: map-get($color-options, a),
        $meta-font: f,
        $meta-font-weight: 400,
        $pill-class: g--pill-01,
        $title-color: map-get($color-options, a),
        $title-font: c,
        $title-font-weight: 400,
        $title-max-lines: 3
    );
}
```

# Card-23

## Layout

![alt text][card-23]

[card-23]: /src/img/global-components/card/card-23.png

## Html for a card

```html
<div class="g--card-23">
    <div class="g--card-23__hd">
        <p class="g--card-23__hd__meta">Lorem ipsum | Lorem ipsum</p>
        <p class="g--card-23__hd__author">By Author</p>
    </div>
    <p class="g--card-23__title">Card-23 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    <div class="g--card-23__list-group">
        <div class="g--card-23__list-group__list-item">Category</div>
        <div class="g--card-23__list-group__list-item">Category</div>
    </div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-23__link">This is a link</a>
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
-   $link-class
-   $link-font
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
.g--card-23 {
    @include make-card-23();
    @include make-card-23-modifier(
        $author-font: g,
        $author-font-weight: 600,
        $author-color: map-get($color-options, a),
        $background-color: map-get($color-options, e),
        $border-color: map-get($color-options, a),
        $border-style: dashed,
        $border-width: 2px,
        $border-radius: $measure,
        $hover-background-color: map-get($color-options, g),
        $hover-shadow: 0 0 16px 0 rgba(map-get($color-options, a), 0.5),
        $hover-title-color: map-get($color-options, b),
        $hover-transform: translateY(-5%),
        $link-class: g--link-01,
        $link-font: f,
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

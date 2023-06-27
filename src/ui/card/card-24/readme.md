# Card-24

## Layout

![alt text][card-24]

[card-24]: /src/img/global-components/card/card-24.jpg

## Html for a card

```html
<div class="g--card-24">
    <div class="g--card-24__hd">
        <p class="g--card-24__hd__meta">Lorem ipsum | Lorem ipsum</p>
        <p class="g--card-24__hd__author">By Author</p>
    </div>
    <p class="g--card-24__title">Card-24 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    <div class="g--card-24__list-group">
        <div class="g--card-24__list-group__list-item">Category</div>
        <div class="g--card-24__list-group__list-item">Category</div>
    </div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-24__link">This is a link</a>
</div>
```

## Editable variables

-   $author-font
-   $author-font-weight
-   $author-color
-   $hover-title-color
-   $hover-transform
-   $link-class
-   $link-font
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
.g--card-24 {
    @include make-card-24();
    @include make-card-24-modifier(
        // $author-font: f,
        // $author-font-weight: 400,
        // $author-color: map-get($color-options, a),
        // $hover-title-color: map-get($color-options, b),
        // $hover-transform: translateY(-5%),
        // $link-class: g--link-01,
        // $link-font: f,
        // $meta-color: map-get($color-options, a),
        // $meta-font: f,
        // $meta-font-weight: 400,
        // $pill-class: g--pill-01,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3
    );
}
```

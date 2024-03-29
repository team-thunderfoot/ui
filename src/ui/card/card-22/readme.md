# Card-22

## Layout

![alt text][card-22]

[card-22]: /src/img/global-components/card/card-22.jpg

## Html for a card

```html
<div class="g--card-22">
    <div class="g--card-22__hd">
        <p class="g--card-22__hd__meta">Lorem ipsum | Lorem ipsum</p>
        <p class="g--card-22__hd__author">By Author</p>
    </div>
    <p class="g--card-22__title">Card-22 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    <div class="g--card-22__list-group">
        <div class="g--card-22__list-group__list-item">Category</div>
        <div class="g--card-22__list-group__list-item">Category</div>
    </div>
</div>
```

## Editable variables

- $author-font
- $author-font-weight
- $author-color
- $hover-title-color
- $hover-title-underline-color
- $hover-transform
- $meta-color
- $meta-font
- $meta-font-weight
- $pill-class
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-22 {
    @include make-card-22();
    @include make-card-22-modifier(
        // $author-font: f,
        // $author-font-weight: 400,
        // $author-color: map-get($color-options, a),
        // $hover-title-color: map-get($color-options, b),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-5%),
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

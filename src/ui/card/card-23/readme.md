# Card-23

## Layout

![alt text][card-23]

[card-23]: /src/img/global-components/card/card-23.jpg

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

- $author-color
- $author-font
- $author-font-weight
- $background-color
- $border-color
- $border-radius
- $border-style
- $border-width
- $card-min-height
- $hover-background-color
- $hover-shadow
- $hover-title-color
- $hover-title-underline-color
- $hover-transform
- $link-class
- $link-font
- $meta-color
- $meta-font
- $meta-font-weight
- $pill-class
- $shadow
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-23 {
    @include make-card-23();
    @include make-card-23-modifier(
        // $author-color: map-get($color-options, a),
        // $author-font: f,
        // $author-font-weight: 400,
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: 0,
        // $border-style: solid,
        // $border-width: 1px,
        // $card-min-height: 500px,
        // $hover-background-color: map-get($color-options, g),
        // $hover-shadow: 0 0 16px 0 rgba(map-get($color-options, a), 0.5),
        // $hover-title-color: map-get($color-options, b),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-5%),
        // $link-class: g--link-01,
        // $link-font: f,
        // $meta-color: map-get($color-options, a),
        // $meta-font: f,
        // $meta-font-weight: 400,
        // $pill-class: g--pill-01,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3
    );
}
```

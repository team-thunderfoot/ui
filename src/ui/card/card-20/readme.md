# Card-20

## Layout

![alt text][card-20]

[card-20]: /src/img/global-components/card/card-20.jpg

## Html for a card

```html
<div class="g--card-20">
    <p class="g--card-20__meta">Lorem ipsum | Lorem ipsum</p>
    <p class="g--card-20__title">Card-20 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    <div class="g--card-20__list-group">
        <div class="g--card-20__list-group__list-item">Category</div>
        <div class="g--card-20__list-group__list-item">Category</div>
    </div>
</div>
```

## Editable variables

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
.g--card-20 {
    @include make-card-20();
    @include make-card-20-modifier($hover-title-color: map-get($color-options, b), $hover-transform: translateY(-5%), $meta-color: map-get($color-options, a), $meta-font: f, $meta-font-weight: 600, $pill-class: g--pill-01, $text-align: left, $title-color: map-get($color-options, a), $title-font: c, $title-font-weight: 600, $title-max-lines: 3);
}
```

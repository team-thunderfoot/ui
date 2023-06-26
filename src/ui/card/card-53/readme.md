# Card-53

## Layout

![alt text][card-53]

[card-53]: /src/img/global-components/card/card-53.jpg

## Html for a card

```html
<div class="g--card-53">
    <div
        class="g--card-53__bg-items"
        style="background-image: url(/src/img/global-components/slider/quotes.svg);"
    ></div>
    <div class="g--card-53__ft-items">
        <h3 class="g--card-53__ft-items__title">
            “Lorem ipsum dolor sit amet consectetur. Vulputate facilisi ultrices pellentesque elit
            vel sit eu nascetur vitae.”
        </h3>
        <p class="g--card-53__ft-items__author">Person Name</p>
        <p class="g--card-53__ft-items__subtitle">Job Position</p>
        <a href="" class="g--card-53__ft-items__link">This is a link</a>
    </div>
</div>
```

## Editable variables

-   $author-color
-   $author-font-weight
-   $author-font
-   $author-max-lines
-   $background-color
-   $background-position
-   $background-size
-   $hover-author-color
-   $hover-background-color
-   $hover-shadow
-   $hover-subtitle-color
-   $hover-title-color
-   $hover-transform
-   $link-class
-   $link-font
-   $mask-color
-   $subtitle-color
-   $subtitle-font-weight
-   $subtitle-font
-   $subtitle-max-lines
-   $text-align
-   $title-color
-   $title-font-weight
-   $title-font
-   $title-max-lines

## use

```scss
.g--card-53 {
    @include make-card-53();
    @include make-card-53-modifier(
        // $author-color: map-get($color-options, d),
        // $author-font-weight: 400,
        // $author-font: d,
        // $author-max-lines: false,
        // $background-color: map-get($color-options, a),
        // $background-position: -3% -28%,
        // $background-size: 20%,
        // $hover-author-color: map-get($color-options, g),
        // $hover-background-color: map-get($color-options, e),
        // $hover-shadow: 0 0 $measure * 4 map-get($color-options, a),
        // $hover-subtitle-color: map-get($color-options, g),
        // $hover-title-color: map-get($color-options, g),
        // $hover-transform: translateY(-$measure),
        // $link-class: g--link-01,
        // $link-font: f,
        // $mask-color: rgba(map-get($color-options, b), 0.5),
        // $subtitle-color: map-get($color-options, d),
        // $subtitle-font-weight: 400,
        // $subtitle-font: f,
        // $subtitle-max-lines: 2,
        // $text-align: center,
        // $title-color: map-get($color-options, d),
        // $title-font-weight: 400,
        // $title-font: b,
        // $title-max-lines: 3
    );
}
```

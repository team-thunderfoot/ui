# Cta-06

## Layout

![alt text][cta-06]

[cta-06]: /src/img/global-components/cta/cta-06.jpg

## Html

```html
<div class="g--cta-06">
    <div class="g--cta-06__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg"
            src="/src/img/global-components/placeholder.jpg"
            alt="img alt"
            class="g--cta-06__media-wrapper__media g--lazy-01 f--ar"
            width="1000"
            height="1000"
            style="aspect-ratio: 1000 / 1000"
        />
    </div>
    <div class="g--cta-06__wrapper">
        <h2 class="g--cta-06__wrapper__title">Cta 05 This is a card lorem ispum dolor sit</h2>
        <p class="g--cta-06__wrapper__subtitle">
            Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam
            consectetur pretium fringilla metus.
        </p>
        <a href="#" class="g--cta-06__wrapper__btn" target="_blank" rel="noopener noreferrer"
            >Contact Us</a
        >
    </div>
</div>
```

##### \*Aspect Ratio

For the image, we have to add width, height and aspect ratio dynamically.

## Editable variables

-   $background-color
-   $border-radius
-   $btn-class
-   $btn-font
-   $change-order-reponsive
-   $hide-img-reponsive
-   $hover-background-color
-   $hover-img-zoom
-   $hover-shadow
-   $hover-subtitle-color
-   $hover-title-color
-   $hover-transform
-   $img-position
-   $one-col-bkt
-   $subtitle-color
-   $subtitle-font
-   $subtitle-font-weight
-   $subtitle-max-lines
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## Use

To use it we have to import the css of the $btn-class in the entry

```scss
.g--cta-06 {
    @include make-cta-06();
    @include make-cta-06-modifier(
        // $background-color: map-get($color-options, h),
        // $border-radius: 90px,
        // $btn-class: g--btn-01,
        // $btn-font: d,
        // $change-order-reponsive: true,
        // $hide-img-reponsive: true,
        // $hover-background-color: map-get($color-options, g),
        // $hover-img-zoom: 1.1
        // $hover-shadow: 0 0 $measure * 2 map-get($color-options, h),
        // $hover-subtitle-color: map-get($color-options, a),
        // $hover-title-color: map-get($color-options, a),
        // $hover-transform: translateY(-$measure),
        // $img-position: center,
        // $one-col-bkt: $tabletm,
        // $subtitle-color: map-get($color-options, a),
        // $subtitle-font: f,
        // $subtitle-font-weight: 400,
        // $subtitle-max-lines: 1,
        // $text-align: left,
        // $title-color: map-get($color-options, b),
        // $title-font: c,
        // $title-font-weight: bold,
        // $title-max-lines: 1,
    );
}
```

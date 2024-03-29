# Cta-04

## Layout

![alt text][cta-04]

[cta-04]: /src/img/global-components/cta/cta-04.jpg

## Html

```html
<div
    class="g--cta-04"
    style="background-image: url(/src/img/global-components/bg-placeholder.jpg);"
>
    <h2 class="g--cta-04__title">CTA-04 This is the Contact call to action</h2>
    <div class="g--cta-04__subtitle c--content-a">
        <p>
            Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam
            consectetur pretium fringilla metus.
        </p>
    </div>
    <a href="#" class="g--cta-04__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
</div>
```

## Editable variables

-   $background-color
-   $background-position
-   $background-size
-   $border-color
-   $border-radius
-   $border-style
-   $border-width
-   $btn-class
-   $btn-font
-   $cta-min-height
-   $hover-background-color
-   $hover-background-img-zoom
-   $hover-border-color
-   $hover-border-radius
-   $hover-mask-color
-   $hover-shadow
-   $hover-subtitle-color
-   $hover-title-color
-   $hover-title-underline-color
-   $hover-transform
-   $mask-color
-   $shadow
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
.g--cta-04 {
    @include make-cta-04();
    @include make-cta-04-modifier(
        // $background-color: map-get($color-options, f),
        // $background-position: left top,
        // $background-size: cover,
        // $border-color: map-get($color-options, a),
        // $border-radius: 0,
        // $border-style: solid,
        // $border-width: 1px,
        // $btn-class: g--btn-01,
        // $btn-font: d,
        // $cta-min-height: 500px,
        // $hover-background-color: map-get($color-options, h),
        // $hover-background-img-zoom: 1.2,
        // $hover-border-color: map-get($color-options, f),
        // $hover-border-radius: $measure * 4,
        // $hover-mask-color: rgba(map-get($color-options, a), .5),
        // $hover-shadow: 0 0 $measure*2 map-get($color-options, h),
        // $hover-subtitle-color: map-get($color-options, c),
        // $hover-title-color: map-get($color-options, c),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $mask-color: rgba(map-get($color-options, a), .5),
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $subtitle-color: map-get($color-options, a),
        // $subtitle-font-weight: 400,
        // $subtitle-font: f,
        // $subtitle-max-lines: 1,
        // $text-align: left,
        // $title-color: map-get($color-options, b),
        // $title-font-weight: 400,
        // $title-font: c,
        // $title-max-lines: 3,
    );
}
```

# Cta-08

## Layout

![alt text][cta-08]

[cta-08]: /src/img/global-components/cta/cta-08.jpg

## Html

```sh
<section class="g--cta-08">
    <h2 class="g--cta-08__title">CTA-08 This is the Contact call to action</h2>
    <div class="g--cta-08__subtitle c--content-a">
        <p>Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    </div>
    <div class="g--cta-08__wrapper">
        <a href="#" class="g--cta-08__wrapper__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
    </div>
</section>
```

## Editable variables

-   $background-color
-   $border-color
-   $border-radius
-   $border-style
-   $border-width
-   $btn-child
-   $btn-child-class
-   $btn-child-font
-   $btn-class
-   $btn-font
-   $cta-min-height
-   $hover-background-color
-   $hover-border-color
-   $hover-border-radius
-   $hover-shadow
-   $hover-subtitle-color
-   $hover-title-color
-   $hover-title-underline-color
-   $hover-transform
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
.g--cta-08 {
    @include make-cta-08();
    @include make-cta-08-modifier(
        // $background-color: lighten(map-get($color-options, a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: 0,
        // $border-style: solid,
        // $border-width: 1px,
        // $btn-child-class: g--btn-01--second,
        // $btn-child-font: c,
        // $btn-child: 2,
        // $btn-class: g--btn-01,
        // $btn-font: g,
        // $cta-min-height: 300px,
        // $hover-background-color: map-get($color-options, h),
        // $hover-border-color: map-get($color-options, f),
        // $hover-border-radius: $measure * 4,
        // $hover-shadow: 0 0 $measure * 4 map-get($color-options, a),
        // $hover-subtitle-color: map-get($color-options, f),
        // $hover-title-color: map-get($color-options, f),
        // $hover-title-underline-color: map-get($color-options, f),
        // $hover-transform: translateY(-$measure),
        // $shadow: 0 0 $measure * 2 map-get($color-options, g),
        // $subtitle-color: map-get($color-options, a),
        // $subtitle-font-weight: 400,
        // $subtitle-font: d,
        // $subtitle-max-lines: 2,
        // $text-align: center,
        // $title-color: map-get($color-options, a),
        // $title-font-weight: bold,
        // $title-font: b,
        // $title-max-lines: 3
    );
}
```

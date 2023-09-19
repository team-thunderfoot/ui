# Cta-03

## Layout

![alt text][cta-03]

[cta-03]: /src/img/global-components/cta/cta-03.jpg

## Html

```html
<div class="g--cta-03">
    <h2 class="g--cta-03__title">CTA-03 This is the Contact call to action</h2>
    <div class="g--cta-03__subtitle c--content-a">
        <p>
            Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam
            consectetur pretium fringilla metus.
        </p>
    </div>
    <a href="#" class="g--cta-03__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
</div>
```

## Editable variables

-   $background-color
-   $border-color
-   $border-radius
-   $border-style
-   $border-width
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
.g--cta-03 {
    @include make-cta-03();
    @include make-cta-03-modifier(
        // $background-color: rgba(map-get($color-options, a), .5),
        // $border-color: map-get($color-options, a),
        // $border-radius: 0,
        // $border-style: solid,
        // $border-width: 1px,
        // $btn-class: g--btn-02,
        // $btn-font: d,
        // $cta-min-height: 500px,
        // $hover-background-color: map-get($color-options, h),
        // $hover-border-color: map-get($color-options, f),
        // $hover-border-radius: $measure * 4,
        // $hover-shadow: 0 0 $measure*2 map-get($color-options, h),
        // $hover-subtitle-color: map-get($color-options, c),
        // $hover-title-color: map-get($color-options, e),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $subtitle-color: map-get($color-options, a),
        // $subtitle-font-weight: 600,
        // $subtitle-font: f,
        // $subtitle-max-lines: 2,
        // $text-align: left,
        // $title-color: map-get($color-options, b),
        // $title-font-weight: 400,
        // $title-font: c,
        // $title-max-lines: 3,
    );
}
```

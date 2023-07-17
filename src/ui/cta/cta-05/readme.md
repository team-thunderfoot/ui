# Cta-05

## Layout

![alt text][cta-05]

[cta-05]: /src/img/global-components/cta/cta-05.jpg

## Html

```html
<div class="g--cta-05">
    <div class="g--cta-05__wrapper">
        <h2 class="g--cta-05__wrapper__title">Card 50 This is a card lorem ispum dolor sit</h2>
        <p class="g--cta-05__wrapper__subtitle">
            Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam
            consectetur pretium fringilla metus.
        </p>
        <a href="#" class="g--cta-05__wrapper__btn" target="_blank" rel="noopener noreferrer"
            >Contact Us</a
        >
    </div>
    <div class="g--cta-05__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg"
            src="/src/img/global-components/placeholder.jpg"
            alt="img alt"
            class="g--cta-05__media-wrapper__media g--lazy-01 f--ar"
            width="1000"
            height="1000"
            style="aspect-ratio: 1000 / 1000"
        />
    </div>
</div>
```

##### \*Aspect Ratio

For the image, we have to add width, height and aspect ratio dynamically.

## Editable variables

- $background-color
- $border-radius
- $btn-class
- $btn-font
- $change-order-reponsive
- $cta-min-height
- $hide-img-reponsive
- $hover-background-color
- $hover-img-zoom
- $hover-shadow
- $hover-subtitle-color
- $hover-title-color
- $hover-title-underline-color
- $hover-transform
- $img-position
- $one-col-bkt
- $shadow
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $subtitle-max-lines
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

To use it we have to import the css of the $btn-class in the entry

```scss
.g--cta-05 {
    @include make-cta-05();
    @include make-cta-05-modifier(
        // $background-color: map-get($color-options, f),
        // $border-radius: 25px,
        // $btn-class: g--btn-02,
        // $btn-font: d,
        // $change-order-reponsive: true,
        // $cta-min-height: 500px,
        // $hide-img-reponsive: true,
        // $hover-background-color: map-get($color-options, e),
        // $hover-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure*2 map-get($color-options, h),
        // $hover-subtitle-color: map-get($color-options, a),
        // $hover-title-color: map-get($color-options, a),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-position: center,
        // $one-col-bkt: $tablets,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $subtitle-color: map-get($color-options, a),
        // $subtitle-font: f,
        // $subtitle-font-weight: 400,
        // $subtitle-max-lines: 1,
        // $title-color: map-get($color-options, b),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
        // $text-align: left,
    );
}
```

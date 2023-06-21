# Cta-06

## Layout

![alt text][cta-06]

[cta-06]: /src/img/global-components/cta/cta-06.jpg

## Html

```html
<div class="g--cta-06">
    <div class="g--cta-06__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="img alt" class="g--cta-06__media-wrapper__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
    </div>
    <div class="g--cta-06__wrapper">
        <h2 class="g--cta-06__wrapper__title">Cta 05 This is a card lorem ispum dolor sit</h2>
        <p class="g--cta-06__wrapper__subtitle">Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        <a href="#" class="g--cta-06__wrapper__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
    </div>
</div>
```

##### \*Aspect Ratio

For the image, we have to add width, height and aspect ratio dynamically.

## Editable variables

- $background-color
- $hover-background-color
- $btn-class
- $btn-font
- $border-radius
- $subtitle-color
- $hover-subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $subtitle-max-lines
- $title-color
- $hover-title-color
- $title-font
- $title-font-weight
- $title-max-lines
- $text-align
- $one-col-bkt
- $change-order-reponsive
- $hide-img-reponsive
- $img-position
- $hover-shadow
- $hover-transform
- $hover-img-zoom

## Use

To use it we have to import the css of the $btn-class in the entry

```scss
.g--cta-06{
    @include make-cta-06();
    @include make-cta-06-modifier(
        $background-color: map-get($color-options, h),
        $hover-background-color: map-get($color-options, g),
        $btn-class: g--btn-01,
        // $btn-font: ,
        $border-radius: 90px,
        $subtitle-color: map-get($color-options, a),
        $hover-subtitle-color: map-get($color-options, a),
        $subtitle-font: f,
        // $subtitle-font-weight: ,
        $subtitle-max-lines: 1,
        $title-color: map-get($color-options, b),
        $hover-title-color: map-get($color-options, a),
        $title-font: d,
        $title-font-weight: bold,
        $title-max-lines: 1,
        //$text-align: left,
        $one-col-bkt: $tabletm,
        $change-order-reponsive: true,
        // $hide-img-reponsive: ,
        $img-position: center,
        $hover-shadow: 0 0 $measure*2 map-get($color-options, h),
        $hover-transform: translateY(-$measure),
        $hover-img-zoom: 1.1,
    );
}
```

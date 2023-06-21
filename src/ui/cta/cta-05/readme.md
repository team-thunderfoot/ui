# Cta-05

## Layout

![alt text][cta-05]

[cta-05]: /src/img/global-components/cta/cta-05.jpg

## Html

```html
<div class="g--cta-05">
    <div class="g--cta-05__wrapper">
        <h2 class="g--cta-05__wrapper__title">Card 50 This is a card lorem ispum dolor sit</h2>
        <p class="g--cta-05__wrapper__subtitle">Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        <a href="#" class="g--cta-05__wrapper__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
    </div>
    <div class="g--cta-05__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="img alt" class="g--cta-05__media-wrapper__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
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
.g--cta-05{
    @include make-cta-05();
    @include make-cta-05-modifier(
        $background-color: map-get($color-options, f),
        $hover-background-color: map-get($color-options, e),
        $btn-class: g--btn-02,
        // $btn-font: ,
        $border-radius: 25px,
        $subtitle-color: map-get($color-options, b),
        $hover-subtitle-color: map-get($color-options, a),
        $subtitle-font: f,
        // $subtitle-font-weight: ,
        $subtitle-max-lines: 1,
        $title-color: map-get($color-options, b),
        $hover-title-color: map-get($color-options, a),
        $title-font: d,
        // $title-font-weight: ,
        // $title-max-lines: ,
        // $text-align: ,
        $one-col-bkt: $tablets,
        // $change-order-reponsive: ,
        // $hide-img-reponsive: ,
        $img-position: center,
        $hover-shadow: 0 0 $measure*2 map-get($color-options, h),
        $hover-transform: translateY(-$measure),
        $hover-img-zoom: 1.2,
    );
}
```

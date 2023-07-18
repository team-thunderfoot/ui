# Cta-09

## Layout

![alt text][cta-09]

[cta-09]: /src/img/global-components/cta/cta-09.jpg

## Html

```sh
<section class="g--cta-09">
    <div class="g--cta-09__bg-items" style="background-image: url(/src/img/global-components/bg-placeholder.jpg)"></div>
    <div class="g--cta-09__ft-items">
        <h2 class="g--cta-09__ft-items__title">CTA-09 This is the Contact call to action</h2>
        <div class="g--cta-09__ft-items__subtitle c--content-a">
            <p>Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        </div>
        <div class="g--cta-09__ft-items__wrapper">
            <a href="#" class="g--cta-09__ft-items__wrapper__btn" target="_blank" rel="noopener noreferrer">Contact Us
            </a>
            <a href="#" class="g--cta-09__ft-items__wrapper__btn" target="_blank" rel="noopener noreferrer">Contact Us
            </a>
        </div>
    </div>
</section>
```

## Editable variables

-   $background-color
-   $background-position
-   $background-size
-   $border-radius
-   $btn-child-class
-   $btn-child-font
-   $btn-child
-   $btn-class
-   $btn-font
-   $cta-min-height
-   $hover-background-img-zoom
-   $hover-mask-color
-   $hover-shadow
-   $hover-subtitle-color
-   $hover-title-color
-   $hover-title-underline-color
-   $hover-transform
-   $mask-color
-   $shadow
-   $subtitle-color
-   $subtitle-font-weight
-   $subtitle-font
-   $subtitle-max-lines
-   $text-align
-   $title-color
-   $title-font-weight
-   $title-font
-   $title-max-lines

## Use

To use it we have to import the css of the $btn-class in the entry

```scss
.g--cta-09 {
    @include make-cta-09();
    @include make-cta-09-modifier(
        $background-color: linear-gradient(226deg, #e0ff4f 0%, #36ba9f 100%),
        $background-position: left top,
        $background-size: cover,
        $border-radius: 4px,
        $btn-child-class: g--btn-01--second,
        $btn-child-font: c,
        $btn-child: 2,
        $btn-class: g--btn-01,
        $btn-font: g,
        $cta-min-height: 300px,
        $hover-background-img-zoom: 1.5,
        $hover-mask-color: rgba(map-get($color-options, a), 0.5),
        $hover-shadow: 0 0 $measure * 4 map-get($color-options, a),
        $hover-subtitle-color: map-get($color-options, f),
        $hover-title-color: map-get($color-options, f),
        $hover-title-underline-color: map-get($color-options, f),
        $hover-transform: translateY(-$measure),
        $mask-color: rgba(map-get($color-options, a), 0.1),
        $shadow: 0 0 $measure * 2 map-get($color-options, g),
        $subtitle-color: map-get($color-options, a),
        $subtitle-font-weight: 400,
        $subtitle-font: d,
        $subtitle-max-lines: 2,
        $text-align: center,
        $title-color: map-get($color-options, a),
        $title-font-weight: bold,
        $title-font: b,
        $title-max-lines: 3
    );
}
```

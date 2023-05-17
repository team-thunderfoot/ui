# Cta-04

## Layout

![alt text][cta-04]

[cta-04]: /src/img/global-components/cta/cta-04.jpg

## Html

```sh
<div class="g--cta-04" style="background-image: url(/src/img/global-components/card/card-bg-placeholder.jpg);">
    <h2 class="g--cta-04__title">CTA-04 This is the Contact call to action</h2>
    <div class="g--cta-04__subtitle c--content-a">
        <p>Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    </div>
    <a href="#" class="g--cta-04__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
</div>
```

## Editable variables

- $background-color,
- $hover-background-color,
- $background-position,
- $background-size,
- $btn-class,
- $btn-font,
- $border-radius,
- $mask-color,
- $subtitle-color,
- $hover-subtitle-color,
- $subtitle-font,
- $subtitle-font-weight,
- $subtitle-max-lines,
- $title-color,
- $hover-title-color,
- $title-font,
- $title-font-weight,
- $title-max-lines,
- $text-align,
- $hover-shadow,
- $hover-transform,

## Use

To use it we have to import the css of the $btn-class in the entry

```sh
.g--cta-04{
    @include make-cta-04();
    @include make-cta-04-modifier(
        // $background-color: false,
        // $hover-background-color: false,
        $background-position: left top,
        $background-size: cover,
        $btn-class: g--btn-01,
        // $btn-font: false,
        $border-radius: 90px,
        $mask-color: rgba(map-get($color-options, a), .5),
        $subtitle-color: map-get($color-options, b),
        $hover-subtitle-color: map-get($color-options, c),
        $subtitle-font: d,
        // $subtitle-font-weight: false,
        $subtitle-max-lines: 1,
        $title-color: map-get($color-options, b),
        $hover-title-color: map-get($color-options, c),
        $title-font: b,
        // $title-font-weight: false,
        // $title-max-lines: false,
        $text-align: center,
        $hover-shadow: 0 0 $measure*2 map-get($color-options, h),
        $hover-transform: translateY(-$measure),
    );
}
```

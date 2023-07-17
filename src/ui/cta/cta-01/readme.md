# Cta-01

## Layout

![alt text][cta-01]

[cta-01]: /src/img/global-components/cta/cta-01.jpg

## Html

```sh
<section class="g--cta-01">
    <h2 class="g--cta-01__title">CTA-01 This is the Contact call to action</h2>
    <a href="#" class="g--cta-01__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
</section>
```

## Editable variables

- $background-color
- $border-radius
- $btn-class
- $btn-font
- $cta-min-height
- $hover-background-color
- $hover-shadow
- $hover-title-color
- $hover-title-underline-color
- $hover-transform
- $shadow
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

To use it we have to import the css of the $btn-class in the entry

```scss
.g--cta-01 {
    @include make-cta-01();
    @include make-cta-01-modifier(
        // $background-color: lighten(map-get($color-options, a), 82%),
        // $border-radius: $measure*2,
        // $btn-class: g--btn-01,
        // $btn-font: d,
        // $cta-min-height: 500px,
        // $hover-background-color: map-get($color-options, h),
        // $hover-shadow: 0 0 $measure * 2 map-get($color-options, h),
        // $hover-title-color: map-get($color-options, e),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
    );
}
```

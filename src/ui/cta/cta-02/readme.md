# Cta-02

## Layout

![alt text][cta-02]

[cta-02]: /src/img/global-components/cta/cta-02.jpg

## Html

```html
<section
    class="g--cta-02"
    style="background-image: url(/src/img/global-components/bg-placeholder.jpg);"
>
    <h2 class="g--cta-02__title">CTA-02 This is the Contact call to action</h2>
    <a href="#" class="g--cta-02__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
</section>
```

## Editable variables

- $background-color
- $background-position
- $background-size
- $btn-class
- $btn-font
- $cta-min-height
- $hover-background-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-title-underline-color
- $hover-transform
- $mask-color
- $shadow
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

To use it we have to import the css of the $btn-class in the entry

```scss
.g--cta-02 {
    @include make-cta-02();
    @include make-cta-02-modifier(
        // $background-color: map-get($color-options, f),
        // $background-position: center,
        // $background-size: cover,
        // $btn-class: g--btn-02,
        // $btn-font: d,
        // $cta-min-height: 500px,
        // $hover-background-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure * 2 map-get($color-options, h),
        // $hover-title-color: map-get($color-options, a),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $mask-color: rgba(map-get($color-options, a), 0.5),
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $title-color: map-get($color-options, b),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
        // $text-align: left,
    );
}
```

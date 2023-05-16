# Cta-02

## Layout

![alt text][cta-02]

[cta-02]: /src/img/global-components/cta/cta-02.jpg

## Html

```sh
<section class="g--cta-02" style="background-image: url(/src/img/global-components/card/card-bg-placeholder.jpg);">
    <h2 class="g--cta-02__title">CTA-02 This is the Contact call to action</h2>
    <a href="#" class="g--cta-02__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
</section>
```

## Editable variables

- $background-color,
- $hover-background-color,
- $background-position,
- $background-size,
- $btn-class,
- $btn-font,
- $mask-color,
- $title-color,
- $hover-title-color,
- $btn-class-modifier,
- $text-align,
- $title-font,
- $title-font-weight,
- $hover-shadow,
- $hover-transform,
- $title-max-lines,

## Use

To use it we have to import the css of the $btn-class in the entry

```sh
.g--cta-02{
    @include make-cta-02();
    @include make-cta-02-modifier(
        // $background-color: false,
        // $hover-background-color: false,
        $background-position: center,
        $background-size: cover,
        $btn-class: g--btn-02,
        // $btn-font: false,
        $mask-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, b),
        $hover-title-color: map-get($color-options, a),
        // $text-align: false,
        $title-font: b,
        // $title-font-weight: false,
        // $hover-shadow: false,
        // $hover-transform: false,
        // $title-max-lines: false,
    );
}
```

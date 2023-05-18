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
- $hover-background-color
- $btn-class
- $btn-font
- $title-color
- $hover-title-color
- $title-font
- $title-font-weight
- $title-max-lines
- $text-align
- $hover-shadow
- $hover-transform

## Use

To use it we have to import the css of the $btn-class in the entry

```sh
.g--cta-01{
    @include make-cta-01();
    @include make-cta-01-modifier(
        $background-color: map-get($color-options, e),
        $hover-background-color: map-get($color-options, h),
        $btn-class: g--btn-01,
        // $btn-font: false,
        $title-color: map-get($color-options, a),
        $hover-title-color: map-get($color-options, e),
        $title-font: b,
        // $title-font-weight: false,
        // $title-max-lines: false,
        // $text-align: false,
        $hover-shadow: 0 0 $measure*2 map-get($color-options, h),
        $hover-transform: translateY(-$measure),
    );
}
```

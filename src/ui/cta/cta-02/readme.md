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

- $background-position
- $background-size
- $btn-class
- $btn-class-modifier: false by default
- $mask-color
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default

### For Modifiers

- $btn-class-modifier
- $mask-color
- $text-align
- $title-color

## Use

To use it we have to import the css of the $btn-class in the entry

```sh
.g--cta-02{
    @include make-cta-02(
        $background-size: cover,
        $background-position: center,
        $title-font: b,
        $btn-class: g--btn-02,
        // $title-font-weight: default,
    );
    @include make-cta-02-modifier(
        $mask-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, b),
        // $btn-class-modifier: default
    );
}
```

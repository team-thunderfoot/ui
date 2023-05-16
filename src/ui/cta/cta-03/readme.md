# Cta-03

## Layout

![alt text][cta-03]

[cta-03]: /src/img/global-components/cta/cta-03.jpg

## Html

```sh
<div class="g--cta-03">
    <h2 class="g--cta-03__title">CTA-03 This is the Contact call to action</h2>
    <div class="g--cta-03__subtitle c--content-a">
        <p>Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    </div>
    <a href="#" class="g--cta-03__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
</div>
```

## Editable variables

- $background-color,
- $hover-background-color,
- $btn-class,
- $btn-font,
- $border-radius,
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
.g--cta-03{
    @include make-cta-03();
    @include make-cta-03-modifier(
        $background-color: rgba(map-get($color-options, a), .5),
        // $hover-background-color: false,
        $btn-class: g--btn-02,
        // $btn-font: false,
        // $border-radius: false,
        $subtitle-color: map-get($color-options, b),
        // $hover-subtitle-color: false,
        $subtitle-font: d,
        // $subtitle-font-weight: false,
        // $subtitle-max-lines: false,
        $title-color: map-get($color-options, b),
        // $hover-title-color: false,
        $title-font: b,
        // $title-font-weight: false,
        // $title-max-lines: false,
        $text-align: left,
        // $hover-shadow: false,
        // $hover-transform: false,
    );

    @include make-cta-03-modifier(
        $btn-class: g--btn-02--second,
    );
}
```

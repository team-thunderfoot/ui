# Cta-03

## layout

![alt text][cta-03]

[cta-03]: /src/img/global-components/cta/cta-03.jpg

## Html

```sh
<div class="g--cta-03">
    <h2 class="g--cta-03__title">CTA-03 This is the Contact call to action</h2>
    <p class="g--cta-03__subtitle">Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    <a href="#" class="g--cta-03__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
</div>
```

## Editable variables

- $border-radius: false by default
- $title-font
- $subtitle-font
- $btn-class
- $background-color
- $text-align: false by default
- $title-color
- $subtitle-color,
- $btn-class-modifier: false by default

### For Modifiers

- $background-color
- $text-align
- $title-color
- $subtitle-color,
- $btn-class-modifier: false by default

## Use
To use it we have to import the css of the $btn-class in the entry

```sh
.g--cta-03{
    @include make-cta-03(
        // $border-radius: default,
        $title-font: b,
        $subtitle-font: d,
        $btn-class: g--btn-02,
    );
    @include make-cta-03-modifier(
        $background-color: rgba(map-get($color-options, a), .5),
        // $text-align: default,
        $title-color: map-get($color-options, b),
        $subtitle-color: map-get($color-options, b),
        // $btn-class-modifier: default
    );
}
```
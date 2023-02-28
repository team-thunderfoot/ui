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

- $border-radius: false by default
- $background-position
- $background-size
- $btn-class
- $mask-color
- $text-align: false by default
- $title-color
- $subtitle-color
- $btn-class-modifier: false by default
- $subtitle-font: false by default
- $subtitle-font-weight: false by default
- $title-font: false by default
- $title-font-weight: false by default

### For Modifiers

- $mask-color
- $text-align
- $subtitle-color
- $title-color
- $btn-class-modifier
- $subtitle-font
- $subtitle-font-weight
- $title-font
- $title-font-weight

## Use

To use it we have to import the css of the $btn-class in the entry

```sh
.g--cta-04{
    @include make-cta-04(
        // $border-radius: default,
        $background-position: left top,
        $background-size: cover,
        $btn-class: g--btn-01,
    );
    @include make-cta-04-modifier(
        $mask-color: rgba(map-get($color-options, a), .5),
        // $text-align: default,
        $subtitle-color: map-get($color-options, b),
        $title-color: map-get($color-options, b),
        // $btn-class-modifier: default,
        // $subtitle-font: default,
        // $subtitle-font-weight: default,
        // $title-font: default,
        // $title-font-weight: default,
    );
}
```

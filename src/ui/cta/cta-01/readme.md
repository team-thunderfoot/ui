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
- $btn-class
- $btn-class-modifier: false by default
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default

### For Modifiers

- $background-color
- $btn-class-modifier
- $text-align
- $title-color

## Use

To use it we have to import the css of the $btn-class in the entry

```sh
.g--cta-01{
    @include make-cta-01(
        $title-font: b,
        $btn-class: g--btn-02,
        // $title-font-weight: default,
    );
    @include make-cta-01-modifier(
        $title-color: map-get($color-options, a),
        $background-color: map-get($color-options, e),
        // $btn-class-modifier: default,
        // $text-align: default
    );
}
```

# Cta-05

## Layout

![alt text][cta-05]

[cta-05]: /src/img/global-components/cta/cta-05.jpg

## Html

```sh
<div class="g--cta-05">
    <div class="g--cta-05__wrapper">
        <h2 class="g--cta-05__wrapper__title">Card 50 This is a card lorem ispum dolor sit</h2>
        <p class="g--cta-05__wrapper__subtitle">Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        <a href="#" class="g--cta-05__wrapper__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
    </div>
    <div class="g--cta-05__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="img alt" class="g--cta-05__media-wrapper__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
    </div>
</div>
```

##### \*Aspect Ratio

For the image, we have to add width, height and aspect ratio dynamically.

## Editable variables

- $border-radius: false by default
- $title-font: false by default
- $subtitle-font: false by default
- $btn-class
- $background-color: false by default
- $text-align: false by default
- $title-color
- $subtitle-color
- $btn-class-modifier: false by default
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For Modifiers

- $background-color
- $text-align
- $title-color
- $subtitle-color
- $btn-class-modifier
- $subtitle-font
- $subtitle-font-weight
- $title-font
- $title-font-weight

## Use

To use it we have to import the css of the $btn-class in the entry

```sh
.g--cta-05{
    @include make-cta-05(
        // $border-radius: default,
        $btn-class: g--btn-02,
    );
    @include make-cta-05-modifier(
        // $background-color: default,
        // $text-align: default,
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
        // $btn-class-modifier: default,
        // $title-font: default,
        // $subtitle-font: default,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
    );
}
```
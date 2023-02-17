# Card-32

## Layout

![alt text][card-32]

[card-32]: /src/img/global-components/card/card-32.png

## Html for a card

```sh
<div class="g--card-32" style="background-image: url(/src/img/global-components/card/card-bg-placeholder.jpg);">
    <div class="g--card-32__wrapper">
    <h3 class="g--card-32__wrapper__title">Card 32</h3>
    <p class="g--card-32__wrapper__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-32__wrapper__link">This is a link</a>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-position
- $background-size
- $border-radius: false by default
- $link-class
- $link-class-modifier: false by default
- $mask-color
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight: false by default

### For modifiers

- $link-class-modifier
- $mask-color
- $text-align
- $title-color
- $subtitle-color

## use

```sh
.g--card-32{
    @include make-card-32(
        $link-class: g--link-01,
        $background-size: cover,
        $background-position: center,
        $title-font: e,
        $subtitle-font: f
        // $border-radius: default,
        // $title-font-weight: default,
        // $subtitle-font-weight: default
    );
    @include make-card-32-modifier(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
        //$link-class-modifier: default
        // $text-align: default
    );
}
```

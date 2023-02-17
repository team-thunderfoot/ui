# Card-28

## Layout

![alt text][card-28]

[card-28]: /src/img/global-components/card/card-28.png

## Html for a card

```sh
<div class="g--card-28" style="background-image: url(/src/img/global-components/card/card-bg-placeholder.jpg);">
    <div class="g--card-28__wrapper">
    <h3 class="g--card-28__wrapper__title">Card 28</h3>
    <p class="g--card-28__wrapper__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-position
- $background-size
- $border-radius: false by default
- $mask-color
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight: false by default

### For modifiers

- $mask-color
- $text-align
- $title-color
- $subtitle-color

## use

```sh
.g--card-28{
    @include make-card-28(
        $background-size: cover,
        $background-position: center,
        $title-font: e,
        $subtitle-font: f
        // $border-radius: default,
        // $title-font-weight: default,
        // $subtitle-font-weight: default
    );
    @include make-card-28-modifier(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
        // $text-align: default
    );
}
```

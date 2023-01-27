# Card-04

## Layout

![alt text][card-04]

[card-04]: /src/img/global-components/card/card-04.png

## Html for a card

```sh
<div class="g--card-04" style="background-image: url(/src/img/global-components/card/card-bg-placeholder.jpg);">
    <div class="g--card-04__wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-04__wrapper__media g--lazy-01">
        <h3 class="g--card-04__wrapper__title">Card 04</h3>
        <p class="g--card-04__wrapper__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
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
- $subtitle-color
- $subtitle-font
- $text-align: false by default
- $title-color
- $title-font

### For modifiers

- $subtitle-color
- $title-color

## Use

```sh
.g--card-04{
    @include make-card-04(
        $background-size: cover,
        $background-position: center,
        $title-font: c,
        $subtitle-font: f,
    );
    @include make-card-04-color(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

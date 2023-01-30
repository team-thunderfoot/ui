# Card-01

## Layout

![alt text][card-01]

[card-01]: /src/img/global-components/card/card-01.png

## Html for a card

```sh
<div class="g--card-01">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-01__media g--lazy-01">
    <h3 class="g--card-01__title">Card 01</h3>
    <p class="g--card-01__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color
- $border-radius: false by default
- $subtitle-color
- $subtitle-font
- $text-align: false by default
- $title-color
- $title-font

### For modifiers

- $background-color
- $subtitle-color
- $text-align
- $title-color

## Use

```sh
.g--card-01{
    @include make-card-01(
        $title-font: b,
        $subtitle-font: d,
        // $border-radius: default,
        // $text-align: default
    );
    @include make-card-01-modifier(
        $background-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
        // $text-align: default
    );
}
```

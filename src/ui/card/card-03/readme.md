# Card-03

## Layout

![alt text][card-03]

[card-03]: /src/img/global-components/card/card-03.png

## Html for a card

```sh
<div class="g--card-03">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-03__media g--lazy-01">
    <h3 class="g--card-03__title">Card 03</h3>
    <p class="g--card-03__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $subtitle-color
- $subtitle-font
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For modifiers

- $subtitle-color
- $text-align
- $title-color

## Use

```sh
.g--card-03{
    @include make-card-03(
        $subtitle-font: f,
        $title-font: c,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
    );
    @include make-card-03-modifier(
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $text-align: default
    );
}
```

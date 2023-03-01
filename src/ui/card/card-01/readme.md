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

If you want the subtitle to be a c--content, the HTML should be:
```sh
<div class="g--card-01">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-01__media g--lazy-01">
    <h3 class="g--card-01__title">Card 01</h3>
    <div class="g--card-01__subtitle c--content-a"></div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color
- $border-radius: false by default
- $subtitle-color
- $subtitle-font: false by default
- $subtitle-font-weight: false by default
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default

### For modifiers

- $background-color
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $text-align
- $title-color
- $title-font
- $title-font-weight

## Use

```sh
.g--card-01{
    @include make-card-01(
        // $border-radius: default,
    );
    @include make-card-01-modifier(
        $background-color: rgba(map-get($color-options, a), .5),
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $text-align: default,
        // $subtitle-font: default,
        // $subtitle-font-weight: default,
        // $title-font: default,
        // $title-font-weight: default,
    );
}
```

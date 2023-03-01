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

If you want the subtitle to be a c--content, the HTML should be:
```sh
<div class="g--card-03">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-03__media g--lazy-01">
    <h3 class="g--card-03__title">Card 03</h3>
    <div class="g--card-03__subtitle c--content-a"></div>
</div>

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $subtitle-color
- $subtitle-font: false by default
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For modifiers

- $subtitle-color
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $subtitle-font
- $subtitle-font-weight

## Use

```sh
.g--card-03{
    @include make-card-03();
    @include make-card-03-modifier(
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $text-align: default,
        // $subtitle-font: default,
        // $title-font: default,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
    );
}
```

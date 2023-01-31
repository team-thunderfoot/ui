# Card-02

## Layout

![alt text][card-02]

[card-02]: /src/img/global-components/card/card-02.png

## Html for a card

```sh
<div class="g--card-02">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-02__media g--lazy-01">
    <h3 class="g--card-02__title">Card 02</h3>
    <p class="g--card-02__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color: false by default
- $border-color
- $border-radius: false by default
- $border-width
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
.g--card-2{
    @include make-card-02(
        $border-width: 1px,
        $title-font: b,
        $subtitle-font: d,
        // $border-radius: default,
    );
    @include make-card-02-modifier(
        $border-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
        // $background-color: default,
        // $text-align: default
    );
}
```

# Card-10

## Layout

![alt text][card-10]

[card-10]: /src/img/global-components/card/card-10.png

## Html for a card

```sh
<div class="g--card-10">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-10__media g--lazy-01">
    <h3 class="g--card-10__title">Card 10</h3>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color: false by default
- $border-color
- $border-radius: false by default
- $border-width
- $text-align: false by default
- $title-color
- $title-font

### For modifiers

- $background-color
- $text-align
- $title-color

## Use

```sh
.g--card-10{
    @include make-card-10(
        $border-width: 1px,
        $title-font: c,
        // $border-radius: default,
    );
    @include make-card-10-modifier(
        $border-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $background-color: default,
        // $text-align: default
    );
}
```

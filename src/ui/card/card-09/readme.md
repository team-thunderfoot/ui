# Card-09

## Layout

![alt text][card-09]

[card-09]: /src/img/global-components/card/card-09.png

## Html for a card

```sh
<div class="g--card-09">
    <img src="./img/global-components/card/card-img-placeholder.png" alt="" class="g--card-09__media">
    <h3 class="g--card-09__title">Card 9</h3>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color
- $border-radius: false by default
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default

### For modifiers

- $background-color
- $text-align
- $title-color
- $title-font
- $title-font-weight

## Use

```sh
.g--card-09{
    @include make-card-09(
        // $border-radius: default,
    );
    @include make-card-09-modifier(
        $background-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, a),
        // $text-align: default,
        // $title-font: default,
        // $title-font-weight: default,
    );
}
```

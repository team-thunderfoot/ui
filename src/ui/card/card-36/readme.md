# Card-36

## Layout

![alt text][card-36]

[card-36]: /src/img/global-components/card/card-36.png

## Html for a card

```sh
<div class="g--card-36">
    <div class="g--card-36__wrapper">
    <p class="g--card-36__wrapper__meta">
        Jan 5, 2023
    </p>
    <p class="g--card-36__wrapper__title">
        Card 36 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.
    </p>
    <div class="g--card-36__wrapper__pill">Category</div>
    <div class="g--card-36__wrapper__pill">Category</div>
    </div>
</div>
```

## Editable variables

- $background-color
- $background-color-hover
- $border-radius: false by default
- $pill-class
- $pill-class-modifier: false by default
- $meta-color
- $meta-font
- $text-align: false by default
- $title-color
- $title-color-hover
- $title-font

### For modifiers

- $background-color
- $background-color-hover
- $pill-class-modifier: false by default
- $meta-color
- $text-align
- $title-color
- $title-color-hover

## use

```sh
.g--card-36 {
    @include make-card-36(
        $meta-font: g,
        $title-font: f,
        $pill-class: g--pill-01,
        // $border-radius: default
    );
    @include make-card-36-modifier(
        $background-color: map-get($color-options, e),
        $meta-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $title-color-hover: default,
        // $background-color-hover: default
        // $pill-class-modifier: default,
        // $text-align: default
    );
}
```

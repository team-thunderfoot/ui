# Card-25

## Layout

![alt text][card-25]

[card-25]: /src/img/global-components/card/card-25.png

## Html for a card

```sh
<div class="g--card-25">
    <h3 class="g--card-25__title">Card 25</h3>
    <p class="g--card-25__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

## Editable variables

- $background-color
- $subtitle-color
- $subtitle-font
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default
- $subtitle-font-weight: false by default
- $border-radius: false by default

### For modifiers

- $background-color
- $subtitle-color
- $text-align
- $title-color

## Use

```sh
.g--card-25{
    @include make-card-25(
        $subtitle-font: f,
        $title-font: c,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
        // $border-radius: default,
    );
    @include make-card-25-modifier(
        $background-color: transparent,
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $text-align: default
    );
}
```

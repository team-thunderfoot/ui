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
- $subtitle-font: false by default
- $subtitle-font-weight: false by default
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default
- $border-radius: false by default

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
.g--card-25{
    @include make-card-25(
        // $border-radius: default,
    );
    @include make-card-25-modifier(
       $background-color: map-get($color-options, d),
        $subtitle-color: map-get($color-options, a),
        // $subtitle-font: default,
        // $subtitle-font-weight: default,
        $title-color: map-get($color-options, a),
        // $title-font: default,
        // $title-font-weight: default,
        // $text-align: default
    );
}
```

# Card-26

## Layout

![alt text][card-26]

[card-26]: /src/img/global-components/card/card-26.png

## Html for a card

```sh
<div class="g--card-26">
    <h3 class="g--card-26__title">Card 26</h3>
    <p class="g--card-26__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

## Editable variables

- $background-color
- $border-width
- $border-radius: false by default
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight: false by default
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default

### For modifiers

- $background-color
- $border-color
- $subtitle-color
- $text-align
- $title-color

## Use

```sh
.g--card-26{
    @include make-card-26(
        $border-width: 1px,    
        $subtitle-font: f,
        $title-font: c,
        // $title-font-weight: default
        // $subtitle-font-weight: default
        // $border-radius: default
    );
    @include make-card-26-modifier(
        $border-color: map-get($color-options, a),
        $background-color: transparent,
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $text-align: default
    );
}
```

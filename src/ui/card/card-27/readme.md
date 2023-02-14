# Card-27

## Layout

![alt text][card-27]

[card-27]: /src/img/global-components/card/card-27.png

## Html for a card

```sh
<div class="g--card-27">
    <h3 class="g--card-27__title">Card 27</h3>
    <p class="g--card-27__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

## Editable variables

- $subtitle-color
- $subtitle-font
- $text-align: false by default
- $title-color
- $title-font

### For modifiers

- $subtitle-color
- $text-align
- $title-color

## Use

```sh
.g--card-27{
    @include make-card-27(
        $title-font: c,
        $subtitle-font: f,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
    );
    @include make-card-27-modifier(
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
        // $text-align: default
    );
}
```

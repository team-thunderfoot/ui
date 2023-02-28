# Card-29

## Layout

![alt text][card-29]

[card-29]: /src/img/global-components/card/card-29.png

## Html for a card

```sh
<div class="g--card-29">
    <h3 class="g--card-29__title">Card 29</h3>
    <p class="g--card-29__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-29__link">This is a link</a>
</div>
```

## Editable variables

- $border-radius: false by default
- $background-color
- $link-class
- $link-class-modifier: false by default
- $subtitle-color
- $subtitle-font: false by default
- $subtitle-font-weight: false by default
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default

### For modifiers

- $background-color
- $link-class-modifier
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $text-align
- $title-color
- $title-font
- $title-font-weight

## Use

```sh
.g--card-29{
    @include make-card-29(
        $link-class: g--link-01,
        // $border-radius: default
    );
    @include make-card-29-modifier(
        $background-color: transparent,
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $link-class-modifier: default,
        // $text-align: default,
        // $subtitle-font: default,
        // $title-font: default,
        // $title-font-weight: default,
        // $subtitle-font-weight: default
    );
}
```

# Card-30

## Layout

![alt text][card-30]

[card-30]: /src/img/global-components/card/card-30.png

## Html for a card

```sh
<div class="g--card-30">
    <h3 class="g--card-30__title">Card 30</h3>
    <p class="g--card-30__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-30__link">This is a link</a>
</div>
```

## Editable variables

- $background-color
- $border-width
- $border-radius: false by default
- $link-class
- $link-class-modifier: false by default
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
- $link-class-modifier
- $subtitle-color
- $text-align
- $title-color

## Use

```sh
.g--card-30{
    @include make-card-30(
        $link-class: g--link-01,
        $border-width: 1px,    
        $subtitle-font: f,
        $title-font: c,
        // $title-font-weight: default
        // $subtitle-font-weight: default
        // $border-radius: default
    );
    @include make-card-30-modifier(
        $border-color: map-get($color-options, a),
        $background-color: transparent,
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $link-class-modifier: default
        // $text-align: default
    );
}
```

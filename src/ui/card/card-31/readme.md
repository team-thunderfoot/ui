# Card-31

## Layout

![alt text][card-31]

[card-31]: /src/img/global-components/card/card-31.png

## Html for a card

```sh
<div class="g--card-31">
    <h3 class="g--card-31__title">Card 31</h3>
    <p class="g--card-31__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-31__link">This is a link</a>
</div>
```

## Editable variables

- $link-class
- $link-class-modifier: false by default
- $subtitle-color
- $subtitle-font: false by default
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For modifiers

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
.g--card-31{
    @include make-card-31(
        $link-class: g--link-01,
    );
    @include make-card-31-modifier(
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
        // $title-font: default,
        // $subtitle-font: default,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
        // $text-align: default,
        // $link-class-modifier: default
    );
}
```

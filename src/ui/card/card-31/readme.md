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
- $subtitle-font
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For modifiers

- $link-class-modifier
- $subtitle-color
- $text-align
- $title-color

## Use

```sh
.g--card-31{
    @include make-card-31(
        $link-class: g--link-01,
        $title-font: c,
        $subtitle-font: f,
    );
    @include make-card-31-modifier(
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
        // $text-align: default
        // $link-class-modifier: default
    );
}
```

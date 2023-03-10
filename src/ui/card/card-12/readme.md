# Card-12

## Layout

![alt text][card-12]

[card-12]: /src/img/global-components/card/card-12.png

## Html for a card

```sh
<div class="g--card-12 g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-bg-placeholder.jpg">
    <div class="g--card-12__wrapper">
    <img src="/src/img/global-components/card/card-img-placeholder.png" alt="" class="g--card-12__wrapper__media g--lazy-01">
    <h3 class="g--card-12__wrapper__title">Card 12</h3>
    </div>
</div>
```

## Editable variables

- $background-position
- $background-size
- $border-radius: false by default
- $mask-color
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default

### For modifiers

- $mask-color
- $subtitle-color
- $text-align
- $title-color
- $title-font
- $title-font-weight

## Use

```sh
.g--card-12{
    @include make-card-12(
        $background-position: center,
        $background-size: cover,
        // $border-radius: default,
    );
    @include make-card-12-modifier(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
        // $text-align: default,
        // $title-font: default,
        // $title-font-weight: default,
    );
}
```

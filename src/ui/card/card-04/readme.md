# Card-04

## Html for a card

```sh
<div class="g--card-04" style="background-image: url(./img/global-components/card/card-bg-placeholder.jpg);">
    <div class="g--card-04__wrapper">
        <img src="./img/global-components/card/card-img-placeholder.png" alt="" class="g--card-04__wrapper__media">
        <h3 class="g--card-04__wrapper__title">Card 04</h3>
        <p class="g--card-04__wrapper__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    </div>
</div>
```

## editable variables

- $background-size
- $background-position
- $title-font
- $subtitle-font
- $mask-color
- $title-color
- $subtitle-color

## use

```sh
.g--card-04{
    @include make-card-04(
        $background-size: cover,
        $background-position: center,
        $title-font: c,
        $subtitle-font: f,
    );
    @include make-card-04-color(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
    &--second{
        @include make-card-04-color(
            $mask-color: linear-gradient(rgba(map-get($color-options, d), .5), rgba(map-get($color-options, a), .5)),
            $title-color: map-get($color-options, f),
            $subtitle-color: map-get($color-options, b),
        );
    }
}
```

## layout

![alt text][card-04]

[card-04]: /src/img/global-components/card/card-04.png

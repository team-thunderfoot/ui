# Card-12

## Html for a card

```sh
<div class="g--card-12" style="background-image: url(/src/img/global-components/card/card-bg-placeholder.jpg);">
    <div class="g--card-12__wrapper">
    <img src="/src/img/global-components/card/card-img-placeholder.png" alt="" class="g--card-12__wrapper__media">
    <h3 class="g--card-12__wrapper__title">Card 12</h3>
    </div>
</div>
```

## editable variables
- $background-size
- $background-position
- $title-font
- $mask-color
- $title-color

## use
```sh
.g--card-12{
    @include make-card-12(
        $background-size: cover,
        $background-position: center,
        $title-font: c,
    );
    @include make-card-12-color(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-12]

[card-12]: /src/img/global-components/card/card-12.png 
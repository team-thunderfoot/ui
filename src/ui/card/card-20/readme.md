# Card-20

## Html for a card

```sh
<div class="g--card-20" style="background-image: url(/src/img/global-components/card/card-bg-placeholder.jpg);">
    <div class="g--card-20__wrapper">
    <img src="/src/img/global-components/card/card-img-placeholder.png" alt="" class="g--card-20__wrapper__media">
    <p class="g--card-20__wrapper__title">Solution description lorem ipsum dolor sit amet consectetur.</p>
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
.g--card-20{
    @include make-card-20(
        $background-size: cover,
        $background-position: center,
        $title-font: f,
    );
    @include make-card-20-color(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-20]

[card-20]: /src/img/global-components/card/card-20.png 
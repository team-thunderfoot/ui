# Card-03

## Html for a card

```sh
<div class="g--card-03">
    <img src="./img/global-components/card/card-img-placeholder.png" alt="" class="g--card-03__media">
    <h3 class="g--card-03__title">Card 03</h3>
    <p class="g--card-03__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

## editable variables
- $title-font
- $subtitle-font
- $title-color
- $subtitle-color


## use
```sh
.g--card-03{
    @include make-card-03(
        $title-font: c,
        $subtitle-font: f,
    );
    @include make-card-03-color(
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-03]

[card-03]: /src/img/global-components/card/card-03.png 
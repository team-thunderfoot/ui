# Card-17

## Html for a card

```sh
<div class="g--card-17">
    <img src="/src/img/global-components/card/card-img-placeholder.png" alt="" class="g--card-17__media">
    <p class="g--card-17__title">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

## editable variables
- $title-font
- $background-color
- $title-color

## use
```sh
.g--card-17{
    @include make-card-17(
        $title-font: f,

    );
    @include make-card-17-color(
        $background-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-17]

[card-17]: /src/img/global-components/card/card-17.png 
# Card-09

## Html for a card

```sh
<div class="g--card-09">
    <img src="./img/global-components/card/card-img-placeholder.png" alt="" class="g--card-09__media">
    <h3 class="g--card-09__title">Card 9</h3>
</div>
```

## editable variables
- $title-font
- $background-color
- $title-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-9/_make-g--card-9';
.g--card-09{
    @include make-card-09(
        $title-font: c,
    );
    @include make-card-09-color(
        $background-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-09]

[card-09]: /src/img/global-components/card/card-09.png 
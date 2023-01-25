# Card-11

## Html for a card

```sh
<div class="g--card-11">
    <img src="./img/global-components/card/card-img-placeholder.png" alt="" class="g--card-11__media">
    <h3 class="g--card-11__title">Card 10</h3>
</div>
```

## editable variables
- $title-font
- $title-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-11/_make-g--card-11';
.g--card-11{
    @include make-card-11(
        $title-font: c,
    );
    @include make-card-11-color(
        $title-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-11]

[card-11]: /src/img/global-components/card/card-11.png 
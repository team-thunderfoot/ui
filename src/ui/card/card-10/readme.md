# Card-10

## Html for a card

```sh
<div class="g--card-10">
    <img src="https://picsum.photos/200" alt="" class="g--card-10__media">
    <h3 class="g--card-10__title">Card 10</h3>
</div>
```

## editable variables
- $title-font
- $border-width
- $border-color
- $title-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-10/_make-g--card-10';
.g--card-10{
    @include make-card-10(
        $title-font: c,
        $border-width: 1px
    );
    @include make-card-10-color(
        $border-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-10]

[card-10]: /src/img/global-components/card/card-10.png 
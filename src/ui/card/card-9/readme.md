# Card-9

## Html for a card

```sh
<div class="g--card-9">
    <img src="https://picsum.photos/200" alt="" class="g--card-9__media">
    <h3 class="g--card-9__title">Card 9</h3>
</div>
```

## editable variables
- $title-font
- $background-color
- $title-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-9/_make-g--card-9';
.g--card-9{
    @include make-card-9(
        $title-font: c,
    );
    @include make-card-9-color(
        $background-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-9]

[card-9]: /src/img/global-components/card/card-9.png 
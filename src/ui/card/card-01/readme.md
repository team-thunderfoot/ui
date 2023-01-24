# Card-01

## Html for a card

```sh
<div class="g--card-01">
    <img src="https://picsum.photos/200" alt="" class="g--card-01__media">
    <h3 class="g--card-01__title">Card 01</h3>
    <p class="g--card-01__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

## editable variables
- $title-font
- $subtitle-font
- $background-color
- $title-color
- $subtitle-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-01/_make-g--card-01';
.g--card-01{
    @include make-card-01(
        $title-font: b,
        $subtitle-font: d,
    );
    @include make-card-01-color(
        $background-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-01]

[card-01]: /src/img/global-components/card/card-01.png 
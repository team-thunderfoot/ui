# Card-2

## Html for a card

```sh
<div class="g--card-2">
    <img src="https://picsum.photos/200" alt="" class="g--card-2__media">
    <h3 class="g--card-2__title">Card 2</h3>
    <p class="g--card-2__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

## editable variables
- $border-width
- $title-font
- $subtitle-font
- $border-color
- $title-color
- $subtitle-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-2/_make-g--card-2';
.g--card-2{
    @include make-card-2(
        $border-width: 1px,
        $title-font: b,
        $subtitle-font: d,
    );
    @include make-card-2-color(
        $border-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-2]

[card-2]: /src/img/global-components/card/card-2.png 
# Card-1

## Html for a card

```sh
<div class="g--card-1">
    <img src="https://picsum.photos/200" alt="" class="g--card-1__media">
    <h3 class="g--card-1__title">Card 1</h3>
    <p class="g--card-1__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

## editable variables
- $title-font:
- $subtitle-font
- $background-color
- $title-color
- $subtitle-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-1/_make-g--card-1';
.g--card-1{
    @include make-card-1(
        $title-font: b,
        $subtitle-font: d,
    );
    @include make-card-1-color(
        $background-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-1]

[card-1]: /src/img/global-components/card/card-1.png 
# Card-3

## Html for a card

```sh
<div class="g--card-3">
    <img src="https://picsum.photos/200" alt="" class="g--card-3__media">
    <h3 class="g--card-3__title">Card 3</h3>
    <p class="g--card-3__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

## editable variables
- $title-font,
- $subtitle-font,
- $title-color,
- $subtitle-color,


## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-3/_make-g--card-3';
.g--card-3{
    @include make-card-3(
        $title-font: c,
        $subtitle-font: f,
    );
    @include make-card-3-color(
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-3]

[card-3]: /src/img/global-components/card/card-3.png 
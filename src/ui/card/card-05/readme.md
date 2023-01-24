# Card-05

## Html for a card

```sh
<div class="g--card-05">
    <img src="./img/global-components/card/card-img-placeholder.png" alt="" class="g--card-05__media">
    <h3 class="g--card-05__title">Card 05</h3>
    <p class="g--card-05__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-05__link">This is a link</a>
</div>
```

## editable variables
- $title-font
- $subtitle-font
- $link-class
- $background-color
- $title-color
- $subtitle-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-05/_make-g--card-05';
.g--card-05{
    @include make-card-05(
        $title-font: c,
        $subtitle-font: f,
        $link-class: g--link-1,
    );
    @include make-card-05-color(
        $background-color: map-get($color-options, f),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-05]

[card-05]: /src/img/global-components/card/card-05.png 
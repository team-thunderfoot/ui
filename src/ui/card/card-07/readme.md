# Card-07

## Html for a card

```sh
<div class="g--card-07">
    <img src="./img/global-components/card/card-img-placeholder.png" alt="" class="g--card-07__media">
    <h3 class="g--card-07__title">Card 07</h3>
    <p class="g--card-07__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-07__link">This is a link</a>
</div>
```

## editable variables
- $title-font
- $subtitle-font
- $link-class
- $title-color
- $subtitle-color

## use
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-07/_make-g--card-07';
.g--card-07{
    @include make-card-07(
        $title-font: c,
        $subtitle-font: f,
        $link-class: g--link-1,
    );
    @include make-card-07-color(
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-07]

[card-07]: /src/img/global-components/card/card-07.png 
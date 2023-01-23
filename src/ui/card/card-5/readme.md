# Card-5

## Html for a card

```sh
<div class="g--card-5">
    <img src="https://picsum.photos/200" alt="" class="g--card-5__media">
    <h3 class="g--card-5__title">Card 5</h3>
    <p class="g--card-5__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-5__link">This is a link</a>
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
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-5/_make-g--card-5';
.g--card-5{
    @include make-card-5(
        $title-font: c,
        $subtitle-font: f,
        $link-class: g--link-1,
    );
    @include make-card-5-color(
        $background-color: map-get($color-options, f),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-5]

[card-5]: /src/img/global-components/card/card-5.png 
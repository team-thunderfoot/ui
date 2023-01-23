# Card-7

## Html for a card

```sh
<div class="g--card-7">
    <img src="https://picsum.photos/200" alt="" class="g--card-7__media">
    <h3 class="g--card-7__title">Card 7</h3>
    <p class="g--card-7__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-7__link">This is a link</a>
</div>
```

## editable variables
- $title-font
- $subtitle-font
- $link-class
- $title-color
- $subtitle-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-7/_make-g--card-7';
.g--card-7{
    @include make-card-7(
        $title-font: c,
        $subtitle-font: f,
        $link-class: g--link-1,
    );
    @include make-card-7-color(
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-7]

[card-7]: /src/img/global-components/card/card-7.png 
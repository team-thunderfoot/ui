# Card-8

## Html for a card

```sh
<div class="g--card-8" style="background-image: url(https://picsum.photos/600/800);">
    <div class="g--card-8__wrapper">
        <img src="https://picsum.photos/200" alt="" class="g--card-8__wrapper__media">
        <h3 class="g--card-8__wrapper__title">Card 8 Second</h3>
        <p class="g--card-8__wrapper__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
        <a href="" class="g--card-8__wrapper__link">This is a link</a>
    </div>
</div>
```

## editable variables
- $background-size
- $background-position
- $title-font
- $subtitle-font,
- $link-class
- $mask-color
- $title-color
- $subtitle-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-8/_make-g--card-8';
.g--card-8{
    @include make-card-8(
        $background-size: cover,
        $background-position: center,
        $title-font: c,
        $subtitle-font: f,
        $link-class: g--link-1
    );
    @include make-card-8-color(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-8]

[card-8]: /src/img/global-components/card/card-8.png 
# Card-16

## Html for a card

```sh
<div class="g--card-16" style="background-image: url(/src/img/global-components/card/card-bg-placeholder.jpg);">
    <div class="g--card-16__wrapper">
    <img src="/src/img/global-components/card/card-img-placeholder.png" alt="" class="g--card-16__wrapper__media">
    <h3 class="g--card-16__wrapper__title">Card 16</h3>
    <a href="" class="g--card-16__wrapper__link">This is a link</a>
    </div>
</div>
```

## editable variables
- $background-size
- $background-position
- $title-font
- $link-class
- $mask-color
- $title-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-16/_make-g--card-16';
.g--card-16{
    @include make-card-16(
        $background-size: cover,
        $background-position: center,
        $title-font: c,
        $link-class: g--link-01
    );
    @include make-card-16-color(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-16]

[card-16]: /src/img/global-components/card/card-16.png 
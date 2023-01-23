# Card-4

## Html for a card

```sh
<div class="g--card-4" style="background-image: url(https://picsum.photos/600/800);">
    <div class="g--card-4__wrapper">
        <img src="https://picsum.photos/200" alt="" class="g--card-4__wrapper__media">
        <h3 class="g--card-4__wrapper__title">Card 4</h3>
        <p class="g--card-4__wrapper__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    </div>
</div>
```

## editable variables
- $background-size
- $background-position
- $title-font
- $subtitle-font
- $mask-color
- $title-color
- $subtitle-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-4/_make-g--card-4';
.g--card-4{
    @include make-card-4(
        $background-size: cover,
        $background-position: center,
        $title-font: c,
        $subtitle-font: f,
    );
    @include make-card-4-color(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
    &--second{
        @include make-card-4-color(
            $mask-color: linear-gradient(rgba(map-get($color-options, d), .5), rgba(map-get($color-options, a), .5)),
            $title-color: map-get($color-options, f),
            $subtitle-color: map-get($color-options, b),
        );
        &.g--card-4 .g--card-4{
            @include make-card-4-color(
                $mask-color: linear-gradient(rgba(map-get($color-options, d), .5), rgba(map-get($color-options, a), .5)),
                $title-color: map-get($color-options, f),
                $subtitle-color: map-get($color-options, b),
            );
        }
    }
}
```

## layout
![alt text][card-4]

[card-4]: /src/img/global-components/card/card-4.png 
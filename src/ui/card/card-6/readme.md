# Card-6

## Html for a card

```sh
<div class="g--card-6">
    <img src="https://picsum.photos/200" alt="" class="g--card-6__media">
    <h3 class="g--card-6__title">Card 6</h3>
    <p class="g--card-6__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-6__link">This is a link</a>
</div>
```

## editable variables
- $border-width,   
- $title-font
- $subtitle-font
- $link-class
- $border-color
- $title-color
- $subtitle-color

## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-6/_make-g--card-6';
.g--card-6{
    @include make-card-6(
        $border-width: 1px,    
        $title-font: c,
        $subtitle-font: f,
        $link-class: g--link-1,
    );
    @include make-card-6-color(
        $border-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-6]

[card-6]: /src/img/global-components/card/card-6.png 
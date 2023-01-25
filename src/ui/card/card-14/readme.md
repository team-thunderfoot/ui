# Card-14

## Html for a card

```sh
<div class="g--card-14">
    <img src="/src/img/global-components/card/card-img-placeholder.png" alt="" class="g--card-14__media">
    <h3 class="g--card-14__title">Card 14</h3>
    <a href="" class="g--card-14__link">This is a link</a>
</div>
```

## editable variables
- $border-width,   
- $title-font
- $link-class
- $border-color
- $title-color

## use
```sh
.g--card-14{
    @include make-card-14(
        $border-width: 1px,    
        $title-font: c,
        $link-class: g--link-01,
    );
    @include make-card-14-color(
        $border-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-14]

[card-14]: /src/img/global-components/card/card-14.png 
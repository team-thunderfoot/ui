# Card-13

## Html for a card

```sh
<div class="g--card-13">
    <img src="/src/img/global-components/card/card-img-placeholder.png" alt="" class="g--card-13__media">
    <h3 class="g--card-13__title">Card 13</h3>
    <a href="" class="g--card-13__link">This is a link</a>
</div>
```

## editable variables
- $title-font
- $link-class
- $background-color
- $title-color

## use
```sh
.g--card-13{
    @include make-card-13(
        $title-font: c,
        $link-class: g--link-01,
    );
    @include make-card-13-color(
        $background-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-13]

[card-13]: /src/img/global-components/card/card-13.png 
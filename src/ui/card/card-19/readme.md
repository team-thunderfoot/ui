# Card-19

## Html for a card

```sh
<div class="g--card-19">
    <img src="/src/img/global-components/card/card-img-placeholder.png" alt="" class="g--card-19__media">
    <p class="g--card-19__title">Card 19</p>
    <a href="" class="g--card-19__link">This is a link</a>
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
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-19/_make-g--card-19';
.g--card-19{
    @include make-card-19(
        $title-font: f,
    );
    @include make-card-19-color(
        $title-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-19]

[card-19]: /src/img/global-components/card/card-19.png 
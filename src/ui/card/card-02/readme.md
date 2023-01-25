# Card-02

## Html for a card

```sh
<div class="g--card-02">
    <img src="./img/global-components/card/card-img-placeholder.png" alt="" class="g--card-02__media">
    <h3 class="g--card-02__title">Card 02</h3>
    <p class="g--card-02__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

## editable variables
- $border-width
- $title-font
- $subtitle-font
- $border-color
- $title-color
- $subtitle-color

## use
```sh
.g--card-2{
    @include make-card-02(
        $border-width: 1px,
        $title-font: b,
        $subtitle-font: d,
    );
    @include make-card-02-color(
        $border-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-02]

[card-02]: /src/img/global-components/card/card-02.png 
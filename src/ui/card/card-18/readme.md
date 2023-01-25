# Card-18

## Html for a card

```sh
<div class="g--card-18">
    <img src="/src/img/global-components/card/card-img-placeholder.png" alt="" class="g--card-18__media">
    <p class="g--card-18__title">Card 18 Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

## editable variables
- $border-width,   
- $title-font
- $border-color
- $title-color

## use
```sh
.g--card-18{
    @include make-card-18(
        $border-width: 1px,    
        $title-font: f,
    );
    @include make-card-18-color(
        $border-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-18]

[card-18]: /src/img/global-components/card/card-18.png 
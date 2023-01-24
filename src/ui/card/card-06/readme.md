# Card-06

## Html for a card

```sh
<div class="g--card-06">
    <img src="https://picsum.photos/200" alt="" class="g--card-06__media">
    <h3 class="g--card-06__title">Card 06</h3>
    <p class="g--card-06__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-06__link">This is a link</a>
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
@import '@teamthunderfoot/ui/src/ui/g-components/card/card-06/_make-g--card-06';
.g--card-06{
    @include make-card-06(
        $border-width: 1px,    
        $title-font: c,
        $subtitle-font: f,
        $link-class: g--link-1,
    );
    @include make-card-06-color(
        $border-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][card-06]

[card-06]: /src/img/global-components/card/card-06.png 
# Card-13

## layout

![alt text][card-13]

[card-13]: /src/img/global-components/card/card-13.png

## Html for a card

```sh
<div class="g--card-13">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-13__media g--lazy-01">
    <h3 class="g--card-13__title">Card 13 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat eligendi neque facere accusamus excepturi voluptas? Facilis enim, a iste, voluptates mollitia perferendis pariatur recusandae esse nulla ipsam voluptatibus accusamus.</h3>
    <a href="" class="g--card-13__link">This is a link</a>
</div>
```

## Editable variables

- $background-color
- $border-radius: false by default
- $link-class
- $link-class-modifier: false by default
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default

### For modifiers

- $background-color
- $text-align
- $title-color

## Use

```sh
.g--card-13{
    @include make-card-13(
        $title-font: c,
        $link-class: g--link-01,
        // $border-radius: default,
        // $title-font-weight: default,
    );
    @include make-card-13-modifier(
        $background-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, a),
        // $link-class-modifier: default
        // $text-align: default,
    );
}
```

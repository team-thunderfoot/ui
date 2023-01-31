# Card-15

## Layout

![alt text][card-15]

[card-15]: /src/img/global-components/card/card-15.png

## Html for a card

```sh
<div class="g--card-15">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-15__media g--lazy-01">
    <h3 class="g--card-15__title">Card 15</h3>
    <a href="" class="g--card-15__link">This is a link</a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $link-class
- $link-class-modifier: false by default
- $text-align: false by default
- $title-color
- $title-font

### For modifiers

- $text-align
- $title-color

## Use

```sh
.g--card-15{
    @include make-card-15(
        $link-class: g--link-01,
        $title-font: c,
    );
    @include make-card-15-modifier(
        $title-color: map-get($color-options, a),
        // $text-align: default
    );
}
```

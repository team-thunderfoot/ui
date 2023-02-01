# Card-06

## Layout

![alt text][card-06]

[card-06]: /src/img/global-components/card/card-06.png

## Html for a card

```sh
<div class="g--card-06">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-06__media g--lazy-01">
    <h3 class="g--card-06__title">Card 06</h3>
    <p class="g--card-06__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-06__link">This is a link</a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color: false by default
- $border-color
- $border-radius: false by default
- $border-width,
- $link-class
- $link-class-modifier: false by default
- $subtitle-color
- $subtitle-font
- $text-align: false by default
- $title-color
- $title-font

### For modifiers

- $background-color
- $subtitle-color
- $text-align
- $title-color

## Use

```sh
.g--card-06{
    @include make-card-06(
        $border-width: 1px,
        $link-class: g--link-01,
        $subtitle-font: f,
        $title-font: c,
        // $border-radius: default,
    );
    @include make-card-06-modifier(
        $border-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $background-color: default,
        // $link-class-modifier: default,
        // $text-align: default
    );
}
```

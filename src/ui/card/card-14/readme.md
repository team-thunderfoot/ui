# Card-14

## Layout

![alt text][card-14]

[card-14]: /src/img/global-components/card/card-14.png

## Html for a card

```sh
<div class="g--card-14">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-14__media g--lazy-01">
    <h3 class="g--card-14__title">Card 14</h3>
    <a href="" class="g--card-14__link">This is a link</a>
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
- $text-align: false by default
- $title-color
- $title-font

### For modifiers

- $background-color
- $text-align
- $title-color

## Use

```sh
.g--card-14{
    @include make-card-14(
        $border-width: 1px,
        $title-font: c,
        $link-class: g--link-01,
        // $border-radius: default,
        // $title-font-weight: default,
    );
    @include make-card-14-modifier(
        $border-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $background-color: default,
        // $link-class-modifier: default,
        // $text-align: default
    );
}
```

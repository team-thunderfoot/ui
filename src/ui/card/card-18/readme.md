# Card-18

## Layout

![alt text][card-18]

[card-18]: /src/img/global-components/card/card-18.png

## Html for a card

```sh
<div class="g--card-18">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-18__media g--lazy-01">
    <p class="g--card-18__title">Card 18 Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color: false by default
- $border-color
- $border-radius: false by default
- $border-width,
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default

### For modifiers

- $background-color
- $text-align
- $title-
- $title-font
- $title-font-weight

## Use

```sh
.g--card-18{
    @include make-card-18(
        $border-width: 1px,
        // $border-radius: default,
    );
    @include make-card-18-modifier(
        $border-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $background-color: default,
        // $text-align: default,
        // $title-font: default,
        // $title-font-weight: default,
    );
}
```

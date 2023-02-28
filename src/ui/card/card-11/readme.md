# Card-11

## Layout

![alt text][card-11]

[card-11]: /src/img/global-components/card/card-11.png

## Html for a card

```sh
<div class="g--card-11">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="placeholder" class="g--card-11__media g--lazy-01">
    <h3 class="g--card-11__title">Card 11</h3>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default

### For modifiers

- $text-align
- $title-color
- $title-font
- $title-font-weight

## use

```sh
.g--card-11{
    @include make-card-11();
    @include make-card-11-modifier(
        $title-color: map-get($color-options, a),
        // $text-align: default,
        // $title-font: default,
        // $title-font-weight: default,
    );
}
```

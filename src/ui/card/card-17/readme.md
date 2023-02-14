# Card-17

## Layout

![alt text][card-17]

[card-17]: /src/img/global-components/card/card-17.png

## Html for a card

```sh
<div class="g--card-17">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-17__media g--lazy-01">
    <p class="g--card-17__title">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color
- $border-radius: false by default
- $text-align: false by default
- $title-color
- $title-font

### For modifiers

- $background-color
- $text-align
- $title-color

## use

```sh
.g--card-17{
    @include make-card-17(
        $title-font: f,
        // $border-radius: default,
        // $title-font-weight: default,
    );
    @include make-card-17-modifier(
        $background-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, a),
        // $text-align: default
    );
}
```

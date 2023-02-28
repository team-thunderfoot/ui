# Card-20

## Layout

![alt text][card-20]

[card-20]: /src/img/global-components/card/card-20.png

## Html for a card

```sh
<div class="g--card-20 g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-bg-placeholder.jpg">
    <div class="g--card-20__wrapper">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-20__wrapper__media g--lazy-01">
    <p class="g--card-20__wrapper__title">Card 20 description lorem ipsum dolor sit amet consectetur.</p>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-position
- $background-size
- $border-radius: false by default
- $mask-color
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default

### For modifiers

- $mask-color
- $text-align
- $title-color
- $title-font
- $title-font-weight

## use

```sh
.g--card-20{
    @include make-card-20(
        $background-size: cover,
        $background-position: center,
        // $border-radius: default,
    );
    @include make-card-20-modifier(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
        // $text-align: default,
        // $title-font: default,
        // $title-font-weight: default,
    );
}
```

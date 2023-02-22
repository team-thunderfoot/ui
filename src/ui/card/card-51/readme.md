# Card-51

## Layout

![alt text][card-51]

[card-51]: /src/img/global-components/card/card-51.png

## Html for a card

```sh
<div class="g--card-51">
    <div class="g--card-51__wrapper">
        <h2 class="g--card-51__wrapper__title">Card 51 This is a card lorem ispum dolor sit</h2>
        <div class="c--content-a">
        <p>Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        </div>
    </div>
    <div class="g--card-51__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/logo-placeholder.png" src="/src/img/logo-placeholder.png" alt="img alt" class="g--card-51__media-wrapper__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
    </div>
</div>
```

##### \*Aspect Ratio

For the image, we have to add width, height and aspect ratio dynamically.

## Editable variables

- $background-color: false by default
- $border-radius: false by default
- $change-order-responsive: false by default
- $media-background-color: false by default
- $media-max-width
- $title-color
- $title-font
- $title-font-weight: false by default

### For modifiers

- $background-color
- $media-background-color: false
- $title-color

## use

```sh
.g--card-51{
    @include make-card-51(
        $media-max-width: 150px,
        $title-font: d,
        // title-font-weight: default
        // $change-order-reponsive: default
        // $border-radius: default,
    );
    @include make-card-51-modifier(
        $background-color: rgba(map-get($color-options, a), .1),
        $media-background-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, a),
    );
}
```

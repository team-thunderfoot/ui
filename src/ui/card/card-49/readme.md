# Card-49

## Layout

![alt text][card-49]

[card-49]: /src/img/global-components/card/card-49.png

## Html for a card

```sh
<div class="g--card-49">
    <div class="g--card-49__wrapper">
        <h2 class="g--card-49__wrapper__title">Card 49 This is a card lorem ispum dolor sit</h2>
        <div class="c--content-a">
        <p>Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        </div>
    </div>
    <div class="g--card-49__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="img alt" class="g--card-49__media-wrapper__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
    </div>
</div>
```

##### \*Aspect Ratio

For the image, we have to add width, height and aspect ratio dynamically.

## Editable variables

- $background-color: false by default
- $border-radius: false by default
- $change-order-responsive: false by default
- $title-color
- $title-font
- $title-font-weight: false by default

### For modifiers

- $background-color
- $title-color

## use

```sh
.g--card-49{
    @include make-card-49(
        $title-font: d,
        // title-font-weight: default
        // $change-order-reponsive: default
        // $border-radius: default,
    );
    @include make-card-49-modifier(
        $background-color: rgba(map-get($color-options, a), .1),
        $title-color: map-get($color-options, a),
    );
}
```

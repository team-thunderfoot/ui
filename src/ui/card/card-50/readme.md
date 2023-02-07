# Card-50

## Layout

![alt text][card-50]

[card-50]: /src/img/global-components/card/card-50.jpg

## Html for a card

```sh
<div class="g--card-50">
    <div class="g--card-50__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="img alt" class="g--card-50__media-wrapper__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
    </div>
    <div class="g--card-50__wrapper">
        <h2 class="g--card-50__wrapper__title">Card 50 This is a card lorem ispum dolor sit</h2>
        <p class="g--card-50__wrapper__subtitle">Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    </div>
</div>
```

##### \*Aspect Ratio

For the image, we have to add width, height and aspect ratio dynamically.

## Editable variables

- $border-radius: false by default
- $title-font
- $subtitle-font
- $background-color: false by default
- $text-align: false by default
- $title-color
- $subtitle-color

### For modifiers

- $background-color
- $text-align
- $title-color
- $subtitle-color

## use

```sh
.g--card-50{
    @include make-card-50(
        // $border-radius: default,
        $title-font: d,
        $subtitle-font: f,
    );
    @include make-card-50-modifier(
        // $background-color: default,
        // $text-align: default,
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

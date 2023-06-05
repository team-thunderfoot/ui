# Card-26

## Layout

![alt text][card-26]

[card-26]: /src/img/global-components/card/card-26.jpg

## Html for a card

```html
<div class="g--card-26">
    <div class="g--card-26__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-26__media-wrapper__media g--lazy-01" />
    </div>
    <div class="g--card-26__wrapper">
        <p class="g--card-26__wrapper__title">Card-26 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    </div>
</div>
```

## Editable variables

- $hover-img-zoom
- $hover-title-color
- $hover-transform
- $img-aspect-ratio
- $img-height
- $img-position
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-26 {
    @include make-card-26();
    @include make-card-26-modifier(
        $hover-img-zoom: 1.1,
        $hover-title-color: map-get($color-options, e),
        $hover-transform: translateY(-5%),
        $img-aspect-ratio: 1.7,
        $img-height: 100px,
        $img-position: center,
        $text-align: right,
        $title-color: map-get($color-options, a),
        $title-font: c,
        $title-font-weight: 600,
        $title-max-lines: 3
    );
}
```

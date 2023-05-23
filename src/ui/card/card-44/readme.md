# Card-44

## Layout

![alt text][card-44]

[card-44]: /src/img/global-components/card/card-44.jpg

## Html for a card

```html
<div class="g--card-44">
    <div class="g--card-44__media-wrapper">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/logo-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-44__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-44__title">Card 44</h3>
    <h4 class="g--card-44__subtitle">Job Position</h4>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $title-font
- $subtitle-font
- $img-border-radius
- $img-object-fit
- $img-position
- $img-width
- $img-height
- $img-aspect-ratio
- $title-font-weight
- $subtitle-font-weight
- $subtitle-color
- $title-color
- $img-background-color
- $img-background-color-hover
- $text-align
- $title-color-hover

## use

```scss
.g--card-44 {
    @include make-card-44();
    @include make-card-44-modifier(
        $title-font: e,
        $subtitle-font: f,
        // $img-border-radius: false,
        // $img-object-fit: false,
        // $img-position: false,
        // $img-width: false,
        // $img-height: false,
        // $img-aspect-ratio: false,
        // $title-font-weight: false,
        // $subtitle-font-weight: false,
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
        $img-background-color: map-get($color-options, a),
        $img-background-color-hover: map-get($color-options, g),
        // $text-align: false,
        $title-color-hover: map-get($color-options, g)
    );
}
```

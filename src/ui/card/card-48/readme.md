# Card-48

## Layout

![alt text][card-48]

[card-48]: /src/img/global-components/card/card-48.jpg

## Html for a card

```html
<div class="g--card-48">
    <div class="g--card-48__media-wrapper">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/logo-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-48__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-48__title">Card 44</h3>
    <h4 class="g--card-48__subtitle">Job Position</h4>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $hover-img-background-color
- $hover-img-zoom
- $hover-title-color
- $hover-transform
- $img-align
- $img-aspect-ratio
- $img-background-color
- $img-border-radius
- $img-height
- $img-object-fit
- $img-position
- $img-width
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $text-align
- $title-color
- $title-font
- $title-font-weight

## use

```scss
.g--card-48 {
    @include make-card-48();
    @include make-card-48-modifier(
        // $hover-img-background-color: ,
        // $hover-img-zoom:,
        // $hover-title-color: ,
        // $hover-transform: ,
        // $img-align: ,
        // $img-aspect-ratio: ,
        // $img-background-color: ,
        // $img-border-radius: ,
        // $img-height: ,
        // $img-object-fit: ,
        // $img-position: ,
        // $img-width: ,
        // $subtitle-color: map-get($color-options, a)
        // $subtitle-font: f,
        // $subtitle-font-weight: ,
        //$text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
    );
}
```

# Card-37

## Layout

![alt text][card-37]

[card-37]: /src/img/global-components/card/card-37.jpg

## Html for a card

```html
<div class="g--card-37">
    <div class="g--card-37__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-37__media-wrapper__media g--lazy-01" />
    </div>
    <div class="g--card-37__wrapper">
        <p class="g--card-37__wrapper__meta">Lorem ipsum | Lorem ipsum</p>
        <p class="g--card-37__wrapper__title">Card-37 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        <div class="g--card-37__wrapper__list-group">
            <div class="g--card-37__wrapper__list-group__list-item">Category</div>
            <div class="g--card-37__wrapper__list-group__list-item">Category</div>
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-37__wrapper__link">This is a link</a>
    </div>
</div>
```

## Note:

it is recommended to add aspect ratio variables or img height variables, if we don't add them the link won't align to the bottom and we won't be able to add a gradient as background color (only solid colors or with opacity)

## Editable variables

-   $background-color
-   $border-color
-   $border-style
-   $border-width
-   $border-radius
-   $full-image-height
-   $hover-background-color
-   $hover-img-zoom
-   $hover-shadow
-   $hover-title-color
-   $hover-transform
-   $img-aspect-ratio-width
-   $img-aspect-ratio-height
-   $img-height
-   $img-position
-   $link-class
-   $link-font
-   $meta-color
-   $meta-font
-   $meta-font-weight
-   $pill-class
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## use

```scss
.g--card-37 {
    @include make-card-37();
    @include make-card-37-modifier(
        $background-color: lighten(map-get($color-options,a), 82%),
        $border-color: map-get($color-options, a),
        $border-style: solid,
        $border-width: 1px,
        $border-radius: 0,
        $full-image-height: false,
        $hover-background-color: map-get($color-options, g),
        $hover-img-zoom: 1.1,
        $hover-shadow: 0 0 16px 0 rgba(map-get($color-options, a), 0.5),
        $hover-title-color: map-get($color-options, e),
        $hover-transform: translateY(-5%),
        $img-aspect-ratio-width: 16,
        $img-aspect-ratio-height: 9,
        // $img-height: 340px,
        $img-position: center,
        $link-class: g--link-01,
        $link-font: f,
        $meta-color: map-get($color-options, a),
        $meta-font: f,
        $meta-font-weight: 400,
        $pill-class: g--pill-01,
        $text-align: left,
        $title-color: map-get($color-options, a),
        $title-font: c,
        $title-font-weight: 400,
        $title-max-lines: 3
    );
}
```

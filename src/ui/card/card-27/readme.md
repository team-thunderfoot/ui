# Card-27

## Layout

![alt text][card-27]

[card-27]: /src/img/global-components/card/card-27.jpg

## Html for a card

```html
<div class="g--card-27">
    <div class="g--card-27__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-27__media-wrapper__media g--lazy-01"
        />
    </div>
    <div class="g--card-27__wrapper">
        <p class="g--card-27__wrapper__title">
            Card-27 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam
            consectetur pretium fringilla metus.
        </p>
        <div class="g--card-27__wrapper__list-group">
            <div class="g--card-27__wrapper__list-group__list-item">Category</div>
            <div class="g--card-27__wrapper__list-group__list-item">Category</div>
        </div>
    </div>
</div>
```

## Note:

it is recommended to add aspect ratio variables or img height variables, if we don't add them the pills won't align to the bottom and we won't be able to add a gradient as background color (only solid colors or with opacity)

## Editable variables

-   $background-color
-   $border-color
-   $border-radius
-   $border-style
-   $border-width
-   $card-min-height
-   $full-image-height
-   $hover-background-color
-   $hover-border-color
-   $hover-border-radius
-   $hover-img-zoom
-   $hover-shadow
-   $hover-title-color
-   $hover-title-underline-color
-   $hover-transform
-   $img-aspect-ratio-width
-   $img-aspect-ratio-height
-   $img-height
-   $img-position
-   $pill-class
-   $shadow
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## use

```scss
.g--card-27 {
    @include make-card-27();
    @include make-card-27-modifier(
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: 0,
        // $border-style: solid,
        // $border-width: 1px,
        // $card-min-height: 500px,
        // $full-image-height: false,
        // $hover-background-color: map-get($color-options, g),
        // $hover-border-color: map-get($color-options, f),
        // $hover-border-radius: $measure * 4,
        // $hover-img-zoom: 1.1,
        // $hover-shadow: 0 0 16px 0 rgba(map-get($color-options, a), 0.5),
        // $hover-title-color: map-get($color-options, e),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-5%),
        // $img-aspect-ratio-width: 16,
        // $img-aspect-ratio-height: 9,
        // $img-height: 340px,
        // $img-position: center,
        // $pill-class: g--pill-01,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3
    );
}
```

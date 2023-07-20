# Card-35

## Layout

![alt text][card-35]

[card-35]: /src/img/global-components/card/card-35.jpg

## Html for a card

```html
<div class="g--card-35">
    <div class="g--card-35__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-35__media-wrapper__media g--lazy-01"
        />
    </div>
    <div class="g--card-35__wrapper">
        <p class="g--card-35__wrapper__meta">Lorem ipsum | Lorem ipsum</p>
        <p class="g--card-35__wrapper__title">
            Card-35 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam
            consectetur pretium fringilla metus.
        </p>
        <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-35__wrapper__link"
            >This is a link</a
        >
    </div>
</div>
```

## Note:

it is recommended to add aspect ratio variables or img height variables, if we don't add them the link won't align to the bottom and we won't be able to add a gradient as background color (only solid colors or with opacity)

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
-   $link-class
-   $link-font
-   $meta-color
-   $meta-font
-   $meta-font-weight
-   $shadow
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## use

```scss
.g--card-35 {
    @include make-card-35();
    @include make-card-35-modifier(
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
        // $link-class: g--link-01,
        // $link-font: f,
        // $meta-color: map-get($color-options, a),
        // $meta-font: f,
        // $meta-font-weight: 400,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3
    );
}
```

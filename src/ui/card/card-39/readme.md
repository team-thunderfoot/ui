# Card-39

## Layout

![alt text][card-39]

[card-39]: /src/img/global-components/card/card-39.jpg

## Html for a card

```html
<div class="g--card-39">
    <div class="g--card-39__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-39__media-wrapper__media g--lazy-01"
        />
    </div>
    <div class="g--card-39__wrapper">
        <div class="g--card-39__wrapper__hd">
            <p class="g--card-39__wrapper__hd__meta">Lorem ipsum | Lorem ipsum</p>
            <p class="g--card-39__wrapper__hd__author">By Author</p>
        </div>
        <p class="g--card-39__wrapper__title">
            Card-39 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam
            consectetur pretium fringilla metus.
        </p>
        <div class="g--card-39__wrapper__list-group">
            <div class="g--card-39__wrapper__list-group__list-item">Category</div>
            <div class="g--card-39__wrapper__list-group__list-item">Category</div>
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-39__wrapper__link"
            >This is a link</a
        >
    </div>
</div>
```

## Note:

it is recommended to add aspect ratio variables or img height variables, if we don't add them the link won't align to the bottom and we won't be able to add a gradient as background color (only solid colors or with opacity)

## Editable variables

-   $author-color
-   $author-font
-   $author-font-weight
-   $background-color
-   $border-color
-   $border-style
-   $border-width
-   $border-radius
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
-   $img-aspect-ratio-height
-   $img-aspect-ratio-width
-   $img-height
-   $img-position
-   $link-class
-   $link-font
-   $meta-color
-   $meta-font
-   $meta-font-weight
-   $pill-class
-   $shadow
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## use

```scss
.g--card-39 {
    @include make-card-39();
    @include make-card-39-modifier(
        // $author-color: map-get($color-options, a),
        // $author-font: f,
        // $author-font-weight: 400,
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-style: solid,
        // $border-width: 1px,
        // $border-radius: 0,
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
        // $img-aspect-ratio-height: 9,
        // $img-aspect-ratio-width: 16,
        // $img-height: 340px,
        // $img-position: center,
        // $link-class: g--link-01,
        // $link-font: f,
        // $meta-color: map-get($color-options, a),
        // $meta-font: f,
        // $meta-font-weight: 400,
        // $pill-class: g--pill-01,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3
    );
}
```

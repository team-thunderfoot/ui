# Card-04

## Layout

![alt text][card-04]

[card-04]: /src/img/global-components/card/card-04.jpg

## Html for a card

```html
<div class="g--card-04">
    <div class="g--card-04__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-04__media-wrapper__media g--lazy-01"
        />
    </div>
    <h3 class="g--card-04__title">Lorem ipsum</h3>
    <p class="g--card-04__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-04__link"
        >This is a link</a
    >
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-04">
    <div class="g--card-04__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-04__media-wrapper__media g--lazy-01"
        />
    </div>
    <h3 class="g--card-04__title">Lorem ipsum</h3>
    <div class="g--card-04__subtitle c--content-a">
        Solution description lorem ipsum dolor sit amet consectetur.
    </div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-04__link"
        >This is a link</a
    >
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

-   $background-color
-   $border-color
-   $border-radius
-   $border-style
-   $border-width
-   $card-min-height
-   $hover-background-color
-   $hover-border-radius
-   $hover-img-zoom
-   $hover-shadow
-   $hover-title-color
-   $hover-title-underline-color
-   $hover-transform
-   $img-aspect-ratio
-   $img-fit
-   $img-height
-   $img-position
-   $img-width
-   $link-class
-   $link-font
-   $shadow
-   $subtitle-color
-   $subtitle-font
-   $subtitle-font-weight
-   $subtitle-max-lines
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## Use

```scss
.g--card-04 {
    @include make-card-04();
    @include make-card-04-modifier(
        // $background-color: lighten(map-get($color-options, a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: $measure,
        // $border-style: solid,
        // $border-width: 1px,
        // $card-min-height: 500px,
        // $hover-background-color: map-get($color-options, g),
        // $hover-border-radius: $measure * 4,
        // $hover-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure * 4 map-get($color-options, a),
        // $hover-title-color: map-get($color-options, h),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio: 1.7,
        // $img-fit: cover,
        // $img-height: 340px,
        // $img-position: center,
        // $img-width: auto,
        // $link-class: g--link-01,
        // $link-font: f,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $subtitle-color: map-get($color-options, a) $subtitle-font-weight: 400,
        // $subtitle-font: f,
        // $subtitle-font-weight: 600,
        // $subtitle-max-lines: 3,
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
    );
}
```

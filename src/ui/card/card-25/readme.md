# Card-25

## Layout

![alt text][card-25]

[card-25]: /src/img/global-components/card/card-25.jpg

## Html for a card

```html
<div class="g--card-25">
    <div class="g--card-25__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-25__media-wrapper__media g--lazy-01 f--ar"
            width="604"
            height="340"
        />
    </div>
    <div class="g--card-25__wrapper">
        <p class="g--card-25__wrapper__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-25">
    <div class="g--card-25__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-25__media-wrapper__media g--lazy-01 f--ar"
            width="604"
            height="340"
        />
    </div>
    <div class="g--card-25__wrapper">
        <div class="g--card-25__wrapper__title c--content-a">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </div>
    </div>
</div>
```

## Editable variables

-   $background-color
-   $border-color
-   $border-radius
-   $border-style
-   $border-width
-   $card-min-height
-   $full-image-height
-   $hover-background-color
-   $hover-border-radius
-   $hover-img-zoom
-   $hover-shadow
-   $hover-title-color
-   $hover-title-underline-color
-   $hover-transform
-   $img-aspect-ratio
-   $img-height
-   $img-position
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
.g--card-25 {
    @include make-card-25();
    @include make-card-25-modifier(
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: $measure,
        // $border-style: solid,
        // $border-width: 1px,
        // $card-min-height: 500px,
        // $full-image-height: true,
        // $hover-background-color: map-get($color-options, g),
        // $hover-border-radius: $measure * 4,
        // $hover-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure*4 map-get($color-options, a),
        // $hover-title-color: map-get($color-options, h),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio: calc(16 / 9),
        // $img-height: 340px,
        // $img-position: center,
        // $meta-color: map-get($color-options, a),
        // $meta-font-weight: 400,
        // $meta-font: c,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font-weight: 400,
        // $title-font: c,
        // $title-max-lines: 3,
    );
}
```

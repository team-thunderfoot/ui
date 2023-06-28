# Card-54

## Layout

![alt text][card-54]

[card-54]: /src/img/global-components/card/card-54.jpg

## Html for a card

```html
<div class="g--card-54">
    <div class="g--card-54__bd">
        <p class="g--card-54__bd__title">This is the Job Title</p>
        <p class="g--card-54__bd__subtitle">Location</p>
    </div>
    <div class="g--card-54__wrapper">
        <svg class="g--card-54__wrapper__artwork" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 14L30 22L22 30L20.575 28.6L26.175 23L14 23L14 21L26.175 21L20.575 15.4L22 14Z" fill="black" />
            <rect x="43.5" y="43" width="43" height="42" rx="21" transform="rotate(-180 43.5 43)" stroke="black" />
        </svg>
    </div>
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
-   $hover-background-color
-   $hover-icon-color
-   $hover-icon-transform
-   $hover-shadow
-   $hover-title-color
-   $hover-transform
-   $icon-align
-   $icon-color
-   $icon-top
-   $icon-width
-   $subtitle-color
-   $subtitle-font-weight
-   $subtitle-font
-   $text-align
-   $title-color
-   $title-font-weight
-   $title-font

## Use

```scss
.g--card-54 {
    @include make-card-54();
    @include make-card-54-modifier(
        // $background-color: rgba(map-get($color-options, g), 0.7),
        // $border-radius: 1px,
        // $border-color: map-get($color-options, a),
        // $border-style: solid,
        // $border-width: 1px,
        // $hover-background-color: rgba(map-get($color-options, b)),
        // $hover-icon-color: rgba(map-get($color-options, f)),
        // $hover-icon-transform: translateY(4px),
        // $hover-shadow: 0 0 $measure * 2 map-get($color-options, h),
        // $hover-title-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $icon-align: top,
        // $icon-color: map-get($color-options, b),
        // $icon-top: 6px,
        // $icon-width: 24px,
        // $subtitle-color: map-get($color-options, a),
        // $subtitle-font-weight: 400,
        // $subtitle-font: f,
        // $text-align: right,
        // $title-color: map-get($color-options, a),
        // $title-font-weight: 400,
        // $title-font: c
    );
}
```

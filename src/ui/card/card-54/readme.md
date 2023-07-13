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

- $background-color
- $border-color
- $border-radius
- $border-style
- $border-width
- $hover-background-color
- $hover-border-color
- $hover-icon-background
- $hover-icon-border-color
- $hover-icon-color
- $hover-icon-transform
- $hover-shadow
- $hover-title-color
- $hover-title-underline-color
- $hover-title-underline-height
- $hover-transform
- $icon-align
- $icon-background
- $icon-border-color
- $icon-border-radius
- $icon-border-style
- $icon-border-width
- $icon-color-fill
- $icon-color-stroke
- $icon-top
- $icon-width
- $shadow
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $text-align
- $title-color
- $title-font
- $title-font-weight

## Use

```scss
.g--card-54 {
    @include make-card-54();
    @include make-card-54-modifier(
        // $background-color: rgba(map-get($color-options, g), 0.7),
        // $border-color: map-get($color-options, g),
        // $border-radius: $measure,
        // $border-style: double,
        // $border-width: 2px,
        // $hover-background-color: map-get($color-options, g),
        // $hover-border-color: map-get($color-options, e),
        // $hover-icon-background: map-get($color-options, a),
        // $hover-icon-border-color: map-get($color-options, b),
        // $hover-icon-color: map-get($color-options, b),
        // $hover-icon-transform: translateX($measure),
        // $hover-shadow: 0 0 $measure*2 map-get($color-options, g),
        // $hover-title-color: map-get($color-options, a),
        // $hover-title-underline-color: map-get($color-options, a),
        // $hover-title-underline-height: 2px,
        // $hover-transform: translateY(-$measure*2),
        // $icon-align: top,
        // $icon-background: map-get($color-options, g),
        // $icon-border-color: map-get($color-options, a),
        // $icon-border-radius: 50%,
        // $icon-border-style: solid,
        // $icon-border-width: 1px,
        // $icon-color-fill: map-get($color-options, a),
        // $icon-color-stroke: map-get($color-options, a),
        // $icon-top: 2px,
        // $icon-width: $measure*4,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $subtitle-color: map-get($color-options, a),
        // $subtitle-font: b,
        // $subtitle-font-weight: 400,
        // $text-align: center,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 600,
    );
}
```

# Card-45

## Layout

![alt text][card-45]

[card-45]: /src/img/global-components/card/card-45.jpg

## Html for a card

```html
<div class="g--card-45">
    <div class="g--card-45__wrapper">
        <p class="g--card-45__wrapper__hd">Heading</p>
        <p class="g--card-45__wrapper__bd">Lorem ipsum dolor sit amet consectetur. Vulputate facilisi ultrices pellentesque elit vel sit eu nascetur vitae.</p>
    </div>
    <div class="g--card-45__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-45__media-wrapper__media g--lazy-01" />
    </div>
</div>
```

##### \*Aspect Ratio

For the image, we have to add width, height and aspect ratio dynamically.

## Editable variables

- $background-color
- $border-color
- $border-radius
- $border-style
- $border-width
- $breakpoint
- $change-order-reponsive
- $content-color
- $content-font
- $content-font-weight
- $content-max-lines
- $heading-color
- $heading-font
- $heading-font-weight
- $hover-background-color
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-transform
- $img-aspect-ratio
- $img-background-color
- $img-fit
- $img-height
- $img-position
- $img-width
- $text-align

## use

```scss
.g--card-45 {
    @include make-card-45();
    @include make-card-45-modifier(
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: 0,
        // $border-style: solid,
        // $border-width: 1px,
        // $breakpoint: $tablets,
        // $change-order-reponsive: true,
        // $content-color: map-get($color-options, a),
        // $content-font: d,
        // $content-font-weight: 400,
        // $content-max-lines: 3,
        // $heading-color: map-get($color-options, a),
        // $heading-font: c,
        // $heading-font-weight: 400,
        // $hover-background-color: map-get($color-options, b),
        // $hover-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure*2 map-get($color-options, g),
        // $hover-title-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio: 2,
        // $img-background-color: lighten(map-get($color-options,a), 70%),
        // $img-fit: contain,
        // $img-height: 300px,
        // $img-position: center,
        // $img-width: auto,
        // $text-align: left,
    );
}
```

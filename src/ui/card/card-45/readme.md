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

- $content-font
- $content-max-lines
- $heading-font
- $border-radius
- $border-color
- $border-style
- $border-width
- $content-font-weight
- $hover-background-color
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-transform
- $img-aspect-ratio
- $img-height
- $img-position
- $img-fit
- $img-width
- $heading-font-weight
- $change-order-reponsive
- $content-color
- $heading-color
- $background-color
- $img-background-color
- $text-align
- $breakpoin

## use

```scss
.g--card-45 {
    @include make-card-45();
    @include make-card-45-modifier(
        $content-font: d,
        $content-max-lines: 3,
        $heading-font: c,
        $border-radius: $measure,
        $border-color: map-get($color-options, g),
        $border-style: solid,
        $border-width: 2px,
        $hover-background-color: map-get($color-options, b),
        $hover-img-zoom: 1.2,
        $hover-shadow: 0 0 $measure*2 map-get($color-options, g),
        $hover-title-color: map-get($color-options, h),
        $hover-transform: translateY(-$measure),
        $img-aspect-ratio: 2,
        // $img-height: 300px,
        $img-position: center,
        // $img-fit: contain,
        // $img-width: auto,
        $content-font-weight: 400,
        $heading-font-weight: 600,
        $change-order-reponsive: true,
        $content-color: map-get($color-options, a),
        $heading-color: map-get($color-options, g),
        $background-color: map-get($color-options, e),
        $img-background-color: map-get($color-options, g),
        $text-align: left,
        $breakpoint: $tablets
    );
}
```

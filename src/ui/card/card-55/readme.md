# Card-55

## Layout

![alt text][card-55]

[card-55]: /src/img/global-components/card/card-55.jpg

## Html for a card

```html
<div class="g--card-55">
    <div class="g--card-55__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-55__media-wrapper__media g--lazy-01"
        />
    </div>
    <div class="g--card-55__wrapper">
        <p class="g--card-55__wrapper__hd">Heading</p>
        <p class="g--card-55__wrapper__bd">Lorem ipsum dolor sit amet consectetur. Vulputate facilisi ultrices pellentesque elit vel sit eu nascetur vitae.</p>
        <div class="g--card-55__wrapper__ft">
            <p class="g--card-55__wrapper__ft__title">Person Name</p>
            <p class="g--card-55__wrapper__ft__subtitle">Job Position</p>
        </div>
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
- $hover-background-color
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-title-underline-color
- $hover-transform
- $img-aspect-ratio-responsive
- $img-height-responsive
- $img-position
- $person-color
- $person-font
- $person-font-weight
- $position-color
- $position-font
- $position-font-weight
- $text-align
- $title-color
- $title-font
- $title-font-weight

## use

```scss
.g--card-55 {
    @include make-card-55();
    @include make-card-55-modifier(
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: 0,
        // $border-style: solid,
        // $border-width: 1px,
        // $breakpoint: $tablets,
        // $card-min-height: 500px,
        // $change-order-reponsive: true,
        // $content-color: map-get($color-options, a),
        // $content-font: f,
        // $content-font-weight: 600,
        // $hover-background-color: map-get($color-options, b),
        // $hover-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure*2 map-get($color-options, g),
        // $hover-title-color: map-get($color-options, h),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio-responsive: 1.7,
        // $img-height-responsive: 1300px,
        // $img-position: bottom,
        // $person-color: map-get($color-options, a),
        // $person-font: f,
        // $person-font-weight: 600,
        // $position-color: map-get($color-options, a),
        // $position-font: f,
        // $position-font-weight: 400,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: f,
        // $title-font-weight: 400,
    );
}
```

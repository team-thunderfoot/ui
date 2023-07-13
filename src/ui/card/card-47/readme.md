# Card-47

## Layout

![alt text][card-47]

[card-47]: /src/img/global-components/card/card-47.jpg

## Html for a card

```html
<div class="g--card-47">
    <div class="g--card-47__wrapper">
        <p class="g--card-47__wrapper__hd">Heading</p>
        <p class="g--card-47__wrapper__bd">Lorem ipsum dolor sit amet consectetur. Vulputate facilisi ultrices pellentesque elit vel sit eu nascetur vitae.</p>
        <div class="g--card-47__wrapper__ft">
            <p class="g--card-47__wrapper__ft__title">Person Name</p>
            <p class="g--card-47__wrapper__ft__subtitle">Job Position</p>
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-47__wrapper__link">This is a link</a>
    </div>
    <div class="g--card-47__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-47__media-wrapper__media g--lazy-01" />
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
- $card-min-height
- $change-order-reponsive
- $content-color
- $content-font
- $content-font-weight
- $heading-color
- $heading-font
- $heading-font-weight
- $hover-background-color
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-transform
- $img-aspect-ratio-responsive
- $img-height-responsive
- $img-position
- $link-class
- $person-color
- $person-font
- $person-font-weight
- $position-color
- $position-font
- $position-font-weight
- $shadow
- $text-align

## use

```scss
.g--card-47 {
    @include make-card-47();
    @include make-card-47-modifier(
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
        // $heading-color: map-get($color-options, a),
        // $heading-font: f,
        // $heading-font-weight: 400,
        // $hover-background-color: map-get($color-options, b),
        // $hover-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure*2 map-get($color-options, g),
        // $hover-title-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio-responsive: 1.7,
        // $img-height-responsive: 1300px,
        // $img-position: bottom,
        // $link-class: g--link-01,
        // $person-color: map-get($color-options, a),
        // $person-font: f,
        // $person-font-weight: 600,
        // $position-color: map-get($color-options, a),
        // $position-font: f,
        // $position-font-weight: 400,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $text-align: left,
    );
}
```

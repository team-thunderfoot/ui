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
- $link-class
- $content-font
- $heading-font
- $person-font
- $position-font
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
- $img-aspect-ratio-responsive
- $img-height-responsive
- $img-position
- $heading-font-weight
- $person-font-weight
- $position-font-weight
- $change-order-reponsive
- $content-color
- $heading-color
- $person-color
- $position-color
- $background-color
- $text-align
- $breakpoint

## use

```scss
.g--card-47 {
    @include make-card-47();
    @include make-card-47-modifier(
        $link-class: g--link-01,
        $content-font: f,
        $heading-font: h,
        $person-font: h,
        $position-font: h,
        $border-radius: $measure,
        $border-color: map-get($color-options, g),
        $border-style: solid,
        $border-width: 2px,
        $content-font-weight: 600,
        $heading-font-weight: 400,
        $hover-background-color: map-get($color-options, b),
        $hover-img-zoom: 1.2,
        $hover-shadow: 0 0 $measure*2 map-get($color-options, g),
        $hover-title-color: map-get($color-options, h),
        $hover-transform: translateY(-$measure),
        $img-aspect-ratio: 1.7,
        // $img-height: 1300px,
        $img-position: bottom,
        $img-fit: cover,
        // $img-width: auto,
        $person-font-weight: 600,
        $position-font-weight: 400,
        $change-order-reponsive: true,
        $content-color: map-get($color-options, a),
        $heading-color: map-get($color-options, g),
        $person-color: map-get($color-options, g),
        $position-color: map-get($color-options, a),
        $background-color: lighten(map-get($color-options,a), 82%),
        $text-align: left,
        $breakpoint: $tablets
    );
}
```

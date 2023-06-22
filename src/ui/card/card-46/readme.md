# Card-46

## Layout

![alt text][card-46]

[card-46]: /src/img/global-components/card/card-46.jpg

## Html for a card

```html
<div class="g--card-46">
    <div class="g--card-46__wrapper">
        <p class="g--card-46__wrapper__hd">Heading</p>
        <p class="g--card-46__wrapper__bd">Lorem ipsum dolor sit amet consectetur. Vulputate facilisi ultrices pellentesque elit vel sit eu nascetur vitae.</p>
        <div class="g--card-46__wrapper__ft">
            <p class="g--card-46__wrapper__ft__title">Person Name</p>
            <p class="g--card-46__wrapper__ft__subtitle">Job Position</p>
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-46__wrapper__link">This is a link</a>
    </div>
    <div class="g--card-46__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-46__media-wrapper__media g--lazy-01" />
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
- $img-aspect-ratio
- $img-height
- $img-position
- $img-fit
- $img-width
- $img-background-color
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
.g--card-46 {
    @include make-card-46();
    @include make-card-46-modifier(
        $link-class: g--link-01,
        $content-font: f,
        $heading-font: f,
        $person-font: f,
        $position-font: f,
        $border-radius: 0,
        $border-color: map-get($color-options, a),
        $border-style: solid,
        $border-width: 1px,
        $content-font-weight: 600,
        $heading-font-weight: 400,
        $hover-background-color: map-get($color-options, b),
        $hover-img-zoom: 1.2,
        $hover-shadow: 0 0 $measure*2 map-get($color-options, g),
        $hover-title-color: map-get($color-options, h),
        $hover-transform: translateY(-$measure),
        // $img-aspect-ratio: 2,
        $img-height: 300px,
        $img-position: center,
        $img-fit: contain,
        // $img-width: auto,
        $person-font-weight: 600,
        $position-font-weight: 400,
        $change-order-reponsive: true,
        $content-color: map-get($color-options, a),
        $heading-color: map-get($color-options, a),
        $person-color: map-get($color-options, a),
        $position-color: map-get($color-options, a),
        $background-color: lighten(map-get($color-options,a), 82%),
        $img-background-color: lighten(map-get($color-options,a), 70%),
        $text-align: left,
        $breakpoint: $tablets
    );
}
```

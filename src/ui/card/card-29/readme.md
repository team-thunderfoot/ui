# Card-29

## Layout

![alt text][card-29]

[card-29]: /src/img/global-components/card/card-29.jpg

## Html for a card

```html
<div class="g--card-29">
    <div class="g--card-29__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-29__media-wrapper__media g--lazy-01 f--ar" width="604" height="340">
    </div>
    <div class="g--card-29__wrapper">
        <p class="g--card-29__wrapper__meta">Lorem ipsum</p>
        <p class="g--card-29__wrapper__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-29">
    <div class="g--card-29__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-29__media-wrapper__media g--lazy-01 f--ar" width="604" height="340">
    </div>
    <div class="g--card-29__wrapper">
        <p class="g--card-29__wrapper__meta">Lorem ipsum</p>
        <div class="g--card-29__wrapper__title c--content-a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
</div>
```

## Editable variables

- $background-color
- $border-color
- $border-radius
- $border-style
- $border-width
- $card-min-height
- $full-image-height
- $hover-background-color
- $hover-border-color
- $hover-border-radius
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-title-underline-color
- $hover-title-underline-height
- $hover-transform
- $img-aspect-ratio
- $img-height
- $img-position
- $meta-color
- $meta-font
- $meta-font-weight
- $shadow
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-29 {
    @include make-card-29();
    @include make-card-29-modifier(
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: $measure,
        // $border-style: solid,
        // $border-width: 1px,
        // $card-min-height: 500px,
        // $full-image-height: true,
        // $hover-background-color: map-get($color-options, g),
        // $hover-border-color: map-get($color-options, a),
        // $hover-border-radius: $measure*2,
        // $hover-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure*4 map-get($color-options, a),
        // $hover-title-color: map-get($color-options, h),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio: calc(16 / 9),
        // $img-height: 340px,
        // $img-position: center,
        // $meta-color: map-get($color-options, a),
        // $meta-font: f,
        // $meta-font-weight: 400,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
    );
}
```

# Card-43

## Layout

![alt text][card-43]

[card-43]: /src/img/global-components/card/card-43.jpg

## Html for a card

```html
<div class="g--card-43">
    <div class="g--card-43__wrapper">
        <p class="g--card-43__wrapper__hd">This is a card lorem ispum dolor sit</p>
        <p class="g--card-43__wrapper__bd">Lorem ipsum dolor sit amet consectetur. Vulputate facilisi ultrices pellentesque elit vel sit eu nascetur vitae.</p>
    </div>
    <div class="g--card-43__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-43__media-wrapper__media g--lazy-01" />
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-43">
    <div class="g--card-43__wrapper">
        <p class="g--card-43__wrapper__hd">Heading</p>
        <div class="g--card-43__wrapper__bd c--content-a">Lorem ipsum dolor sit amet consectetur. Vulputate facilisi ultrices pellentesque elit vel sit eu nascetur vitae.</div>
    </div>
    <div class="g--card-43__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-43__media-wrapper__media g--lazy-01" />
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
- $breakpoint
- $card-min-height
- $change-order-reponsive
- $content-color
- $content-font
- $content-font-weight
- $content-max-lines
- $hover-background-color
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-title-underline-color
- $hover-transform
- $img-aspect-ratio-responsive
- $img-height-responsive
- $img-position
- $shadow
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

```scss
.g--card-43 {
    @include make-card-43();
    @include make-card-43-modifier(
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: $measure,
        // $border-style: solid,
        // $border-width: 1px,
        // $breakpoint: $tablets,
        // $card-min-height: 500px,
        // $change-order-reponsive: true,
        // $content-color: map-get($color-options, a),
        // $content-font: f,
        // $content-font-weight: 400,
        // $content-max-lines: 3,
        // $hover-background-color: map-get($color-options, g),
        // $hover-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure*4 map-get($color-options, a),
        // $hover-title-color: map-get($color-options, h),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio-responsive: 1.7,
        // $img-height-responsive: 340px,
        // $img-position: center,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
    );
}
```

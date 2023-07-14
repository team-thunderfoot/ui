# Card-07

## Layout

![alt text][card-07]

[card-07]: /src/img/global-components/card/card-07.jpg

## Html for a card

```html
<div class="g--card-07">
    <div class="g--card-07__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-07__media-wrapper__media g--lazy-01"
        />
    </div>
    <h3 class="g--card-07__title">Lorem ipsum</h3>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-07">
    <div class="g--card-07__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-07__media-wrapper__media g--lazy-01"
        />
    </div>
    <div class="g--card-07__title c--content-a">Lorem ipsum</div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color
- $border-color
- $border-radius
- $border-style
- $border-width
- $card-min-height
- $hover-background-color
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-title-underline-color
- $hover-transform
- $img-aspect-ratio
- $img-fit
- $img-height
- $img-position
- $img-width
- $shadow
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

```scss
.g--card-07 {
    @include make-card-07();
    @include make-card-07-modifier(
        // $background-color: lighten(map-get($color-options, a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: $measure,
        // $border-style: solid,
        // $border-width: 1px,
        // $card-min-height: 500px,
        // $hover-background-color: map-get($color-options, g),
        // $hover-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure * 4 map-get($color-options, a),
        // $hover-title-color: map-get($color-options, h),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio: 1.7,
        // $img-fit: cover,
        // $img-height: 340px,
        // $img-position: center,
        // $img-width: auto,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3
    );
}
```

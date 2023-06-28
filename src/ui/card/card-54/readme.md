# Card-54

## Layout

![alt text][card-54]

[card-54]: /src/img/global-components/card/card-54.jpg

## Html for a card

```html
<div class="g--card-54">
    <h3 class="g--card-54__title">Lorem ipsum</h3>
    <p class="g--card-54__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-54">
    <h3 class="g--card-54__title">Lorem ipsum</h3>
    <div class="g--card-54__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

- $background-color
- $border-color
- $border-style
- $border-width
- $border-radius
- $hover-background-color
- $hover-shadow
- $hover-title-color
- $hover-transform
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $subtitle-max-lines
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

```scss
.g--card-54{
    @include make-card-54();
    @include make-card-54-modifier(
        // $background-color: rgba(map-get($color-options, a), .1),
        // $border-color: map-get($color-options, a),
        // $border-style: solid,    
        // $border-width: 1px,
        // $title-color: map-get($color-options, a),
        // $title-font-weight: 400,
        // $title-font: c,
    );
    &--second{
        @include make-card-54-modifier(
            // $background-color: lighten(map-get($color-options,a), 82%),
            // $border-color: map-get($color-options, a),
            // $border-radius: $measure,
            // $border-style: solid,
            // $border-width: 1px,
            // $hover-background-color: map-get($color-options, g),
            // $hover-shadow: 0 0 $measure*4 map-get($color-options, a),
            // $hover-title-color: map-get($color-options, h),
            // $hover-transform: translateY(-$measure),
            // $subtitle-color: map-get($color-options, a)
            // $subtitle-font-weight: 400,
            // $subtitle-font: f,
            // $subtitle-max-lines: 3,
            // $text-align: left,
            // $title-color: map-get($color-options, a),
            // $title-font-weight: 400,
            // $title-font: c,
            // $title-max-lines: 3
        );
    }
}
```
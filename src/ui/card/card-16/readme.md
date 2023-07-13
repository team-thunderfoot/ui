# Card-16

## Layout

![alt text][card-16]

[card-16]: /src/img/global-components/card/card-16.jpg

## Html for a card

```html
<div class="g--card-16">
    <h3 class="g--card-16__title">Lorem ipsum</h3>
    <p class="g--card-16__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-16__link">This is a link</a>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-16">
    <h3 class="g--card-16__title">Lorem ipsum</h3>
    <div class="g--card-16__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-16__link">This is a link</a>
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
- $card-min-height
- $hover-background-color
- $hover-shadow
- $hover-title-color
- $hover-transform
- $link-class
- $link-font
- $shadow
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
.g--card-16{
    @include make-card-16();
    @include make-card-16-modifier(
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-style: solid,
        // $border-width: 1px,
        // $border-radius: $measure,
        // $card-min-height: 500px,
        // $hover-background-color: map-get($color-options, g),
        // $hover-shadow: 0 0 $measure*4 map-get($color-options, a),
        // $hover-title-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $link-class: g--link-01,
        // $link-font: f,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $subtitle-color: map-get($color-options, a)
        // $subtitle-font: f,
        // $subtitle-font-weight: 400,
        // $subtitle-max-lines: 3,
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 
    );
}
```
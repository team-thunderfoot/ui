# Card-53

## Layout

![alt text][card-53]

[card-53]: /src/img/global-components/card/card-53.jpg

## Html for a card

```html
<div class="g--card-53">
    <div class="g--card-53__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/slider/quotes.svg"></div>
    <div class="g--card-53__ft-items">
        <h3 class="g--card-53__ft-items__title">
            “Lorem ipsum dolor sit amet consectetur. Vulputate facilisi ultrices pellentesque elit
            vel sit eu nascetur vitae.”
        </h3>
        <p class="g--card-53__ft-items__author">Person Name</p>
        <p class="g--card-53__ft-items__subtitle">Job Position</p>
        <a href="" class="g--card-53__ft-items__link">This is a link</a>
    </div>
</div>
```

## Editable variables

- $author-color
- $author-font
- $author-font-weight
- $author-max-lines
- $background-color
- $background-position
- $background-size
- $border-color
- $border-radius
- $border-style
- $border-width
- $hover-author-color
- $hover-background-color
- $hover-shadow
- $hover-subtitle-color
- $hover-title-color
- $hover-title-underline-color
- $hover-transform
- $link-class
- $link-font
- $mask-color
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $subtitle-max-lines
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-53 {
    @include make-card-53();
    @include make-card-53-modifier(
        // $author-color: map-get($color-options, d),
        // $author-font: d,
        // $author-font-weight: 400,
        // $author-max-lines: false,
        // $background-color: map-get($color-options, a),
        // $background-position: -3% -28%,
        // $background-size: 20%,
        // $border-color: map-get($color-options, a),
        // $border-radius: 20px,
        // $border-style: solid,
        // $border-width: 2px,
        // $card-min-height: 500px,
        // $hover-author-color: map-get($color-options, g),
        // $hover-background-color: map-get($color-options, e),
        // $hover-shadow: 0 0 $measure * 4 map-get($color-options, a),
        // $hover-subtitle-color: map-get($color-options, g),
        // $hover-title-color: map-get($color-options, g),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $link-class: g--link-01,
        // $link-font: f,
        // $mask-color: rgba(map-get($color-options, b), 0.5),
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $subtitle-color: map-get($color-options, d),
        // $subtitle-font: f,
        // $subtitle-font-weight: 400,
        // $subtitle-max-lines: 2,
        // $text-align: center,
        // $title-color: map-get($color-options, d),
        // $title-font: b,
        // $title-font-weight: 400,
        // $title-max-lines: 3
    );
}
```

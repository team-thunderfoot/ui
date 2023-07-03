# Card-51

## Layout

![alt text][card-51]

[card-51]: /src/img/global-components/card/card-51.jpg

## Html for a card

```html
<div class="g--card-51">
    <div class="g--card-51__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg">
        <div class="g--card-51__bg-items__artwork"></div>
    </div>
    <div class="g--card-51__ft-items">
        <p class="g--card-51__ft-items__meta">Type</p>
        <h3 class="g--card-51__ft-items__title">Lorem ipsum dolor sit amet</h3>
        <div class="g--card-51__ft-items__wrapper">
            <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-51__ft-items__wrapper__link">This is a link</a>
        </div>
    </div>
</div>
```

If you want the image appear at hover, the HTML should be:
```html
<div class="g--card-51">
    <div class="g--card-51__bg-items">
        <div class="g--card-51__bg-items__artwork g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"></div>
    </div>
    <div class="g--card-51__ft-items">
        <p class="g--card-51__ft-items__meta">Type</p>
        <h3 class="g--card-51__ft-items__title">Lorem ipsum dolor sit amet</h3>
        <div class="g--card-51__ft-items__wrapper">
            <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-51__ft-items__wrapper__link">This is a link</a>
        </div>
    </div>
</div>
```

If you want the title to be a c--content, the HTML should be:
```html
<div class="g--card-51">
    <div class="g--card-51__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg">
        <div class="g--card-51__bg-items__artwork"></div>
    </div>
    <div class="g--card-51__ft-items">
        <p class="g--card-51__ft-items__meta">Type</p>
        <div class="g--card-51__ft-items__title c--content-a">Lorem ipsum dolor sit amet</div>
        <div class="g--card-51__ft-items__wrapper">
            <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-51__ft-items__wrapper__link">This is a link</a>
        </div>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color
- $background-position
- $background-repeat
- $background-size
- $border-color
- $border-radius
- $border-style
- $border-width
- $card-aspect-ratio
- $card-height
- $hover-background-color
- $hover-background-position
- $hover-background-repeat
- $hover-background-size
- $hover-mask-background-color
- $hover-meta-color
- $hover-shadow
- $hover-title-color
- $hover-transform
- $link-class
- $link-hide-by-default
- $mask-background-color
- $meta-color
- $meta-font
- $meta-font-weight
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-51 {
    @include make-card-51();
    @include make-card-51-modifier(
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $background-position: center,
        // $background-repeat: no-repeat,
        // $background-size: cover,
        // $border-color: map-get($color-options, f),
        // $border-radius: $measure*4,
        // $border-style: solid,
        // $border-width: 6px,
        // $card-aspect-ratio: calc(3 / 4),
        // $card-height: 200px,
        // $hover-background-color: map-get($color-options, g),
        // $hover-background-position: bottom right,
        // $hover-background-repeat: no-repeat,
        // $hover-background-size: cover,
        // $hover-mask-background-color: rgba(map-get($color-options, f), .3),
        // $hover-meta-color: map-get($color-options, a),
        // $hover-shadow: 0 0 $measure*2 map-get($color-options, f),
        // $hover-title-color: map-get($color-options, b),
        // $hover-transform: translateY($measure),
        // $link-class: g--link-01,
        // $link-hide-by-default: no,
        // $mask-background-color: rgba(map-get($color-options, a), .3),
        // $meta-color: map-get($color-options, b),
        // $meta-font: f,
        // $meta-font-weight: 400,
        // $text-align: left,
        // $title-color: map-get($color-options, b),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 5,
    );
}
```

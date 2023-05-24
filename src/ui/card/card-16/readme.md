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
- $hover-background-color
- $hover-shadow
- $hover-title-color
- $hover-transform
- $link-class
- $link-class-modifier
- $link-font
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
        $background-color: rgba(map-get($color-options, a), .1),
        $border-color: map-get($color-options, a),
        $border-style: solid,    
        $border-width: 2px,
        $link-class: g--link-01,
        $title-color: map-get($color-options, a),
        $title-font: d,
        $title-font-weight: 600,
    );
    &--second{
        @include make-card-16-modifier(
            $background-color: rgba(map-get($color-options, g), .7),
            $subtitle-color: map-get($color-options, b),
            $title-color: map-get($color-options, d),
            $title-font: c,
            // $border-radius: false,
            $hover-background-color: map-get($color-options, g),
            $hover-shadow: 0 0 $measure*2 map-get($color-options, h),
            $hover-title-color: map-get($color-options, h),
            $hover-transform: translateY(-$measure),
            $link-font: d,
            $subtitle-font: d,
            $subtitle-font-weight: 400,
            $subtitle-max-lines: 3,
            $text-align: center,
            $title-font-weight: 700,
            $title-max-lines: 2,
        );
    }
}
```
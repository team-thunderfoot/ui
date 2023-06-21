# Card-13

## Layout

![alt text][card-13]

[card-13]: /src/img/global-components/card/card-13.jpg

## Html for a card

```html
<div class="g--card-13">
    <h3 class="g--card-13__title">Lorem ipsum</h3>
    <p class="g--card-13__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-13">
    <h3 class="g--card-13__title">Lorem ipsum</h3>
    <div class="g--card-13__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
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
.g--card-13{
    @include make-card-13();
    @include make-card-13-modifier(
        $background-color: rgba(map-get($color-options, a), .1),
        $border-color: map-get($color-options, a),
        $border-style: solid,    
        $border-width: 1px,
        $title-color: map-get($color-options, a),
        $title-font: c,
        $title-font-weight: 400,
    );
    &--second{
        @include make-card-13-modifier(
            // $background-color: lighten(map-get($color-options,a), 82%),
            // $border-color: map-get($color-options, a),
            // $border-style: solid,
            // $border-width: 1px,
            // $border-radius: $measure,
            // $hover-background-color: ,
            // $hover-shadow: ,
            // $hover-title-color: ,
            // $hover-transform: ,
            // $subtitle-color: map-get($color-options, a)
            // $subtitle-font: f,
            // $subtitle-font-weight: ,
            // $subtitle-max-lines: ,
            //$text-align: left,
            // $title-color: map-get($color-options, a),
            // $title-font: c,
            // $title-font-weight: 400,
            // $title-max-lines: 
        );
    }
}
```
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
        $border-width: 2px,
        $title-color: map-get($color-options, a),
        $title-font: d,
        $title-font-weight: 600,
    );
    &--second{
        @include make-card-13-modifier(
            // $background-color: false,
            // $border-color: false,
            // $border-style: false,
            // $border-width: false,
            // $border-radius: false,
            // $hover-background-color: false,
            // $hover-shadow: false,
            // $hover-title-color: false,
            // $hover-transform: false,
            // $subtitle-color: false,
            // $subtitle-font: false,
            // $subtitle-font-weight: false,
            // $subtitle-max-lines: false,
            // $text-align: false,
            // $title-color: false,
            // $title-font: false,
            // $title-font-weight: false,
            // $title-max-lines: false
        );
    }
}
```
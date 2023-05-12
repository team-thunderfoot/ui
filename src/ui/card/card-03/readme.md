# Card-03

## Layout

![alt text][card-03]

[card-03]: /src/img/global-components/card/card-03.png

## Html for a card

```html
<div class="g--card-03">
    <div class="g--card-03__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-03__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-03__title">Lorem ipsum</h3>
    <p class="g--card-03__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-03">
    <div class="g--card-03__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-03__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-03__title">Lorem ipsum</h3>
    <div class="g--card-03__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

- $title-color
- $title-font
- $hover-img-zoom: false
- $hover-title-color: false
- $hover-transform: false
- $img-aspect-ratio: false
- $img-height: false
- $img-size: false
- $img-width: false
- $subtitle-color: false
- $subtitle-font: false
- $subtitle-font-weight: false
- $subtitle-max-lines: false
- $text-align: false
- $title-font-weight: false
- $title-max-lines: false

## Use

```scss
.g--card-03{
    @include make-card-03(
        $title-color: map-get($color-options, a),
        $title-font: b,
        // $hover-img-zoom: false,
        // $hover-title-color: false,
        // $hover-transform: false,
        // $img-aspect-ratio: false,
        // $img-height: false,
        // $img-size: false,
        // $img-width: false,
        // $subtitle-color: false,
        // $subtitle-font: false,
        // $subtitle-font-weight: false,
        // $subtitle-max-lines: false,
        // $text-align: false,
        // $title-font-weight: false,
        // $title-max-lines: false,
    );
    &--second{
        @include make-card-03-modifier(
            // $subtitle-color: false,
            // $title-color: false,
            // $title-font: false,
            // $hover-img-zoom: false,
            // $hover-title-color: false,
            // $hover-transform: false,
            // $img-aspect-ratio: false,
            // $img-height: false,
            // $img-size: false,
            // $img-width: false,
            // $subtitle-font: false,
            // $subtitle-font-weight: d,
            // $subtitle-max-lines: false,
            // $text-align: false,
            // $title-font-weight: false,
            // $title-max-lines: false,
        );
    }
}
```
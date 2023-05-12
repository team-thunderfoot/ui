# Card-05

## Layout

![alt text][card-05]

[card-05]: /src/img/global-components/card/card-05.png

## Html for a card

```html
<div class="g--card-05">
    <div class="g--card-05__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-05__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-05__title">Card 01</h3>
    <p class="g--card-05__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-05__link">This is a link</a>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-05">
    <div class="g--card-05__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-05__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-05__title">Card 01</h3>
    <div class="g--card-05__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-05__link">This is a link</a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

- $background-color
- $link-class
- $title-color
- $title-font
- $border-radius: false
- $hover-background-color: false
- $hover-img-zoom: false
- $hover-shadow: false
- $hover-title-color: false
- $hover-transform: false
- $img-aspect-ratio: false
- $img-height: false
- $img-size: false
- $img-position: false
- $img-width: false
- $link-font: false
- $subtitle-color: false
- $subtitle-font: false
- $subtitle-font-weight: false
- $subtitle-max-lines: false
- $text-align: false
- $title-font-weight: false
- $title-max-lines: false

## Use

```scss
.g--card-05{
    @include make-card-05(
        $background-color: rgba(map-get($color-options, a), .5),
        $link-class: g--link-01,
        $title-color: map-get($color-options, a),
        $title-font: b,
        // $border-radius: false,
        // $hover-background-color: false,
        // $hover-img-zoom: false,
        // $hover-shadow: false,
        // $hover-title-color: false,
        // $hover-transform: false,
        // $img-aspect-ratio: false,
        // $img-height: false,
        // $img-size: false,
        // $img-position: false,
        // $img-width: false,
        // $link-font: false,
        // $subtitle-color: false,
        // $subtitle-font: false,
        // $subtitle-font-weight: false,
        // $subtitle-max-lines: false,
        // $text-align: false,
        // $title-font-weight: false,
        // $title-max-lines: false,
    );
    &--second{
        @include make-card-05-modifier(
            // $background-color: false,
            // $subtitle-color: false,
            // $title-color: false,
            // $title-font: false,
            // $border-radius: false,
            // $hover-background-color: false,
            // $hover-img-zoom: false,
            // $hover-shadow: false,
            // $hover-title-color: false,
            // $hover-transform: false,
            // $img-aspect-ratio: false,
            // $img-height: false,
            // $img-size: false,
            // $img-position: false,
            // $img-width: false,
            // $link-class: false,
            // $link-font: false,
            // $subtitle-font: false,
            // $subtitle-font-weight: false,
            // $subtitle-max-lines: false,
            // $text-align: false,
            // $title-font-weight: false,
            // $title-max-lines: false,
        );
    }
}
```
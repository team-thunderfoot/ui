# Card-07

## Layout

![alt text][card-07]

[card-07]: /src/img/global-components/card/card-07.png

## Html for a card

```html
<div class="g--card-07">
    <div class="g--card-07__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-07__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-07__title">Lorem ipsum</h3>
    <p class="g--card-07__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-07__link">This is a link</a>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-07">
    <div class="g--card-07__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-07__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-07__title">Lorem ipsum</h3>
    <div class="g--card-07__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-07__link">This is a link</a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

- $link-class,
- $title-color
- $title-font
- $hover-img-zoom: false
- $hover-title-color: false
- $hover-transform: false
- $img-aspect-ratio: false
- $img-height: false
- $img-size: false
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
.g--card-07{
    @include make-card-07(
        $link-class: g--link-02,
        $title-color: map-get($color-options, a),
        $title-font: b,
        // $hover-img-zoom: false,
        // $hover-title-color: false,
        // $hover-transform: false,
        // $img-aspect-ratio: false,
        // $img-height: false,
        // $img-size: false,
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
        @include make-card-07-modifier(
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
            // $link-class: false,
            // $link-font: false,
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
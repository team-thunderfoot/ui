# Card-04

## Layout

![alt text][card-04]

[card-04]: /src/img/global-components/card/card-04.png

## Html for a card

```html
<div class="g--card-04 g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-bg-placeholder.jpg">
    <div class="g--card-04__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-04__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-04__title">Lorem ipsum</h3>
    <p class="g--card-04__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-04 g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-bg-placeholder.jpg">
    <div class="g--card-04__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-04__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-04__title">Lorem ipsum</h3>
    <div class="g--card-04__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

- $background-position
- $background-size
- $border-radius
- $hover-background-img-zoom
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-transform
- $img-aspect-ratio
- $img-height
- $img-position
- $img-size
- $img-width
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

## Use

```scss
.g--card-04{
    @include make-card-04();
    &--second{
        @include make-card-04-modifier(
            // $background-position: false,
            // $background-size: false,
            // $border-radius: false,
            // $hover-background-img-zoom: false,
            // $hover-img-zoom: false,
            // $hover-shadow: false,
            // $hover-title-color: false,
            // $hover-transform: false,
            // $img-aspect-ratio: false,
            // $img-height: false,
            // $img-position: false,
            // $img-size: false,
            // $img-width: false,
            // $mask-color: false,
            // $subtitle-color: false,
            // $subtitle-font: false,
            // $subtitle-font-weight: false,
            // $subtitle-max-lines: false,
            // $text-align: false,
            // $title-color: false,
            // $title-font: false,
            // $title-font-weight: false,
            // $title-max-lines: false,
        );
    }
}
```
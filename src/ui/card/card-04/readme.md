# Card-04

## Layout

![alt text][card-04]

[card-04]: /src/img/global-components/card/card-04.jpg

## Html for a card

```html
<div class="g--card-04">
    <div class="g--card-04__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-04__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-04__title">Lorem ipsum</h3>
    <p class="g--card-04__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-04__link">This is a link</a>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-04">
    <div class="g--card-04__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-04__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-04__title">Lorem ipsum</h3>
    <div class="g--card-04__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-04__link">This is a link</a>
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
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-transform
- $img-aspect-ratio
- $img-height
- $img-position
- $img-size
- $img-width
- $link-class
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
.g--card-04{
    @include make-card-04();
    @include make-card-04-modifier(
        // $background-color: false,
        // $border-color: false,
        // $border-style: false,
        // $border-width: false,
        // $border-radius: false,
        // $hover-background-color: false,
        // $hover-img-zoom: false,
        // $hover-shadow: false,
        // $hover-title-color: false,
        // $hover-transform: false,
        // $img-aspect-ratio: false,
        // $img-height: false,
        // $img-position: false,
        // $img-size: false,
        // $img-width: false,
        // $link-class: false,
        // $link-font: false,
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
```
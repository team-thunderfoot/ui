# Card-07

## Layout

![alt text][card-07]

[card-07]: /src/img/global-components/card/card-07.jpg

## Html for a card

```html
<div class="g--card-07">
    <div class="g--card-07__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-07__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-07__title">Lorem ipsum</h3>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-07">
    <div class="g--card-07__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-07__media-wrapper__media g--lazy-01">
    </div>
    <div class="g--card-07__title c--content-a">Lorem ipsum</div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

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
- $img-fit
- $img-width
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

```scss
.g--card-07{
    @include make-card-07();
    @include make-card-07-modifier(
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
        // $img-fit: false,
        // $img-width: false,
        // $text-align: false,
        // $title-color: false,
        // $title-font: false,
        // $title-font-weight: false,
        // $title-max-lines: false,
    );
}
```

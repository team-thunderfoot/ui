# Card-17

## Layout

![alt text][card-17]

[card-17]: /src/img/global-components/card/card-17.jpg

## Html for a card

```html
<div class="g--card-17">
    <h3 class="g--card-17__title">Lorem ipsum</h3>
    <p class="g--card-17__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-17__link">This is a link</a>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-17">
    <h3 class="g--card-17__title">Lorem ipsum</h3>
    <div class="g--card-17__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-17__link">This is a link</a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

- $hover-title-color
- $hover-transform
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
.g--card-17{
    @include make-card-17();
    @include make-card-17-modifier(
        // $hover-img-zoom: false,
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
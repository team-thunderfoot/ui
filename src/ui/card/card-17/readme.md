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
- $hover-title-underline-color
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
        // $hover-title-color: map-get($color-options, h),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $link-class: g--link-02--second,
        // $link-font: f,
        // $subtitle-color: map-get($color-options, g),
        // $subtitle-font: f,
        // $subtitle-font-weight: 400,
        // $subtitle-max-lines: 3,
        // $text-align: left,
        // $title-color: map-get($color-options, g),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
    );
}
```
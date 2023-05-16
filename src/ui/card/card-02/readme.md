# Card-02

## Layout

![alt text][card-02]

[card-02]: /src/img/global-components/card/card-02.png

## Html for a card

```html
<div class="g--card-02">
    <div class="g--card-02__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-02__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-02__title">Lorem ipsum</h3>
    <p class="g--card-02__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-02">
    <div class="g--card-02__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-02__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-02__title">Lorem ipsum</h3>
    <div class="g--card-02__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

- $border-color
- $border-style
- $border-width
- $title-color
- $title-font
- $background-color
- $border-radius
- $hover-background-color
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-transform
- $img-aspect-ratio
- $img-height
- $img-size
- $img-width
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $subtitle-max-lines
- $text-align
- $title-font-weight
- $title-max-lines

## Use

```scss
.g--card-02{
    @include make-card-02();
    @include make-card-02-modifier(
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
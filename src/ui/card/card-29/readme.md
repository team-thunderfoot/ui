# Card-29

## Layout

![alt text][card-29]

[card-29]: /src/img/global-components/card/card-29.jpg

## Html for a card

```html
<div class="g--card-29">
    <div class="g--card-29__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-29__media-wrapper__media g--lazy-01 f--ar" width="604" height="340">
    </div>
    <div class="g--card-29__wrapper">
        <p class="g--card-29__wrapper__meta">Lorem ipsum</p>
        <p class="g--card-29__wrapper__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-29">
    <div class="g--card-29__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-29__media-wrapper__media g--lazy-01 f--ar" width="604" height="340">
    </div>
    <div class="g--card-29__wrapper">
        <p class="g--card-29__wrapper__meta">Lorem ipsum</p>
        <div class="g--card-29__wrapper__title c--content-a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
</div>
```

## Editable variables

- $background-color
- $border-color
- $border-style
- $border-width
- $border-radius
- $full-image-height
- $hover-background-color
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-transform
- $img-aspect-ratio
- $img-height
- $img-position
- $meta-color
- $meta-font
- $meta-font-weight
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-29 {
    @include make-card-29();
    @include make-card-29-modifier(
        // $background-color: false,
        // $border-color: false,
        // $border-style: false,
        // $border-width: false,
        // $border-radius: false,
        // $full-image-height: false,
        // $hover-background-color: false,
        // $hover-img-zoom: false,
        // $hover-shadow: false,
        // $hover-title-color: false,
        // $hover-transform: false,
        // $img-aspect-ratio: false,
        // $img-height: false,
        // $img-position: false,
        // $meta-color: false,
        // $meta-font: false,
        // $meta-font-weight: false,
        // $text-align: false,
        // $title-color: false,
        // $title-font: false,
        // $title-font-weight: false,
        // $title-max-lines: false,
    );
}
```

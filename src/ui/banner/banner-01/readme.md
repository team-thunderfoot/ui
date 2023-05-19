# banner-01

## Layout

![alt text][banner-01]

[banner-01]: /src/img/global-components/banner/banner-01.png

## Html for a banner

```html
<div class="g--banner-01">
    <div class="g--banner-01__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/banner/banner-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--banner-01__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--banner-01__title">Lorem ipsum</h3>
    <p class="g--banner-01__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--banner-01">
    <div class="g--banner-01__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/banner/banner-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--banner-01__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--banner-01__title">Lorem ipsum</h3>
    <div class="g--banner-01__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
</div>
```

## Editable variables

- $background-color
- $title-color
- $title-font
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
.g--banner-01{
    @include make-banner-01();
    @include make-banner-01-modifier(
        // $background-color: false,
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
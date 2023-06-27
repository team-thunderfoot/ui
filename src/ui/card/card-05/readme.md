# Card-05

## Layout

![alt text][card-05]

[card-05]: /src/img/global-components/card/card-05.jpg

## Html for a card

```html
<div class="g--card-05">
    <div class="g--card-05__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-05__media-wrapper__media g--lazy-01"
        />
    </div>
    <h3 class="g--card-05__title">Lorem ipsum</h3>
    <p class="g--card-05__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-05__link">This is a link</a>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-05">
    <div class="g--card-05__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-05__media-wrapper__media g--lazy-01"
        />
    </div>
    <h3 class="g--card-05__title">Lorem ipsum</h3>
    <div class="g--card-05__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-05__link">This is a link</a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

-   $hover-img-zoom
-   $hover-title-color
-   $hover-transform
-   $img-aspect-ratio
-   $img-fit
-   $img-height
-   $img-position
-   $img-width
-   $link-class
-   $link-font
-   $subtitle-color
-   $subtitle-font
-   $subtitle-font-weight
-   $subtitle-max-lines
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## Use

```scss
.g--card-05 {
    @include make-card-05();
    @include make-card-05-modifier(
        // $hover-img-zoom: 1.2,
        // $hover-title-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio: 1.7,
        // $img-fit: cover,
        // $img-height: 340px,
        // $img-position: center,
        // $img-width: auto,
        // $link-class: g--link-01,
        // $link-font: f,
        // $subtitle-color: map-get($color-options, a) $subtitle-font: f,
        // $subtitle-font-weight: 400,
        // $subtitle-max-lines: 3,
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font-weight: 400,
        // $title-font: c,
        // $title-max-lines: 3
    );
}
```

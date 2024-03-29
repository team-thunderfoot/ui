# Card-02

## Layout

![alt text][card-02]

[card-02]: /src/img/global-components/card/card-02.jpg

## Html for a card

```html
<div class="g--card-02">
    <div class="g--card-02__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-02__media-wrapper__media g--lazy-01"
        />
    </div>
    <h3 class="g--card-02__title">Lorem ipsum</h3>
    <p class="g--card-02__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-02">
    <div class="g--card-02__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-02__media-wrapper__media g--lazy-01"
        />
    </div>
    <h3 class="g--card-02__title">Lorem ipsum</h3>
    <div class="g--card-02__subtitle c--content-a">
        Solution description lorem ipsum dolor sit amet consectetur.
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

-   $hover-img-border-radius
-   $hover-img-zoom
-   $hover-title-color
-   $hover-title-underline-color
-   $hover-transform
-   $img-aspect-ratio
-   $img-fit
-   $img-height
-   $img-position
-   $img-width
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
.g--card-02 {
    @include make-card-02();
    @include make-card-02-modifier(
        // $hover-img-border-radius: $measure,
        // $hover-img-zoom: 1.2,
        // $hover-title-color: map-get($color-options, h),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio: 1.7,
        // $img-fit: cover,
        // $img-height: 340px,
        // $img-position: center,
        // $img-width: auto,
        // $subtitle-color: map-get($color-options, a) $subtitle-font: f,
        // $subtitle-font-weight: 400,
        // $subtitle-font: d,
        // $subtitle-max-lines: 3,
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font-weight: 400,
        // $title-font: c,
        // $title-max-lines: 3
    );
}
```

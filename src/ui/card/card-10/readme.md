# Card-10

## Layout

![alt text][card-10]

[card-10]: /src/img/global-components/card/card-10.jpg

## Html for a card

```html
<div class="g--card-10">
    <div class="g--card-10__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-10__media-wrapper__media g--lazy-01"
        />
    </div>
    <h3 class="g--card-10__title">Lorem ipsum</h3>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-10__link">This is a link</a>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-10">
    <div class="g--card-10__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-10__media-wrapper__media g--lazy-01"
        />
    </div>
    <div class="g--card-10__title c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-10__link">This is a link</a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

-   $background-color
-   $border-color
-   $border-radius
-   $border-style
-   $border-width
-   $hover-background-color
-   $hover-img-zoom
-   $hover-shadow
-   $hover-title-color
-   $hover-transform
-   $img-aspect-ratio
-   $img-fit
-   $img-height
-   $img-position
-   $img-width
-   $link-class
-   $link-font
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## Use

```scss
.g--card-10 {
    @include make-card-10();
    @include make-card-10-modifier(
        // $background-color: lighten(map-get($color-options, a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: $measure,
        // $border-style: solid,
        // $border-width: 1px,
        // $hover-background-color: map-get($color-options, g),
        // $hover-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure * 4 map-get($color-options, a),
        // $hover-title-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio: 1.7,
        // $img-fit: cover,
        // $img-height: 340px,
        // $img-position: center,
        // $img-width: auto,
        // $link-class: g--link-01,
        // $link-font: f,
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3
    );
}
```

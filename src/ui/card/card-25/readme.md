# Card-25

## Layout

![alt text][card-25]

[card-25]: /src/img/global-components/card/card-25.jpg

## Html for a card

```html
<div class="g--card-25">
    <div class="g--card-25__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-25__media-wrapper__media g--lazy-01 f--ar" width="604" height="340">
    </div>
    <div class="g--card-25__wrapper">
        <p class="g--card-25__wrapper__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-25">
    <div class="g--card-25__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-25__media-wrapper__media g--lazy-01 f--ar" width="604" height="340">
    </div>
    <div class="g--card-25__wrapper">
        <div class="g--card-25__wrapper__title c--content-a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
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
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-25 {
    @include make-card-25();
    @include make-card-25-modifier(
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-style: solid,
        // $border-width: 1px,
        // $border-radius: $measure,
        // $full-image-height: true,
        // $hover-background-color: ,
        // $hover-img-zoom: ,
        // $hover-shadow: ,
        // $hover-title-color: ,
        // $hover-transform: ,
        // $img-aspect-ratio: ,
        // $img-height: ,
        // $img-position: ,
        //$text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
    );
}
```

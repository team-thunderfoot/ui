# Card-01

## Layout

![alt text][card-01]

[card-01]: /src/img/global-components/card/card-01.jpg

## Html for a card

```html
<div class="g--card-01">
    <div class="g--card-01__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-01__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-01__title">Lorem ipsum</h3>
    <p class="g--card-01__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-01">
    <div class="g--card-01__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-01__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-01__title">Lorem ipsum</h3>
    <div class="g--card-01__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
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
- $img-fit
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
.g--card-01{
    @include make-card-01();
    @include make-card-01-modifier(
        $background-color: lighten(map-get($color-options,a), 82%),
        $border-color: map-get($color-options, a),
        $border-style: solid,
        $border-width: 1px,
        $border-radius: $measure,
        $hover-background-color: ,
        $hover-img-zoom: ,
        $hover-shadow: ,
        $hover-title-color: ,
        $hover-transform: ,
        $img-aspect-ratio: 1.7,
        $img-height: ,
        $img-position: ,
        $img-fit: ,
        $img-width: ,
        $subtitle-color: ,
        $subtitle-font: ,
        $subtitle-font-weight: ,
        $subtitle-max-lines: ,
        $text-align: ,
        $title-color: ,
        $title-font: ,
        $title-font-weight: ,
        $title-max-lines: ,
    );
}
```
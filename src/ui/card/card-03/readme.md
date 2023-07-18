# Card-03

## Layout

![alt text][card-03]

[card-03]: /src/img/global-components/card/card-03.jpg

## Html for a card

```html
<div class="g--card-03">
    <div class="g--card-03__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"></div>
    <div class="g--card-03__ft-items">
        <div class="g--card-03__ft-items__media-wrapper">
            <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-03__ft-items__media-wrapper__media g--lazy-01">
        </div>
        <h3 class="g--card-03__ft-items__title">Lorem ipsum</h3>
        <p class="g--card-03__ft-items__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-03 g--card-03--second">
    <div class="g--card-03__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"></div>
    <div class="g--card-03__ft-items">
        <div class="g--card-03__ft-items__media-wrapper">
            <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-03__ft-items__media-wrapper__media g--lazy-01">
        </div>
        <h3 class="g--card-03__ft-items__title">Lorem ipsum</h3>
        <div class="g--card-03__ft-items__subtitle c--content-a">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

- $background-color
- $background-position
- $background-size
- $border-radius
- $card-min-height
- $hover-background-img-zoom
- $hover-img-zoom
- $hover-mask-color
- $hover-shadow
- $hover-title-color
- $hover-title-underline-color
- $hover-transform
- $img-aspect-ratio
- $img-fit
- $img-height
- $img-position
- $img-width
- $mask-color
- $shadow
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
.g--card-03{
    @include make-card-03();
    @include make-card-03-modifier(
        // $background-color: map-get($color-options, f),
        // $background-position: center,
        // $background-size: cover,
        // $border-radius: $measure,
        // $card-min-height: 500px,
        // $hover-background-img-zoom: 2,
        // $hover-img-zoom: 1.2,
        // $hover-mask-color: rgba(map-get($color-options, a), .5),
        // $hover-shadow: 0 0 $measure*4 map-get($color-options, a),
        // $hover-title-color: map-get($color-options, h),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio: 1.7,
        // $img-fit: cover,
        // $img-height: 340px,
        // $img-position: center,
        // $img-width: auto,
        // $mask-color: rgba(map-get($color-options, a), .2),
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $subtitle-color: map-get($color-options, a),
        // $subtitle-font: f,
        // $subtitle-font-weight: 400,
        // $subtitle-max-lines: 3,
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
    );
}
```
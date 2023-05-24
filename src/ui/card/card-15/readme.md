# Card-15

## Layout

![alt text][card-15]

[card-15]: /src/img/global-components/card/card-15.jpg

## Html for a card

```html
<div class="g--card-15">
  <div class="g--card-15__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"></div>
  <div class="g--card-15__ft-items">
    <h3 class="g--card-15__ft-items__title">Lorem ipsum</h3>
    <p class="g--card-15__ft-items__subtitle">Lorem ipsum dolor sit amet.</p>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-15__ft-items__link">This is a link</a>
  </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-15">
  <div class="g--card-15__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"></div>
  <div class="g--card-15__ft-items">
    <h3 class="g--card-15__ft-items__title">Lorem ipsum</h3>
    <div class="g--card-15__ft-items__subtitle c--content-a">Lorem ipsum dolor sit amet.</div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-15__ft-items__link">This is a link</a>
  </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-position
- $background-size
- $border-radius
- $hover-background-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-transform
- $link-class
- $link-class-modifier
- $link-font
- $mask-color
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $subtitle-max-lines
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-15 {
  @include make-card-15();
  @include make-card-15-modifier($background-position: center, $background-size: cover, $link-class: g--link-01, $link-font: d, $mask-color: rgba(map-get($color-options, b), 0.5), $title-color: map-get($color-options, a), $title-font: b);
  &--second {
    @include make-card-15-modifier(
      $background-position: bottom right,
      $background-size: cover,
      $link-font: e,
      $mask-color: rgba(map-get($color-options, g), 0.5),
      $subtitle-color: map-get($color-options, b),
      $title-color: map-get($color-options, d),
      $title-font: c,
      $border-radius: $measure * 2,
      $hover-background-img-zoom: 2,
      $hover-shadow: 0 0 $measure * 4 map-get($color-options, a),
      $hover-title-color: map-get($color-options, h),
      $hover-transform: translateY(-$measure),
      $subtitle-font: d,
      $subtitle-font-weight: 400,
      $subtitle-max-lines: 3,
      $text-align: center,
      $title-font-weight: 700,
      $title-max-lines: 2
    );
  }
}
```

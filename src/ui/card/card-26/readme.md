# Card-26

## Layout

![alt text][card-26]

[card-26]: /src/img/global-components/card/card-26.jpg

## Html for a card

```html
<div class="g--card-26">
  <div class="g--card-26__media-wrapper">
    <img
      data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg"
      src="/src/img/global-components/placeholder.jpg"
      alt="alt text"
      class="g--card-26__media-wrapper__media g--lazy-01 f--ar"
      width="604"
      height="340"
    />
  </div>
  <div class="g--card-26__wrapper">
    <p class="g--card-26__wrapper__title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-26">
  <div class="g--card-26__media-wrapper">
    <img
      data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg"
      src="/src/img/global-components/placeholder.jpg"
      alt="alt text"
      class="g--card-26__media-wrapper__media g--lazy-01 f--ar"
      width="604"
      height="340"
    />
  </div>
  <div class="g--card-26__wrapper">
    <div class="g--card-26__wrapper__title c--content-a">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>
```

## Editable variables

- $full-image-height
- $hover-img-zoom
- $hover-title-color
- $hover-transform
- $img-aspect-ratio
- $img-border-radius
- $img-height
- $img-position
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-26 {
  @include make-card-26();
  @include make-card-26-modifier(
    // $full-image-height: false,
    // $hover-img-zoom: false,
    // $hover-title-color: false,
    // $hover-transform: false,
    // $img-aspect-ratio: false,
    // $img-border-radius: false,
    // $img-height: false,
    // $img-position: false,
    // $text-align: false,
    // $title-color: false,
    // $title-font: false,
    // $title-font-weight: false,
    // $title-max-lines: false,
  );
}
```

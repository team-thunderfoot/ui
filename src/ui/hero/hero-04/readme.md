# Hero-04

## Layout

![alt text][hero-04]

[hero-04]: /src/img/global-components/hero/hero-04.jpg

## Html

```html
<section class="g--hero-04">
  <div class="g--hero-04__left-items">
    <h1 class="g--hero-04__left-items__title">Heading lorem ipsum dolor</h1>
    <h2 class="g--hero-04__left-items__subtitle">Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</h2>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--hero-04__left-items__link">Contact Us</a>
  </div>
  <div class="g--hero-04__right-items">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--hero-04__right-items__media g--lazy-01" />
  </div>
</section>
```

## Editable variables

- $background-color
- $breakpoint
- $header-height
- $img-height
- $img-position
- $img-object-fit
- $link-class
- $link-class-modifier
- $link-font
- $title-color
- $title-font
- $title-font-weight
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $text-align

## Use

```scss
.g--hero-04 {
  @include make-hero-04();
  @include make-hero-04-modifier(
    $background-color: rgba(map-get($color-options, a), 30%),
    $breakpoint: $tablets,
    // $header-height: 96px,
    $img-height: 200px,
    $img-position: center,
    $img-object-fit: cover,
    $link-class: g--link-01,
    $link-class-modifier: false,
    $link-font: false,
    $title-color: map-get($color-options, a),
    $title-font: b,
    // $title-font-weight: false,
    $subtitle-color: map-get($color-options, a),
    $subtitle-font: c,
    // $subtitle-font-weight: bold,
    // $text-align: false
  );
}
```

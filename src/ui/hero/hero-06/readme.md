# Hero-06

## Layout

![alt text][hero-06]

[hero-06]: /src/img/global-components/hero/hero-06.jpg

## Html

```html
<section class="g--hero-06">
    <div class="g--hero-06__left-items">
        <h1 class="g--hero-06__left-items__title">Heading lorem ipsum dolor</h1>
    </div>
    <div class="g--hero-06__right-items">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--hero-06__right-items__media g--lazy-01"
        />
    </div>
</section>
```

## Editable variables

-   $background-color
-   $breakpoint
-   $header-height
-   $img-height
-   $img-object-fit
-   $img-position
-   $link-class
-   $link-font
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight

## Use

```scss
.g--hero-06 {
    @include make-hero-06();
    @include make-hero-06-modifier(
        // $background-color: lighten(map-get($color-options, a), 82%),
        // $breakpoint: $tablets,
        // $header-height: 96px,
        // $img-height: 200px,
        // $img-object-fit: cover,
        // $img-position: center,
        // $link-class: g--btn-01,
        // $link-font: c,
        // $text-align: center
        // $title-color: map-get($color-options, a),
        // $title-font: a,
        // $title-font-weight: 400,
    );
}
```

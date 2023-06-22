# Hero-02

## Layout

![alt text][hero-02]

[hero-02]: /src/img/global-components/hero/hero-02.jpg

## Html

```html
<section class="g--hero-02">
    <div class="g--hero-02__wrapper">
        <div class="f--container">
            <div class="f--row">
                <div class="f--col-8 f--col-tablets-10 f--col-mobile-12">
                    <h1 class="g--hero-02__wrapper__tagline">Subheading</h1>
                    <h2 class="g--hero-02__wrapper__title">An Energy Solution for Healthcare</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="g--hero-02__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"
            src="/src/img/global-components/bg-placeholder.jpg"
            alt="alt text"
            class="g--hero-02__media-wrapper__media g--lazy-01"
        />
    </div>
</section>
```

## Editable variables

-   $background-color,
-   $header-height,
-   $img-height,
-   $img-object-fit,
-   $img-position,
-   $tagline-color,
-   $tagline-font-weight,
-   $tagline-font,
-   $text-align
-   $title-color,
-   $title-font-weight,
-   $title-font,

## Use

```scss
.g--hero-02 {
    @include make-hero-02();
    @include make-hero-02-modifier(
        // $background-color: map-get($color-options, d),
        // $header-height: 96px,
        // $img-height: 500px,
        // $img-object-fit: cover,
        // $img-position: center,
        // $tagline-color: map-get($color-options, f),
        // $tagline-font-weight: medium,
        // $tagline-font: d,
        // $text-align: left
        // $title-color: map-get($color-options, a),
        // $title-font-weight: bold,
        // $title-font: a,
    );
}
```

# Hero-01

## Layout

![alt text][hero-01]

[hero-01]: /src/img/global-components/hero/hero-01.png

## Html

```html
<section class="g--hero-01">
    <div class="g--hero-01__wrapper">
        <div class="f--container">
            <div class="f--row">
                <div class="f--col-8 f--col-tablets-10 f--col-mobile-12">
                    <h1 class="g--hero-01__wrapper__title">An Energy Solution for Healthcare</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="g--hero-01__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"
            src="/src/img/global-components/bg-placeholder.jpg"
            alt="alt text"
            class="g--hero-01__media-wrapper__media g--lazy-01"
        />
    </div>
</section>
```

## Editable variables

-   $background-color
-   $header-height
-   $img-height
-   $img-object-fit
-   $img-position
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight

## Use

```scss
.g--hero-01 {
    @include make-hero-01();
    @include make-hero-01-modifier(
        // $background-color: map-get($color-options, f),
        // $header-height: 96px,
        // $img-height: 500px,
        // $img-object-fit: cover,
        // $img-position: center,
        // $text-align: left
        // $title-color: map-get($color-options, a),
        // $title-font: a,
        // $title-font-weight: bold,
    );
}
```

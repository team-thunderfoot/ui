# Hero-02

## Layout

![alt text][hero-02]

[hero-02]: /src/img/global-components/hero/hero-02.jpg

## Html

```sh
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
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-bg-placeholder.jpg" src="/src/img/global-components/card/card-bg-placeholder.jpg" alt="alt text" class="g--hero-02__media-wrapper__media g--lazy-01">
    </div>
</section>
```

## Editable variables

- $background-color,
- $header-height,
- $img-height,
- $img-position,
- $img-object-fit,
- $tagline-color,
- $tagline-font,
- $tagline-font-weight,
- $title-color,
- $title-font,
- $title-font-weight,
- $text-align

## Use

```sh
.g--hero-02 {
    @include make-hero-02();
    @include make-hero-02-modifier(
        $background-color:  map-get($color-options, d),
        $header-height: 96px,
        $img-height: 500px,
        $img-position: center,
        $img-object-fit: cover,
        $tagline-color: map-get($color-options, f),
        $tagline-font: d,
        $tagline-font-weight: medium,
        $title-color: map-get($color-options, a),
        $title-font: a,
        $title-font-weight: bold,
        // $text-align: false
    );
}
```

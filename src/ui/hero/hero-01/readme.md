# Hero-01

## Layout

![alt text][hero-01]

[hero-01]: /src/img/global-components/hero/hero-01.png

## Html

```sh
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
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg" src="/src/img/global-components/bg-placeholder.jpg" alt="alt text" class="g--hero-01__media-wrapper__media g--lazy-01">
    </div>
</section>
```

## Editable variables

- $background-color,
- $header-height,
- $img-height,
- $img-position,
- $img-object-fit,
- $title-color,
- $title-font,
- $title-font-weight,
- $text-align

## Use

```sh
.g--hero-01 {
    @include make-hero-01();
    @include make-hero-01-modifier(
        $background-color: map-get($color-options, f),
        $header-height: 96px,
        $img-height: 500px,
        $img-position: center,
        $img-object-fit: cover,
        $title-color: map-get($color-options, a),
        $title-font: a,
        $title-font-weight: bold,
        // $text-align: false
    );

    @media all and ( $viewport-type: $tabletm) {
        @include make-hero-01-modifier(
            $img-height: 400px,
        );
    }

    @media all and ( $viewport-type: $tablets) {
        @include make-hero-01-modifier(
            $header-height: 86px,
            $img-height: 300px,
        );
    }
}
```

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
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-bg-placeholder.jpg" src="/src/img/global-components/card/card-bg-placeholder.jpg" alt="alt text" class="g--hero-01__media-wrapper__media g--lazy-01">
    </div>
</section>
```

## Editable variables

- $background-color
- $header-height-desktop
- $header-height-tabletl
- $header-height-tabletm
- $header-height-tablets
- $header-height-mobile
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default

### For Modifiers

- $background-color
- $text-align
- $title-color

## Use

```sh
.g--hero-01 {
    @include make-hero-01(
        $header-height-desktop: 96px,
        $title-font: a,
        // $header-height-tabletl: default,
        // $header-height-tabletm: default,
        // $header-height-tablets: default,
        // $header-height-mobile: default,
        // $title-font-weight: default
    );
    @include make-hero-01-modifier(
        $background-color: map-get($color-options, d),
        $title-color: map-get($color-options, a),
        // $text-align: default
    );
}
```

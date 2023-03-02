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
                    <h1 class="g--hero-02__wrapper__title">Subheading</h1>
                    <h2 class="g--hero-02__wrapper__subtitle">An Energy Solution for Healthcare</h2>
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

- $background-color
- $header-height-desktop
- $header-height-tabletl
- $header-height-tabletm
- $header-height-tablets
- $header-height-mobile
- $subheading-color
- $subheading-font
- $subheading-font-weight: false by default
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default

### For Modifiers

- $background-color
- $subheading-color
- $text-align
- $title-color

## Use

```sh
.g--hero-02 {
    @include make-hero-02(
        $header-height-desktop: 96px,
        $subheading-font: a,
        $title-font: a,
        // $header-height-tabletl: default,
        // $header-height-tabletm: default,
        // $header-height-tablets: default,
        // $header-height-mobile: default,
        // $subheading-font-weight: default,
        // $title-font-weight: default
    );
    @include make-hero-02-modifier(
        $background-color: map-get($color-options, d),
        $subheading-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $text-align: default
    );
}
```

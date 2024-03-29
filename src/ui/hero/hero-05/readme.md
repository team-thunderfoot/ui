# Hero-05

## Layout

![alt text][hero-05]

[hero-05]: /src/img/global-components/hero/hero-05.jpg

## Html

```html
<section class="g--hero-05">
    <div class="g--hero-05__left-items">
        <h1 class="g--hero-05__left-items__title">Heading lorem ipsum dolor</h1>
        <div class="g--hero-05__left-items__wrapper">
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="g--hero-05__left-items__wrapper__link"
                >Contact Us</a
            >
        </div>
    </div>
    <div class="g--hero-05__right-items">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--hero-05__right-items__media g--lazy-01"
        />
    </div>
</section>
```

## Editable variables

- $background-color
- $breakpoint
- $header-height
- $img-border-radius
- $img-height
- $img-object-fit
- $img-position
- $link-class
- $link-font
- $text-align
- $title-color
- $title-font
- $title-font-weight

## Use

```scss
.g--hero-05 {
    @include make-hero-05();
    @include make-hero-05-modifier(
        // $background-color: rgba(map-get($color-options, a), 30%),
        // $breakpoint: $tablets,
        // $header-height: 96px,
        // $img-border-radius: $measure*8 0 0 $measure*8,
        // $img-height: 200px,
        // $img-object-fit: cover,
        // $img-position: center,
        // $link-class: g--link-01,
        // $link-font: f,
        // $text-align: center
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
    );
}
```

# Card-56

## Layout

![alt text][card-56]

[card-56]: /src/img/global-components/card/card-56.jpg

## Html for a card

```html
<div class="g--card-56">
    <div class="g--card-56__media-wrapper">
        <img
            data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png"
            src="/src/img/global-components/placeholder.jpg"
            alt="alt text"
            class="g--card-56__media-wrapper__media g--lazy-01"
        />
    </div>
    <div class="g--card-56__wrapper">
        <p class="g--card-56__wrapper__hd">
            “This is a quote lorem ipsum dolor sit amet consectetur. Justo quam consectetur
            consequat suspendisse consectetur quam lorem. “
        </p>
        <div class="g--card-56__wrapper__bd">
            <p class="g--card-56__wrapper__bd__title">PERSON NAME, Position</p>
            <p class="g--card-56__wrapper__bd__subtitle">Company</p>
        </div>
    </div>
</div>
```

##### \*Aspect Ratio

For the image, we have to add width, height and aspect ratio dynamically.

## Editable variables

-   $border-color
-   $border-radius
-   $border-style
-   $border-width
-   $breakpoint
-   $card-min-height
-   $company-color
-   $company-font
-   $company-font-weight
-   $hover-company-color
-   $hover-company-underline-color
-   $hover-img-zoom
-   $hover-mask-color
-   $hover-person-color
-   $hover-person-underline-color
-   $hover-quote-color
-   $hover-quote-underline-color
-   $hover-shadow
-   $hover-transform
-   $img-aspect-ratio
-   $img-border-radius
-   $img-fit
-   $img-height
-   $img-position
-   $img-width
-   $mask-color
-   $person-color
-   $person-font
-   $person-font-weight
-   $quote-color
-   $quote-font
-   $quote-font-weight
-   $shadow
-   $text-align

## use

```scss
.g--card-56 {
    @include make-card-56();
    @include make-card-56-modifier(
        // $border-color: map-get($color-options, f),
        // $border-radius: $measure * 2,
        // $border-style: solid,
        // $border-width: 2px,
        // $breakpoint: $tablets,
        // $card-min-height: 100%,
        // $company-color: map-get($color-options, a),
        // $company-font-weight: bold,
        // $company-font: g,
        // $hover-company-color: map-get($color-options, e),
        // $hover-company-underline-color: map-get($color-options, e),
        // $hover-img-zoom: 1.2,
        // $hover-mask-color: transparent,
        // $hover-person-color: map-get($color-options, e),
        // $hover-person-underline-color: map-get($color-options, e),
        // $hover-quote-color: map-get($color-options, e),
        // $hover-quote-underline-color: map-get($color-options, e),
        // $hover-shadow: 0 0 $measure * 2 map-get($color-options, g),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio: calc(1 / 1),
        // $img-border-radius: 50%,
        // $img-fit: cover,
        // $img-height: 156px,
        // $img-position: center,
        // $img-width: 156px,
        // $mask-color: rgba(map-get($color-options, a), 0.2),
        // $person-color: map-get($color-options, a),
        // $person-font-weight: bold,
        // $person-font: f,
        // $quote-color: map-get($color-options, a),
        // $quote-font-weight: bold,
        // $quote-font: d,
        // $shadow: 0 0 $measure * 2 map-get($color-options, g),
        // $text-align: center,
    );
}
```

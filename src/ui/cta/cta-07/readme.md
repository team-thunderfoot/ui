# Cta-07

## Layout

![alt text][cta-07]

[cta-07]: /src/img/global-components/cta/cta-07.jpg

## Html

You can add whatever you want inside right div ("g--cta-07**ft-items**right-items")

```html
<div class="g--cta-07">
    <div
        class="g--cta-07__bg-items"
        style="background-image: url(/src/img/global-components/bg-placeholder.jpg)"
    ></div>
    <div class="g--cta-07__ft-items">
        <div class="g--cta-07__ft-items__left-items">
            <h2 class="g--cta-07__ft-items__left-items__title">
                CTA-07 Suscribe to Our Newsletter. Lorem Ipsum Dolor Sit Amet.
            </h2>
        </div>
        <div class="g--cta-07__ft-items__right-items">
            <div class="g--card-14 g--card-14--second">
                <h3 class="g--card-14__title">Lorem ipsum</h3>
                <p class="g--card-14__subtitle">
                    Solution description lorem ipsum dolor sit amet consectetur.
                </p>
            </div>
        </div>
    </div>
</div>
```

## Editable variables

-   $background-position
-   $background-size
-   $border-radius
-   $breakpoint
-   $hover-background-img-zoom
-   $hover-shadow
-   $hover-title-color
-   $hover-transform
-   $mask-color
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## Use

To use it we have to import the css of the $btn-class in the entry

```scss
.g--cta-07 {
    @include make-cta-07();
    @include make-cta-07-modifier(
        // $background-position: left top,
        // $background-size: cover,
        // $border-radius: 8px,
        // $breakpoint: $tablets,
        // $hover-background-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure * 2 map-get($color-options, h),
        // $hover-title-color: map-get($color-options, c),
        // $hover-transform: translateY(-$measure),
        // $mask-color: rgba(map-get($color-options, a), 0.5),
        // $title-color: map-get($color-options, b),
        // $title-font-weight: 400,
        // $title-font: b
        // $title-max-lines: 3,
        // $text-align: left,
    );
}
```

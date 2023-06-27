# Card-14

## Layout

![alt text][card-14]

[card-14]: /src/img/global-components/card/card-14.jpg

## Html for a card

```html
<div class="g--card-14">
    <h3 class="g--card-14__title">Lorem ipsum</h3>
    <p class="g--card-14__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-14">
    <h3 class="g--card-14__title">Lorem ipsum</h3>
    <div class="g--card-14__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

-   $hover-title-color
-   $hover-transform
-   $subtitle-color
-   $subtitle-font
-   $subtitle-font-weight
-   $subtitle-max-lines
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## Use

```scss
.g--card-14 {
    @include make-card-14();
    @include make-card-14-modifier(
        // $title-color: map-get($color-options, a), 
        // $title-font: c
        );
    &--second {
        @include make-card-14-modifier(
            // $subtitle-color: map-get($color-options, g),
            // $title-color: map-get($color-options, g),
            // $title-font: c,
            // $hover-title-color: map-get($color-options, h),
            // $hover-transform: translateY(-$measure),
            // $subtitle-font: f,
            // $subtitle-font-weight: 400,
            // $subtitle-max-lines: 3,
            // $text-align: left,
            // $title-font-weight: 400,
            // $title-max-lines: 3
        );
    }
}
```

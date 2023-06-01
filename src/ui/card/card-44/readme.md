# Card-44

## Layout

![alt text][card-44]

[card-44]: /src/img/global-components/card/card-44.jpg

## Html for a card

```html
<div class="g--card-44">
    <div class="g--card-44__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-44__media-wrapper__media g--lazy-01" />
    </div>
    <div class="g--card-44__wrapper">
        <p class="g--card-44__wrapper__hd">This is a card lorem ispum dolor sit</p>
        <p class="g--card-44__wrapper__bd">Lorem ipsum dolor sit amet consectetur. Vulputate facilisi ultrices pellentesque elit vel sit eu nascetur vitae.</p>
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-44">
    <div class="g--card-44__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-44__media-wrapper__media g--lazy-01" />
    </div>
    <div class="g--card-44__wrapper">
        <p class="g--card-44__wrapper__hd">Heading</p>
        <div class="g--card-44__wrapper__bd c--content-a">Lorem ipsum dolor sit amet consectetur. Vulputate facilisi ultrices pellentesque elit vel sit eu nascetur vitae.</div>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

-   $background-color
-   $border-color
-   $border-style
-   $border-width
-   $border-radius
-   $breakpoint
-   $hover-background-color
-   $hover-img-zoom
-   $hover-shadow
-   $hover-title-color
-   $hover-transform
-   $img-aspect-ratio-responsive
-   $img-height-responsive
-   $img-position
-   $heading-color
-   $heading-font
-   $heading-font-weight
-   $text-align
-   $content-color
-   $content-font
-   $content-font-weight
-   $content-max-lines

## Use

```scss
.g--card-44 {
    @include make-card-44();
    @include make-card-44-modifier(
        // $background-color: false,
        // $border-color: false,
        // $border-style: false,
        // $border-width: false,
        // $border-radius: false,
        // $breakpoint: false,
        // $hover-background-color: false,
        // $hover-img-zoom: false,
        // $hover-shadow: false,
        // $hover-title-color: false,
        // $hover-transform: false,
        // $img-aspect-ratio-responsive: false,
        // $img-height-responsive: false,
        // $img-position: false,
        // $heading-color: false,
        // $heading-font: false,
        // $heading-font-weight: false,
        // $text-align: false,
        // $content-color: false,
        // $content-font: false,
        // $content-font-weight: false,
        // $content-max-lines: false,
        // $change-order-reponsive: false
    );
}
```

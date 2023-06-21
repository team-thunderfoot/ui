# Layout-08

## Layout

![alt text][layout-08]

[layout-08]: /src/img/global-components/layout/layout-08.png

## Html

If we change the order in responsive we have to add "f--order-tablets-1" class to the media-wrapper column.

```html
<section class="g--layout-08">
    <div class="f--container">
        <div class="f--row">
            <div class="f--col-5 f--col-tabletl-6 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex f--order-tablets-1">
                <div class="g--layout-08__media-wrapper">
                    <img
                        data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg"
                        src="/src/img/global-components/placeholder.jpg"
                        alt="alt text"
                        class="g--layout-08__media-wrapper__media g--lazy-01 f--ar"
                        width="1000"
                        height="1000"
                        style="aspect-ratio: 1000 / 1000"
                    />
                </div>
            </div>
            <div class="f--col-5 f--offset-1 f--col-tabletm-6 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex">
                <div class="g--layout-08__wrapper">
                    <h2 class="g--layout-08__wrapper__title">Lorem ipsum dolor sit amet consectetur.</h2>
                    <p class="g--layout-08__wrapper__subtitle">
                        Lorem ipsum dolor sit amet consectetur. Etiam lectus pretium nisl volutpat urna. Id orci neque sit eget morbi sed in suspendisse. In lectus pellentesque neque molestie
                        vulputate venenatis velit.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
```

## Editable variables

-   $align-text-img
-   $background-color
-   $breakpoint
-   $change-order-reponsive
-   $img-border-radius
-   $img-max-height
-   $img-min-height
-   $img-height
-   $img-position
-   $object-fit
-   $subtitle-color
-   $subtitle-font
-   $subtitle-font-weight
-   $title-color
-   $title-font
-   $title-font-weight

## Use

To see it correctly we have to make sure display--flex in utilities is included in the project.
For the image, we have to add width, height and aspect ratio dynamically.
If we change the order in responsive we have to add "f--order-tablets-1" class to the media-wrapper column.

```scss
.g--layout-08 {
    @include make-layout-08();
    @include make-layout-08-modifier(
        $align-text-img: bottom,
        $img-height: 600px,
        $subtitle-font: f,
        $subtitle-font-weight: 400,
        $subtitle-color: map-get($color-options, a),
        $title-font: c,
        $title-font-weight: 600,
        $title-color: map-get($color-options, a),
        $object-fit: cover,
        $img-position: false,
        // $img-border-radius: $measure * 4,
        $change-order-reponsive: true,
        $breakpoint: $tablets // $background-color: map-get($color-options, e),
    );
}
```

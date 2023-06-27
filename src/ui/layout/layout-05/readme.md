# Layout-05

## Layout

![alt text][layout-05]

[layout-05]: /src/img/global-components/layout/layout-05.png

## Html

If we change the order in responsive we have to add "f--order-tablets-1" class to the media-wrapper column.

```html
<section class="g--layout-05">
    <div class="f--container">
        <div class="f--row">
            <div class="f--col-5 f--offset-1 f--col-tabletm-6 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex f--order-tablets-1">
                <div class="g--layout-05__wrapper">
                    <p class="g--layout-05__wrapper__meta">Lorem Ipsum</p>
                    <h2 class="g--layout-05__wrapper__title">Layout-05 Lorem ipsum dolor sit amet consectetur.</h2>
                    <p class="g--layout-05__wrapper__subtitle">
                        Lorem ipsum dolor sit amet consectetur. Etiam lectus pretium nisl volutpat urna. Id orci neque sit eget morbi sed in suspendisse. In lectus pellentesque neque molestie
                        vulputate venenatis velit.
                    </p>
                    <div class="g--layout-05__wrapper__ft">
                        <a href="#" class="g--layout-05__wrapper__ft__btn" target="_blank" rel="noopener noreferrer">Button</a>
                    </div>
                </div>
            </div>
            <div class="f--col-5 f--col-tabletl-6 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex">
                <div class="g--layout-05__media-wrapper">
                    <img
                        data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg"
                        src="/src/img/global-components/placeholder.jpg"
                        alt="alt text"
                        class="g--layout-05__media-wrapper__media g--lazy-01"
                        width="1000"
                        height="1000"
                    />
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
-   $btn-class
-   $btn-font
-   $change-order-reponsive
-   $img-border-radius
-   $img-height
-   $img-max-height
-   $img-min-height
-   $img-position
-   $meta-color
-   $meta-font
-   $meta-font-weight
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
.g--layout-05 {
    @include make-layout-05();
    @include make-layout-05-modifier(
        // $align-text-img: center,
        // $background-color: map-get($color-options, e),
        // $breakpoint: $tablets,
        // $btn-class: g--btn-01,
        // $btn-font: f,
        // $change-order-reponsive: true,
        // $img-border-radius: $measure * 4,
        // $img-height: 600px,
        // $img-position: center,
        // $meta-color: map-get($color-options, a),
        // $meta-font-weight: 400,
        // $meta-font: f,
        // $object-fit: cover,
        // $subtitle-color: map-get($color-options, a),
        // $subtitle-font-weight: 400,
        // $subtitle-font: f,
        // $title-color: map-get($color-options, a),
        // $title-font-weight: 400,
        // $title-font: c,
    );
}
```

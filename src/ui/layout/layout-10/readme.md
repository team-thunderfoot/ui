# Layout-10

## Layout

![alt text][layout-10]

[layout-10]: /src/img/global-components/layout/layout-10.png

## Html
If we change the order in responsive we have to add "f--order-tablets-1" class to the text-wrapper column.

```html
<section class="g--layout-10">
    <div class="f--container">
        <div class="f--row">
            <div class="f--col-5 f--offset-1 f--offset-tabletl-0 f--col-tabletm-6 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex">
                <div class="g--layout-10__wrapper">
                    <h2 class="g--layout-10__wrapper__title">Layout-10 Lorem ipsum dolor sit amet consectetur.</h2>
                    <p class="g--layout-10__wrapper__subtitle">Lorem ipsum dolor sit amet consectetur. Etiam lectus pretium nisl volutpat urna. Id orci neque sit eget morbi sed in suspendisse. In lectus pellentesque neque molestie vulputate venenatis velit.</p>
                </div>
            </div>
            <div class="f--col-5 f--offset-1 f--col-tabletl-6 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex">
                <div class="g--layout-10__media-wrapper">
                    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--layout-10__media-wrapper__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
                </div>
            </div>
        </div>
    </div>
</section>
```

## Editable variables

- $subtitle-font
- $title-font
- $object-fit
- $img-border-radius
- $img-position
- $title-font-weight
- $subtitle-font-weight
- $change-order-reponsive
- $subtitle-color
- $title-color
- $background-color
- $breakpoint

## Use

To see it correctly we have to make sure display--flex in utilities is included in the project.
For the image, we have to add width, height and aspect ratio dynamically.
If we change the order in responsive we have to add "f--order-tablets-1" class to the text-wrapper column.

```scss
.g--layout-10 {
    @include make-layout-10();
    @include make-layout-10-modifier(
        $subtitle-font: f,
        $title-font: c,
        $object-fit: cover,
        // $img-border-radius: $measure * 4,
        // $img-position: false,
        $title-font-weight: 400,
        $subtitle-font-weight: 400,
        $change-order-reponsive: true,
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $background-color: false,
        $breakpoint: $tablets
    );
}
```

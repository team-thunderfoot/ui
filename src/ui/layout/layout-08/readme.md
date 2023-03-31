# Layout-08

## Layout

![alt text][layout-04]

[layout-04]: /src/img/global-components/layout/layout-04.png

## Html

If we change the order in responsive we have to add "f--order-tablets-1" class to the media-wrapper column.

```sh
<section class="g--layout-08">
    <div class="f--container">
    <div class="f--row">
        <div class="f--col-5 f--col-tabletl-6 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex">
        <div class="g--layout-08__media-wrapper">
            <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--layout-08__media-wrapper__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
        </div>
        </div>
        <div class="f--col-5 f--offset-1 f--col-tabletm-6 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex">
        <div class="g--layout-08__wrapper">
            <h2 class="g--layout-08__wrapper__title">Layout-07 Lorem ipsum dolor sit amet consectetur. Eu risus pulvinar.</h2>
            <p class="g--layout-08__wrapper__subtitle">Lorem ipsum dolor sit amet consectetur. Etiam lectus pretium nisl volutpat urna. Id orci neque sit eget morbi sed in suspendisse. In lectus pellentesque neque molestie vulputate venenatis velit.</p>
        </div>
        </div>
    </div>
    </div>
</section>
```

## Editable variables

- $subtitle-font
- $title-font
- $img-border-radius: false by default
- $img-position: false by default
- $title-font-weight: false by default
- $subtitle-font-weight: false by default
- $change-order-reponsive: false by default
- $subtitle-color
- $title-color
- $background-color: false by default

### For Modifiers

- $subtitle-color
- $title-color
- $background-color

## Use

To see it correctly we have to make sure display--flex in utilities is included in the project.
For the image, we have to add width, height and aspect ratio dynamically.
If we change the order in responsive we have to add "f--order-tablets-1" class to the media-wrapper column.

```sh
.g--layout-08{
    @include make-layout-08(
        $subtitle-font: d,
        $title-font: c,
        // $img-border-radius: default,
        // $img-position: default,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
        // $change-order-reponsive: default,
    );
    @include make-layout-08-modifier(
        $background-color: map-get($color-options, d),
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
    );
}
```

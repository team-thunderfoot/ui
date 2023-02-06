# Layout-04

## Layout

![alt text][layout-04]

[layout-04]: /src/img/global-components/layout/layout-04.png

## Html

```sh
<section class="g--layout-04">
    <div class="f--container">
        <div class="f--row">
            <div class="f--col-5 f--col-tabletl-6 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex">
                <div class="g--layout-04__media-wrapper">
                    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--layout-04__media-wrapper__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
                </div>
            </div>
            <div class="f--col-5 f--offset-1 f--col-tabletm-6 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex">
                <div class="g--layout-04__wrapper">
                    <p class="g--layout-04__wrapper__meta">Lorem Ipsum</p>
                    <h2 class="g--layout-04__wrapper__title">Lorem ipsum dolor sit amet consectetur.</h2>
                    <p class="g--layout-04__wrapper__subtitle">Lorem ipsum dolor sit amet consectetur. Etiam lectus pretium nisl volutpat urna. Id orci neque sit eget morbi sed in suspendisse. In lectus pellentesque neque molestie vulputate venenatis velit.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

## Editable variables

- $img-border-radius: false by default
- $meta-font
- $title-font
- $subtitle-font
- $meta-color
- $title-color
- $subtitle-color
- $background-color: false by default
- $text-align: false by default

### For Modifiers

- $meta-color
- $title-color
- $subtitle-color
- $background-color
- $text-align

## Use

To see it correctly we have to make sure display--flex in utilities is included in the project.
For the image, we have to add width, height and aspect ratio dynamically.

```sh
.g--layout-04{
    @include make-layout-04(
        // $img-border-radius: default,
        $meta-font: g,
        $title-font: c,
        $subtitle-font: f,
    );
    @include make-layout-04-modifier(
        // $background-color: default,
        // $text-align: default,
        $meta-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```
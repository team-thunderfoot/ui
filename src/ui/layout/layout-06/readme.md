# Layout-06

## Layout

![alt text][layout-06]

[layout-06]: /src/img/global-components/layout/layout-06.png

## Html

```sh
<section class="g--layout-06">
    <div class="f--container">
        <div class="f--row">
            <div class="f--col-5 f--offset-1 f--offset-tabletl-0 f--col-tabletm-6 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex">
                <div class="g--layout-06__wrapper">
                    <p class="g--layout-06__wrapper__meta">Lorem Ipsum</p>
                    <h2 class="g--layout-06__wrapper__title">Layout-06 Lorem ipsum dolor sit amet consectetur.</h2>
                    <p class="g--layout-06__wrapper__subtitle">Lorem ipsum dolor sit amet consectetur. Etiam lectus pretium nisl volutpat urna. Id orci neque sit eget morbi sed in suspendisse. In lectus pellentesque neque molestie vulputate venenatis velit.</p>
                </div>
            </div>
            <div class="f--col-5 f--offset-1 f--col-tabletl-6 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex">
                <div class="g--layout-06__media-wrapper">
                    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--layout-06__media-wrapper__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
                </div>
            </div>
        </div>
    </div>
</section>
```

## Editable variables

- $meta-font
- $title-font
- $subtitle-font
- $img-border-radius: false by default
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
.g--layout-06{
    @include make-layout-06(
        $meta-font: g,
        $title-font: c,
        $subtitle-font: f,
        // $img-border-radius: default,
    );
    @include make-layout-06-modifier(
        // $background-color: default,
        // $text-align: default,
        $meta-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```
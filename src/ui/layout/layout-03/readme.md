# Layout-03

## Layout

![alt text][layout-03]

[layout-03]: /src/img/global-components/layout/layout-03.png

## Html
If we change the order in responsive we have to add "f--order-tablets-1" class to the media-wrapper column.

```sh
<section class="g--layout-03">
    <div class="f--container">
        <div class="f--row">
            <div class="f--col-5 f--col-tabletl-6 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex">
                <div class="g--layout-03__media-wrapper">
                    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--layout-03__media-wrapper__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
                </div>
            </div>
            <div class="f--col-5 f--offset-1 f--col-tabletm-6 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0 display--flex">
                <div class="g--layout-03__wrapper">
                    <p class="g--layout-03__wrapper__meta">Lorem Ipsum</p>
                    <h2 class="g--layout-03__wrapper__title">Lorem ipsum dolor sit amet consectetur.</h2>
                    <p class="g--layout-03__wrapper__subtitle">Lorem ipsum dolor sit amet consectetur. Etiam lectus pretium nisl volutpat urna. Id orci neque sit eget morbi sed in suspendisse. In lectus pellentesque neque molestie vulputate venenatis velit.</p>
                    <div class="g--layout-03__wrapper__ft">
                        <a href="#" class="g--layout-03__wrapper__ft__btn" target="_blank" rel="noopener noreferrer">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

## Editable variables

- $background-color: false by default
- $btn-class
- $btn-class-modifier: false by default
- $img-border-radius: false by default
- $img-position: false by default
- $meta-color
- $meta-font
- $subtitle-color
- $subtitle-font
- $title-color
- $title-font
- $meta-font-weight: false by default
- $title-font-weight: false by default
- $subtitle-font-weight: false by default
- $change-order-reponsive: false by default

### For Modifiers

- $background-color
- $btn-class-modifier
- $meta-color
- $subtitle-color
- $title-color

## Use

To see it correctly we have to make sure display--flex in utilities is included in the project.
For the image, we have to add width, height and aspect ratio dynamically.
If we change the order in responsive we have to add "f--order-tablets-1" class to the media-wrapper column.

```sh
.g--layout-03{
    @include make-layout-03(
        $btn-class: g--btn-01,
        $meta-font: g,
        $subtitle-font: f,
        $title-font: c,
        // $img-border-radius: default,
        // $img-position: default,
        // $meta-font-weight: default,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
        // $change-order-reponsive: default
    );
    @include make-layout-03-modifier(
        $meta-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $background-color: default,
        // $btn-class-modifier: default,
    );
}
```

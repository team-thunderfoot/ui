# Layout-02

## Layout

![alt text][layout-02]

[layout-02]: /src/img/global-components/layout/layout-02.png

## Html

```html
<section class="g--layout-02">
    <div class="f--container">
        <div class="f--row justify-content--center">
            <div class="f--col-8 f--col-tabletm-10 f--col-mobile-12">
                <h2 class="g--layout-02__title">Layout 02</h2>
                <p class="g--layout-02__subtitle">Lorem ipsum dolor sit amet consectetur. Montes massa tellus massa libero mattis. Tempus orci felis augue suspendisse massa quam. Elementum vitae neque ac enim eros. Sed feugiat a facilisis tellus pulvinar viverra.</p>
            </div>
        </div>
    </div>
</section>
```

## Editable variables

- $title-font
- $title-font-weight,
- $title-color
- $subtitle-font
- $subtitle-font-weight,
- $subtitle-color
- $background-color

## Use

```scss
.g--layout-02 {
    @include make-layout-02();
    @include make-layout-02-modifier(
        $title-font: c,
        $title-font-weight: 400,
        $title-color: map-get($color-options, a),
        $subtitle-font: f,
        $subtitle-font-weight: 400,
        $subtitle-color: map-get($color-options, a),
        //$background-color: map-get($color-options, e),
    );
}

```

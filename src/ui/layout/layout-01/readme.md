# Layout-01

## Layout

![alt text][layout-01]

[layout-01]: /src/img/global-components/layout/layout-01.png

## Html

```html
<section class="g--layout-01">
    <div class="f--container">
        <div class="f--row justify-content--center">
            <div class="f--col-8 f--col-tabletm-10 f--col-mobile-12">
                <h2 class="g--layout-01__title">Layout 01</h2>
                <p class="g--layout-01__subtitle">Lorem ipsum dolor sit amet consectetur. Montes massa tellus massa libero mattis. Tempus orci felis augue suspendisse massa quam. Elementum vitae neque ac enim eros. Sed feugiat a facilisis tellus pulvinar viverra.</p>
                <a href="#" class="g--layout-01__btn" target="_blank" rel="noopener noreferrer">Who we are</a>
            </div>
        </div>
    </div>
</section>
```

## Editable variables

- $background-color
- $title-font
- $title-font-weight
- $title-color
- $subtitle-font
- $subtitle-font-weight,
- $subtitle-color
- $btn-class
- $btn-font

## Use

To use it we have to import the css of the $btn-class in the entry

```scss
.g--layout-01 {
    @include make-layout-01();
    @include make-layout-01-modifier(
        $title-font: c,
        $title-font-weight: 600,
        $title-color: map-get($color-options, a),
        $subtitle-font: d,
        $subtitle-font-weight: 400,
        $subtitle-color: map-get($color-options, a),
        $btn-font: d,
        $btn-class: g--btn-01,
        // $background-color: map-get($color-options, d),
    );
}
```

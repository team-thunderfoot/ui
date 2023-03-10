# Layout-01

## Layout

![alt text][layout-01]

[layout-01]: /src/img/global-components/layout/layout-01.png

## Html

```sh
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

- $background-color: false by default
- $btn-class
- $btn-class-modifier: false by default
- $subtitle-font
- $subtitle-color
- $title-color
- $title-font
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For Modifiers

- $background-color
- $btn-class-modifier
- $subtitle-color
- $title-color

## Use

To use it we have to import the css of the $btn-class in the entry

```sh
.g--layout-01{
    @include make-layout-01(
        $btn-class: g--btn-01,
        $subtitle-font: d,
        $title-font: b,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
    );
    @include make-layout-01-modifier(
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $background-color: default,
        // $btn-class-modifier: default,
        // $text-align: default,
    );
}
```

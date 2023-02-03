# Layout-02

## Layout

![alt text][layout-02]

[layout-02]: /src/img/global-components/layout/layout-02.jpg

## Html

```sh
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

- $background-color: false by default
- $subtitle-font
- $subtitle-color
- $text-align: false by default
- $title-color
- $title-font

### For Modifiers

- $background-color
- $subtitle-color
- $text-align
- $title-color

## Use

```sh
.g--layout-02{
    @include make-layout-02(
        $subtitle-font: d,
        $title-font: b,
    );
    @include make-layout-02-modifier(
        // $background-color: default,
        $subtitle-color: map-get($color-options, a),
        // $text-align: default,
        $title-color: map-get($color-options, a),
    );
}
```
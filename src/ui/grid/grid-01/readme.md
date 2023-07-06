# Grid-01

## Layout

![alt text][grid-01]

[grid-01]: /src/img/global-components/grid/grid-01.png

## Html

```html
<section class="g--grid-01">
    <div class="g--grid-01__wrapper">
        <div class="g--grid-01__wrapper__item"></div>
        <div class="g--grid-01__wrapper__item"></div>
        <div class="g--grid-01__wrapper__item"></div>
        <div class="g--grid-01__wrapper__item"></div>
        <div class="g--grid-01__wrapper__item"></div>
        <div class="g--grid-01__wrapper__item"></div>
        <div class="g--grid-01__wrapper__item"></div>
        <div class="g--grid-01__wrapper__item"></div>
        <div class="g--grid-01__wrapper__item"></div>
        <div class="g--grid-01__wrapper__item"></div>
        <div class="g--grid-01__wrapper__item"></div>
        <div class="g--grid-01__wrapper__item"></div>
    </div>
</section>
```

## Editable variables

- $columns
- $item-background-color
- $item-min-height

## Use

```scss
.g--grid-01 {
    @include make-grid-01();
    @include make-grid-01-modifier(
        // $columns: 4,
        // $item-background-color: map-get($color-options, a),
        // $item-min-height: 50vh,
    );
}
```

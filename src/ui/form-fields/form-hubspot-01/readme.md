# Form-checkbox-01

## Layout

![alt text][checkbox-01]

[checkbox-01]: /src/img/global-components/form-fields/checkbox-01.jpg

## Html

```html
<div class="g--form-checkbox-01">
    <input type="checkbox" id="checkbox-01" class="g--form-checkbox-01__item" />
    <label class="g--form-checkbox-01__title" for="checkbox-01">This is a checkbox</label>
</div>
```

When there's an error in the input the class "g--form-checkbox-01--error" should be added:

```html
<div class="g--form-checkbox-01 g--form-checkbox-01--error">
    <input type="checkbox" id="checkbox-01--error" class="g--form-checkbox-01__item" />
    <label class="g--form-checkbox-01__title" for="checkbox-01--error">This is a checkbox</label>
</div>
```

## Editable variables

-   $artwork-img
-   $error-border-color
-   $font
-   $font-weight: false by default
-   $square-border-radius
-   $square-border-width
-   $square-color
-   $square-color-focus
-   $square-width
-   $text-color

### For Modifiers

-   $artwork-img
-   $error-border-color
-   $square-color
-   $square-color-focus
-   $text-color

## Use

$square-color-focus variable is used for focus and filled styles.

```scss
.g--form-checkbox-01 {
    @include make-form-checkbox-01(
        // $font: f, 
        // $square-border-radius: 0, 
        // $square-border-width: 1px, 
        // $square-width: $measure * 2, 
        // $font-weight: default,
    );

    @include make-form-checkbox-01-modifier(
        // $artwork-img: "./img/global-components/form-fields/checkbox-artwork.svg",
        // $error-border-color: map-get($color-options, f),
        // $square-color: rgba(map-get($color-options, a), 0.2),
        // $square-color-focus: map-get($color-options, a),
        // $text-color: map-get($color-options, a)
    );
}
```

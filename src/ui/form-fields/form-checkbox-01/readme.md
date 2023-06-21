# Form-checkbox-01

## Layout

![alt text][checkbox-01]

[checkbox-01]: /src/img/global-components/form-fields/checkbox-01.jpg

## Html

```html
<div class="g--form-checkbox-01">
    <input type="checkbox" id="checkbox-01" class="g--form-checkbox-01__item">
    <label class="g--form-checkbox-01__title" for="checkbox-01">This is a checkbox</label>
</div>
```
When there's an error in the input the class "g--form-checkbox-01--error" should be added:
```html
<div class="g--form-checkbox-01 g--form-checkbox-01--error">
    <input type="checkbox" id="checkbox-01--error" class="g--form-checkbox-01__item">
    <label class="g--form-checkbox-01__title" for="checkbox-01--error">This is a checkbox</label>
</div>
<span class="g--form-error-01">This is an error message</span>
```
Example with label and checkbox
```html
<fieldset class="g--form-group-01">
    <legend class="g--form-label-01">This is the question</legend>
    <div class="g--form-checkbox-01">
        <input type="checkbox" id="checkbox-01" class="g--form-checkbox-01__item">
        <label class="g--form-checkbox-01__title" for="checkbox-01">This is a checkbox</label>
    </div>
    <div class="g--form-checkbox-01">
        <input type="checkbox" id="checkbox-01-option" class="g--form-checkbox-01__item">
        <label class="g--form-checkbox-01__title" for="checkbox-01-option">This is a checkbox</label>
    </div>
</fieldset>
```

## Editable variables

- $artwork-background
- $artwork-background-position
- $artwork-background-repeat
- $artwork-background-size
- $artwork-border-radius
- $error-border-color
- $font
- $font-mobile-size
- $font-weight
- $square-border-radius
- $square-border-style
- $square-border-width
- $square-border-color
- $square-color-focus
- $square-width
- $text-color

## Use

`$square-color-focus` variable is used for focus and filled styles.

```scss
.g--form-checkbox-01{
    @include make-form-checkbox-01();
    @include make-form-checkbox-01-modifier(
        // $artwork-background: url('./img/global-components/form-fields/checkbox-artwork.svg'),
        // $artwork-background-position: center,
        // $artwork-background-repeat: no-repeat,
        // $artwork-background-size: contain,
        // $artwork-border-radius: 4px,
        // $error-border-color: map-get($color-options, f),
        // $font: f,
        // $font-mobile-size: 1rem,
        // $font-weight: 600,
        // $square-border-radius: 0,
        // $square-border-style: solid,
        // $square-border-width: 1px,
        // $square-border-color: rgba(map-get($color-options, a), .2),
        // $square-color-focus: map-get($color-options, a),
        // $square-width: $measure*2,
        // $text-color: map-get($color-options, a),
    );
}
```
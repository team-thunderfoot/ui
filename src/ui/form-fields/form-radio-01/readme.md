# Form-radio-01

## Layout

![alt text][radio-01]

[radio-01]: /src/img/global-components/form-fields/radio-01.jpg

## Html

```html
<div class="g--form-radio-01">
    <input type="radio" id="radio-01" class="g--form-radio-01__item" name="radio-01" />
    <label class="g--form-radio-01__title" for="radio-01">This is a radio</label>
</div>
```

When there's an error in the input the class "g--form-radio-01--error" should be added:

```html
<div class="g--form-radio-01 g--form-radio-01--error">
    <input type="radio" id="radio-01" class="g--form-radio-01__item" name="radio-01" />
    <label class="g--form-radio-01__title" for="radio-01">This is a radio</label>
</div>
```

## Editable variables

- $artwork-color
- $circle-border-style
- $circle-border-width
- $circle-color
- $circle-color-focus
- $circle-width
- $error-border-color
- $font
- $font-weight
- $text-color

## Use

`$circle-color-focus` variable is used for focus and filled styles.

```scss
.g--form-radio-01 {
    @include make-form-radio-01();
    @include make-form-radio-01-modifier(
        // $artwork-color: map-get($color-options, g),
        // $circle-border-style: solid,
        // $circle-border-width: 1px,
        // $circle-color: rgba(map-get($color-options, a), .2),
        // $circle-color-focus: map-get($color-options, a),
        // $circle-width: $measure*2,
        // $error-border-color: map-get($color-options, f),
        // $font: f,
        // $font-weight: 500,
        // $text-color: map-get($color-options, a),
    );
}
```

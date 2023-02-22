# Form-radio-01

## Layout

![alt text][radio-01]

[radio-01]: /src/img/global-components/form-fields/radio-01.jpg

## Html

```sh
<div class="g--form-radio-01">
    <input type="radio" id="radio-01" class="g--form-radio-01__item" name="radio-01">
    <label class="g--form-radio-01__title" for="radio-01">This is a radio</label>
</div>
```
When there's an error in the input the class "g--form-radio-01--error" should be added:
```sh
<div class="g--form-radio-01 g--form-radio-01--error">
    <input type="radio" id="radio-01" class="g--form-radio-01__item" name="radio-01">
    <label class="g--form-radio-01__title" for="radio-01">This is a radio</label>
</div>
```

## Editable variables

- $artwork-color
- $circle-border-width
- $circle-color
- $circle-color-focus
- $circle-width
- $error-border-color
- $font
- $font-weight: false by default
- $text-color

### For Modifiers

- $artwork-color
- $circle-color
- $circle-color-focus
- $error-border-color
- $text-color

## Use

$circle-color-focus variable is used for focus and filled styles.

```sh
.g--form-radio-01{
    @include make-form-radio-01(
        $font: f,
        $circle-border-width: 1px,
        $circle-width: $measure*2,
        // $font-weight: default,
    );
    @include make-form-radio-01-modifier(
        $artwork-color: map-get($color-options, g),
        $error-border-color: map-get($color-options, f),
        $circle-color: rgba(map-get($color-options, a), .2),
        $circle-color-focus: map-get($color-options, a),
        $text-color: map-get($color-options, a),
    );
}
```
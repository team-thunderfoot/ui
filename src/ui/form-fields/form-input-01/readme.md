# Form-input-01

## Layout

![alt text][input-01]

[input-01]: /src/img/global-components/form-fields/input-01.jpg

## Html

```html
<div class="g--form-input-01">
    <input type="text" id="first-name" class="g--form-input-01__item" placeholder=" ">
</div>
```
When there's an error in the input the class "g--form-input-01--error" should be added:
```html
<div class="g--form-input-01 g--form-input-01--error">
    <input type="text" id="first-name" class="g--form-input-01__item" placeholder=" ">
</div>
```

## Editable variables

- $background-color
- $background-color-autofill
- $border-color
- $border-color-focus
- $border-radius
- $border-style
- $border-width
- $error-border-color
- $font
- $font-size-mobile
- $font-weight
- $placeholder-color
- $text-color

## Use

`$border-color-focus` variable is used for focus and filled styles, if placeholder is not added, it won't work and it'll be always look as if it's filled/focused.

```scss
.g--form-input-01{
    @include make-form-input-01();
    @include make-form-input-01-modifier(
        // $background-color: transparent,
        // $background-color-autofill: transparent,
        // $border-color: rgba(map-get($color-options, a), .2),
        // $border-color-focus: map-get($color-options, a),
        // $border-radius: 0,
        // $border-style: solid,
        // $border-width: 1px,
        // $error-border-color: map-get($color-options, g),
        // $font: f,
        // $font-size-mobile: 1rem,
        // $font-weight: 400,
        // $placeholder-color: transparent,
        // $text-color: map-get($color-options, a),
    );
}
```
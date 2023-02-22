# Form-input-01

## Layout

![alt text][input-01]

[input-01]: /src/img/global-components/form-fields/input-01.jpg

## Html

```sh
<div class="g--form-input-01">
    <input type="text" id="first-name" class="g--form-input-01__item" placeholder=" ">
</div>
```
When there's an error in the input the class "g--form-input-01--error" should be added:
```sh
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
- $border-width
- $error-border-color
- $font
- $font-weight: false by default
- $placeholder-color
- $text-color

### For Modifiers

- $background-color
- $background-color-autofill
- $border-color
- $border-color-focus
- $error-border-color
- $placeholder-color
- $text-color

## Use

$border-color-focus variable is used for focus and filled styles, if placeholder is not added, it won't work and it'll be always look as if it's filled/focused.

```sh
.g--form-input-01{
    @include make-form-input-01(
        $font: f,
        $border-width: 1px,
        $border-radius: 0,
        // $font-weight: default
    );
    @include make-form-input-01-modifier(
        $border-color: rgba(map-get($color-options, a), .2),
        $border-color-focus: map-get($color-options, a),
        $background-color: transparent,
        $background-color-autofill: transparent,
        $error-border-color: map-get($color-options, g),
        $placeholder-color: transparent,
        $text-color: map-get($color-options, a),
    );
}
```
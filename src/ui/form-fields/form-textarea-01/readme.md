# Form-textarea-01

## Layout

![alt text][textarea-01]

[textarea-01]: /src/img/global-components/form-fields/textarea-01.jpg

## Html

```sh
<div class="g--form-textarea-01">
    <textarea id="textarea-01" class="g--form-textarea-01__item" placeholder=" ">
</div>
```
When there's an error in the textarea the class "g--form-textarea-01--error" should be added:
```sh
<div class="g--form-textarea-01 g--form-textarea-01--error">
    <textarea id="textarea-01--error" class="g--form-textarea-01__item" placeholder=" ">
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
- $textarea-height
- $text-color

### For Modifiers

- $background-color
- $background-color-autofill
- $border-color
- $border-color-focus
- $placeholder-color
- $text-color

## Use

$border-color-focus variable is used for focus and filled styles, if placeholder is not added, it won't work and it'll be always look as if it's filled/focused.

```sh
.g--form-input-01{
    &__item{
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
            $placeholder-color: transparent,
            $text-color: map-get($color-options, a),
        );
    }
}
```
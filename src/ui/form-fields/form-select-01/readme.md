# Form-select-01

## Layout

![alt text][select-01]

[select-01]: /src/img/global-components/form-fields/select-01.jpg

## Html

```sh
<div class="g--form-select-01">
    <select id="select-01" class="g--form-select-01__item" required>
        <option value="" disabled selected>select one</option>
        <option value="option1">option1</option>
        <option value="option2">option2</option>
        <option value="option3">option3</option>
        <option value="option4">option4</option>
    </select>
</div>
```

When there's an error in the select the class "g--form-select-01--error" should be added:

```sh
<div class="g--form-select-01 g--form-select-01--error">
    <select id="select-01" class="g--form-select-01__item" required>
        <option value="" disabled selected>select one</option>
        <option value="option1">option1</option>
        <option value="option2">option2</option>
        <option value="option3">option3</option>
        <option value="option4">option4</option>
    </select>
</div>
```

## Editable variables

- $artwork-url
- $background-color
- $border-color
- $border-color-focus
- $border-radius
- $border-width
- $error-border-color
- $font
- $font-weight: false by default
- $option-color: false by default
- $option-background: false by default
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

$border-color-focus variable is used for focus and filled styles, if it's not required, it won't work and it'll be always look as if it's filled/focused.

```sh
.g--form-select-01{
    @include make-form-select-01(
        $artwork-url: url('/src/img/global-components/form-fields/select-01.jpg'),
        $border-radius: 0,
        $border-width: 1px,
        $font: f,
        // $font-weight: default
    );
    @include make-form-select-01-modifier(
        $background-color: transparent,
        $border-color: rgba(map-get($color-options, a), .2),
        $border-color-focus: map-get($color-options, a),
        $error-border-color: map-get($color-options, g),
        $text-color: map-get($color-options, a),
        // $option-color: default,
        // $option-background: default,
    );
}
```

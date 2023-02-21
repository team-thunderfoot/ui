# Form-error-01

## Layout

![alt text][error-01]

[error-01]: /src/img/global-components/form-fields/error-01.png

## Html

The error html should be inside the g--form-group-01 div, after the g--form-input-01 component.

```sh
<span class="g--form-error-01">Please complete this required field.</span>
```

## Editable variables

- $font
- $font-weight: false by default
- $text-color

### For Modifiers

- $text-color

## Use

```sh
.g--form-error-01{
    @include make-form-error-01(
        $font: g,
        // $font-weight: default,
    );
    @include make-form-error-01-modifier(
        $text-color: map-get($color-options, g),
    );
}
```
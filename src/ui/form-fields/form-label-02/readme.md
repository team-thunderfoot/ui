# Form-label-02

## Layout

![alt text][label-02]

[label-02]: /src/img/global-components/form-fields/label-02.png

## Html

```html
<label for="text-01" class="g--form-label-02">This is the text input *</label>
```

## Editable variables

- $label-color
- $label-color (focus)
- $label-font
- $label-font (focus)
- $label-font-weight
- $label-font-weight (focus)

## Use

```scss
.g--form-label-02 {
    .g--form-label-02 {
        @include make-form-label-02();
        @include make-form-label-02-modifier(
            // $label-color: map-get($color-options, a),
            // $label-font: f,
            // $label-font-weight: 600,
        );
    }
    .g--form-input-02__item:focus + .g--form-label-02,
    .g--form-input-02__item:not(:placeholder-shown) + .g--form-label-02,
    .g--form-textarea-02__item:focus + .g--form-label-02,
    .g--form-textarea-02__item:not(:placeholder-shown) + .g--form-label-02 {
        @include make-form-label-02-focus();
        @include make-form-label-02-focus-modifier(
            // $label-color: map-get($color-options, h),
            // $label-font: g,
            // $label-font-weight: 400,
        );
    }
}
```

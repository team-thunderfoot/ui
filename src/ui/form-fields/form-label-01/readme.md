# Form-label-01

## Layout

![alt text][label-01]

[label-01]: /src/img/global-components/form-fields/label-01.png

## Html

```html
<label for="text-01" class="g--form-label-01">This is the text input *</label>
```

## Editable variables

- $label-color
- $label-font
- $label-font-weight

## Use

```scss
.g--form-label-01{
    @include make-form-label-01();
    @include make-form-label-01-modifier(
        // $label-color: map-get($color-options, a),
        // $label-font: f,
        // $label-font-weight: 800,
    );
}
```
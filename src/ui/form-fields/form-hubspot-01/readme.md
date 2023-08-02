# Form-hubspot-01

## Layout

![alt text][hubspot-01]

[hubspot-01]: /src/img/global-components/form-fields/hubspot-01.jpg

## Html

```html
<div class="g--form-hubspot-01">
    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
    <script>
    hbspt.forms.create({
        region: "na1",
        portalId: "3120747",
        formId: "4b80d891-cf03-4eba-a32e-8fa9e4b1e024"
    });
    </script>
</div>
```

## Editable variables

- $checkbox-artwork-img
- $checkbox-link-class
- $checkbox-square-border-width
- $checkbox-square-color
- $checkbox-square-color-focus
- $checkbox-square-width
- $checkbox-title-color
- $checkbox-title-font
- $checkbox-title-font-weight
- $date-background-image-a
- $file-input-btn-background-color
- $file-input-btn-font
- $file-input-btn-font-weight
- $file-input-btn-text-color
- $form-error-font
- $form-error-font-weight
- $form-error-text-color
- $input-background-color
- $input-background-color-autofill
- $input-border-color
- $input-border-color-focus
- $input-border-radius
- $input-border-style
- $input-border-width
- $input-error-border-color
- $input-error-font
- $input-error-font-weight
- $input-error-text-color
- $input-font
- $input-font-size-mobile
- $input-font-weight
- $input-placeholder-color
- $input-text-color
- $label-color
- $label-font
- $label-font-weight
- $option-background
- $option-color
- $radio-artwork-color
- $radio-circle-border-style
- $radio-circle-border-width
- $radio-circle-color
- $radio-circle-color-focus
- $radio-circle-width
- $select-artwork-border-radius
- $select-artwork-border-width
- $select-artwork-color
- $submit-btn-class
- $textarea-height

## Use

`$X-color-focus` variable is used for focus and filled styles.

```scss
.g--form-hubspot-01{
    @include make-form-hubspot-01();
    @include make-form-hubspot-01-modifier(
        $checkbox-artwork-img: './img/global-components/form-fields/checkbox-artwork.svg',
        $checkbox-link-class: g--link-01,
        $checkbox-square-border-width: 1px,
        $checkbox-square-color: rgba(map-get($color-options, a), .2),
        $checkbox-square-color-focus: map-get($color-options, a),
        $checkbox-square-width: $measure*2,
        $checkbox-title-color: map-get($color-options, a),
        $checkbox-title-font: f,
        $checkbox-title-font-weight: 300,
        $date-background-image-a: './img/global-components/form-fields/checkbox-artwork.svg',
        $file-input-btn-background-color: map-get($color-options, a),
        $file-input-btn-text-color: map-get($color-options, b),
        $form-error-font: g,
        $form-error-font-weight: 400,
        $form-error-text-color: map-get($color-options, g),
        $input-background-color: transparent,
        $input-background-color-autofill: transparent,
        $input-border-color: rgba(map-get($color-options, a), .2),
        $input-border-color-focus: map-get($color-options, a),
        $input-border-radius: 0,
        $input-border-style: solid,
        $input-border-width: 1px,
        $input-error-border-color: map-get($color-options, g),
        $input-error-font: f,
        $input-error-font-weight: 300,
        $input-error-text-color: map-get($color-options, g),
        $input-font: f,
        $input-font-size-mobile: 1rem,
        $input-font-weight: 500,
        $input-placeholder-color: transparent,
        $input-text-color: map-get($color-options, a),
        $label-color: map-get($color-options, a),
        $label-font: f,
        $label-font-weight: 500,
        $option-background: false,
        $option-color: false,
        
        $radio-artwork-color: map-get($color-options, g),
        $radio-circle-color: rgba(map-get($color-options, a), .2),
        $radio-circle-color-focus: map-get($color-options, a),
        $select-artwork-color: map-get($color-options, a),
        $file-input-btn-font: f,
        $radio-circle-border-width: 1px,
        $radio-circle-border-style: solid,
        $radio-circle-width: $measure*2,
        $select-artwork-border-width: 1px,
        $submit-btn-class: g--btn-01,
        $textarea-height: $measure*10,
        $file-input-btn-font-weight: false,
        $select-artwork-border-radius: false,
    );
}
```

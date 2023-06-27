# Form-textarea-01

## Layout

![alt text][textarea-01]

[textarea-01]: /src/img/global-components/form-fields/textarea-01.jpg

## Html

```html
<div class="g--form-textarea-01">
    <textarea id="textarea-01" class="g--form-textarea-01__item" placeholder=" ">
</div>
```

When there's an error in the textarea the class "g--form-textarea-01--error" should be added:

```html
<div class="g--form-textarea-01 g--form-textarea-01--error">
    <textarea id="textarea-01--error" class="g--form-textarea-01__item" placeholder=" ">
</div>
```

## Editable variables

-   $background-color
-   $background-color-autofill
-   $border-color
-   $border-color-focus
-   $border-radius
-   $border-style
-   $border-width
-   $error-border-color
-   $font
-   $font-size-mobile
-   $font-weight
-   $placeholder-color
-   $text-color
-   $textarea-height

## Use

`$border-color-focus` variable is used for focus and filled styles, if placeholder is not added, it won't work and it'll be always look as if it's filled/focused.

```scss
.g--form-textarea-01 {
    @include make-form-textarea-01();
    @include make-form-textarea-01-modifier(
        // $background-color: transparent,
        // $background-color-autofill: transparent,
        // $border-color: rgba(map-get($color-options, a), .2),
        // $border-color-focus: map-get($color-options, a),
        // $border-radius: 0,
        // $border-style: solid,
        // $border-width: 1px,
        // $error-border-color: map-get($color-options, f),
        // $font: f,
        // $font-size-mobile: 1rem,
        // $font-weight: 300,
        // $placeholder-color: transparent,
        // $text-color: map-get($color-options, a),
        // $textarea-height: $measure*10,
    );
}
```

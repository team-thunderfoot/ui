# Form-textarea-02

## Layout

![alt text][textarea-02]

[textarea-02]: /src/img/global-components/form-fields/textarea-02.jpg

## Html

```html
<div class="g--form-textarea-02">
    <textarea type="text" id="text-02" class="g--form-textarea-02__item" placeholder="placeholder">
</div>
```

When there's an error in the textarea the class "g--form-textarea-02--error" should be added:

```html
<div class="g--form-textarea-02 g--form-textarea-02--error">
    <textarea type="text" id="text-02--error" class="g--form-textarea-02__item" placeholder="placeholder">
</div>
```

In this case, the label should be inside "g--form-textarea-02":

```html
<div class="g--form-textarea-02">
    <textarea type="text" id="text-02" class="g--form-textarea-02__item" placeholder="placeholder">
    <label for="text-02" class="g--form-label-02">This is the text textarea *</label>
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
.g--form-textarea-02 {
    @include make-form-textarea-02();
    @include make-form-textarea-02-modifier(
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
        // $font-weight: 800,
        // $placeholder-color: transparent,
        // $text-color: map-get($color-options, a),
        // $textarea-height: $measure*10,
    );
}
```

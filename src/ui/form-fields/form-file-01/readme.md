# Form-file-01

## Layout

![alt text][input-01]

[input-01]: /src/img/global-components/form-fields/file-01.jpg

## Html

```html
<div class="g--form-file-01">
    <input type="file" id="file-01" class="g--form-file-01__item" required />
</div>
```

When there's an error in the input the class "g--form-input-01--error" should be added:

```html
<div class="g--form-file-01 g--form-file-01--error">
    <input type="file" id="file-01" class="g--form-file-01__item" required />
</div>
```

## Editable variables

- $background-color
- $border-color
- $border-color-focus
- $border-radius
- $border-style
- $border-width
- $btn-background
- $btn-background-position
- $btn-background-repeat
- $btn-background-size
- $btn-border-color
- $btn-border-style
- $btn-border-width
- $btn-font
- $btn-font-weight
- $btn-text-color
- $btn-transition
- $error-border-color
- $font
- $font-size-mobile
- $font-weight
- $hover-btn-background-color
- $hover-btn-background-position
- $hover-btn-background-size
- $hover-btn-border-color
- $hover-btn-text-color
- $text-color

## Use

`$border-color-focus` variable is used for focus and filled styles, if placeholder is not added, it won't work and it'll be always look as if it's filled/focused.

```scss
.g--form-input-01 {
    @include make-form-file-01();
    @include make-form-file-01-modifier(
        // $background-color: transparent,
        // $border-color-focus: map-get($color-options, a),
        // $border-color: rgba(map-get($color-options, a), .2),
        // $border-radius: 0,
        // $border-style: solid,
        // $border-width: 1px,
        // $btn-background-position: (left center, center),
        // $btn-background-repeat: no-repeat,
        // $btn-background-size: (0% 100%, 100%),
        // $btn-background: (linear-gradient(map-get($color-options, b), map-get($color-options, b)), linear-gradient(map-get($color-options, a), map-get($color-options, a))),
        // $btn-border-color: map-get($color-options, a),
        // $btn-border-style: solid,
        // $btn-border-width: 1px 1px 0,
        // $btn-font-weight: 600,
        // $btn-font: f,
        // $btn-text-color: map-get($color-options, b),
        // $btn-transition: (color $time-b $ease-standard-a, background-size $time-b $ease-standard-a),
        // $error-border-color: map-get($color-options, f),
        // $font-size-mobile: 1rem,
        // $font-weight: 400,
        // $font: f,
        // $hover-btn-background-color: map-get($color-options, a),
        // $hover-btn-background-position: (right top),
        // $hover-btn-background-size: (100% 100%, 100%),
        // $hover-btn-border-color: map-get($color-options, a),
        // $hover-btn-text-color: map-get($color-options, a),
        // $text-color: map-get($color-options, a),
    );
}
```

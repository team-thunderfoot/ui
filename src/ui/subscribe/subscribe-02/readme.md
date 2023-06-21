# Subscribe-02

## Layout

![alt text][subscribe-02]

[subscribe-02]: /src/img/global-components/subscribe/subscribe-02.jpg

## Html
Hubspot subscribe:
```html
<div class="g--subscribe-02">
    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
    <script>
    hbspt.forms.create({
        region: "na1",
        portalId: "3120747",
        formId: "97daf512-13bc-453e-9005-e1304c73e5f9"
    });
    </script>
</div>
```

## Editable variables

- $breakpoint
- $btn-class
- $btn-min-height
- $btn-width
- $error-font
- $error-font-weight
- $error-height
- $error-text-color
- $input-background-color
- $input-background-color-autofill
- $input-border-color
- $input-border-color-focus
- $input-border-radius
- $input-border-style
- $input-border-width
- $input-error-border-color
- $input-font
- $input-font-size-mobile
- $input-font-weight
- $input-min-height
- $input-text-color
- $label-color
- $label-color-focus
- $label-font
- $label-font-size-focus
- $label-font-weight
- $label-font-weight-focus
- $label-line-height-focus
- $label-required-color
- $label-required-color-focus
- $label-required-font
- $label-required-font-size-focus
- $label-required-font-weight
- $label-required-font-weight-focus
- $label-required-line-height-focus
- $success-message-font
- $success-message-font-weight
- $success-message-text-color

## Use
For this form a placeholder must be added. It doesn't work well in firefox (tested in Jun 2023), for browsers it doesn't work properly it'll always look like it's focused/filled.

```scss
.g--subscribe-02{
    @include make-subscribe-02();
    @include make-subscribe-02-modifier(
        // $breakpoint: $mobile,
        // $btn-class: g--btn-01,
        // $btn-min-height: 60px,
        // $btn-width: 105px,
        // $error-font-weight: 300,
        // $error-font: g,
        // $error-height: $measure*3,
        // $error-text-color: map-get($color-options, h),
        // $input-background-color-autofill: transparent,
        // $input-background-color: map-get($color-options, b),
        // $input-border-color-focus: map-get($color-options, a),
        // $input-border-color: rgba(map-get($color-options, a), .5),
        // $input-border-radius: $measure,
        // $input-border-style: solid,
        // $input-border-width: 1px,
        // $input-error-border-color: map-get($color-options, a),
        // $input-font-size-mobile: 1rem,
        // $input-font-weight: 300,
        // $input-font: f,
        // $input-min-height: 42px,
        // $input-text-color: map-get($color-options, a),
        // $label-color-focus: map-get($color-options, f),
        // $label-color: map-get($color-options, g),
        // $label-font-size-focus: .75rem,
        // $label-font-weight-focus: 700,
        // $label-font-weight: 700,
        // $label-font: f,
        // $label-line-height-focus: 1,
        // $label-required-colofocus: map-get($color-options, f),
        // $label-required-color: map-get($color-options, f),
        // $label-required-font-size-focus: 1rem,
        // $label-required-font-weight-focus: 500,
        // $label-required-font-weight: 400,
        // $label-required-font: a,
        // $label-required-line-height-focus: 1,
        // $success-message-font-weight: 600,
        // $success-message-font: d,
        // $success-message-text-color: map-get($color-options, e),
    );
}
```
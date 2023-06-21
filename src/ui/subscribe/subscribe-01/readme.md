# Subscribe-01

## Layout

![alt text][subscribe-01]

[subscribe-01]: /src/img/global-components/subscribe/subscribe-01.jpg

## Html

Hubspot subscribe:

```html
<div class="g--subscribe-01">
    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
    <script>
        hbspt.forms.create({
            region: "na1",
            portalId: "3120747",
            formId: "97daf512-13bc-453e-9005-e1304c73e5f9",
        });
    </script>
</div>
```

## Editable variables

-   $breakpoint
-   $btn-class
-   $btn-min-height
-   $btn-width
-   $error-font
-   $error-font-weight
-   $error-height
-   $error-text-color
-   $input-background-color
-   $input-background-color-autofill
-   $input-border-color
-   $input-border-color-focus
-   $input-border-radius
-   $input-border-style
-   $input-border-width
-   $input-error-border-color
-   $input-font
-   $input-font-size-mobile
-   $input-font-weight
-   $input-min-height
-   $input-placeholder-color
-   $input-text-color
-   $label-color
-   $label-font
-   $label-font-weight
-   $label-required-color
-   $label-required-font
-   $label-required-font-weight
-   $success-message-font
-   $success-message-font-weight
-   $success-message-text-color

## Use

`$input-border-color-focus` variable is used for focus and filled styles, if placeholder is not added, it won't work and it'll be always look as if it's filled/focused.

```scss
.g--subscribe-01 {
    @include make-subscribe-01();
    @include make-subscribe-01-modifier(
        // $breakpoint: $mobile,
        // $btn-class: g--btn-01,
        // $btn-min-height: 60px,
        // $btn-width: 105px,
        // $error-font-weight: 300,
        // $error-font: g,
        // $error-height: $measure * 3,
        // $error-text-color: map-get($color-options, g),
        // $input-background-color-autofill: ,
        // $input-background-color: map-get($color-options, b),
        // $input-border-color-focus: map-get($color-options, a),
        // $input-border-color: rgba(map-get($color-options, a), 0.5),
        // $input-border-radius: $measure,
        // $input-border-style: solid,
        // $input-border-width: 1px,
        // $input-error-border-color: map-get($color-options, a),
        // $input-font-size-mobile: 1rem,
        // $input-font-weight: 300,
        // $input-font: f,
        // $input-min-height: 42px,
        // $input-placeholder-color: transparent,
        // $input-text-color: map-get($color-options, a),
        // $label-color: map-get($color-options, g),
        // $label-font-weight: 700,
        // $label-font: f,
        // $label-required-color: map-get($color-options, f),
        // $label-required-font-weight: 400,
        // $label-required-font: a,
        // $success-message-font-weight: 600,
        // $success-message-font: d,
        // $success-message-text-color: map-get($color-options, e)
    );
}
```

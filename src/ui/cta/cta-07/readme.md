# Cta-07

## Layout

![alt text][cta-07]

[cta-07]: /src/img/global-components/cta/cta-07.jpg

## Html

```html
<div class="g--cta-07">
    <div class="g--cta-07__bg-items" style="background-image: url(/src/img/global-components/bg-placeholder.jpg)"></div>
    <div class="g--cta-07__ft-items">
        <div class="g--cta-07__ft-items__left-items">
            <h2 class="g--cta-07__ft-items__left-items__title">CTA-07 Suscribe to Our Newsletter. Lorem Ipsum Dolor Sit Amet.</h2>
        </div>
        <div class="g--cta-07__ft-items__right-items">
            <div class="g--cta-07__ft-items__right-items__content">
                <label for="subscribe-email" class="g--cta-07__ft-items__right-items__content__hd">Sign up for our newsletter</label>
                <div class="g--cta-07__ft-items__right-items__content__bd">
                    <input type="subscribe-email" id="subscribe-email" placeholder="Email adress" class="g--cta-07__ft-items__right-items__content__bd__item" />
                </div>
                <span class="g--cta-07__ft-items__right-items__content__subtitle">Please complete this required field.</span>
            </div>
            <div class="g--cta-07__ft-items__right-items__wrapper">
                <input type="submit" class="g--cta-07__ft-items__right-items__wrapper__btn" value="Subscribe" />
            </div>
        </div>
    </div>
</div>
```

## Editable variables

$background-position
$background-size
$border-radius
$breakpoint
$btn-class
$error-class
$hover-background-img-zoom
$hover-shadow
$hover-title-color
$hover-transform
$input-class
$label-class
$mask-color
$text-align
$title-color
$title-font
$title-font-weight
$title-max-lines

## Use

To use it we have to import the css of the $btn-class in the entry

```scss
.g--cta-07 {
    @include make-cta-07();
    @include make-cta-07-modifier(
        // $text-align: false,
        // $title-font-weight: false,
        // $title-max-lines: false,
        $background-position: left top,
        $background-size: cover,
        $border-radius: 8px,
        $breakpoint: $tablets,
        $btn-class: g--btn-01,
        $error-class: g--form-error-01,
        $hover-background-img-zoom: 1.2,
        $hover-shadow: 0 0 $measure * 2 map-get($color-options, h),
        $hover-title-color: map-get($color-options, c),
        $hover-transform: translateY(-$measure),
        $input-class: g--form-input-01,
        $label-class: g--form-label-01,
        $mask-color: rgba(map-get($color-options, a), 0.5),
        $title-color: map-get($color-options, b),
        $title-font: b
    );
}
```

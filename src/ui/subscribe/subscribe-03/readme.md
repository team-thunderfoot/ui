# Subscribe-03

## Layout

![alt text][subscribe-03]

[subscribe-03]: /src/img/global-components/subscribe/subscribe-03.jpg

## Html
```html
<form class="g--subscribe-03">
    <fieldset class="g--subscribe-03__wrapper">
        <div class="g--form-input-02">
            <input type="text" id="text-02" class="g--form-input-02__item" placeholder="placeholder">
            <label for="text-02" class="g--form-label-02">This is the text input *</label>
        </div>
    </fieldset>
    <button class="g--subscribe-03__btn g--btn-01">Submit</button>
</form>
```

## Editable variables

- $breakpoint
- $btn-min-height
- $btn-width
- $error-height
- $input-min-height
- $recaptcha

## Use
We can add any input and button we want.

```scss
.g--subscribe-03{
    @include make-subscribe-03();
    @include make-subscribe-03-modifier(
        // $breakpoint: $tablets,
        // $btn-min-height: 50px,
        // $btn-width: 105px,
        // $error-height: $measure*2,
        // $input-min-height: 50px,
        // $recaptcha: true,
    );
}
```
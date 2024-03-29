# banner-02

## Layout

![alt text][banner-02]

[banner-02]: /src/img/global-components/banner/banner-02.png

## Html for a banner

```html
      <section class="g--banner-02">
        <div class="f--container">
            <div class="f--row">
                <div class="f--col-12">
                  <div class="g--banner-02__wrapper">
                    <p class="g--banner-02__wrapper__title">Lorem ipsum dolor sit amet, consectetuer</p>
                    <a href="#" class="g--banner-02__wrapper__btn" target="_blank" rel="noopener noreferrer">Button Label</a>
                  </div>
                </div>
            </div>
        </div>       
      </section>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
      <section class="g--banner-02">
        <div class="f--container">
            <div class="f--row">
                <div class="f--col-12">
                  <div class="g--banner-02__wrapper">
                    <div class="g--banner-02__wrapper__title c--content-a">
                        <p>Lorem ipsum dolor sit amet, consectetuer</p>
                    </div>
                    <a href="#" class="g--banner-02__wrapper__btn" target="_blank" rel="noopener noreferrer">Button Label</a>
                  </div>
                </div>
            </div>
        </div>       
      </section>
```

## Editable variables

- $background-color
- $btn-class
- $btn-font
- $min-height
- $shadow
- $title-color
- $title-font
- $title-font-weight

## Use

```scss
.g--banner-02 {
    @include make-banner-02();
    @include make-banner-02-modifier(
        // $background-color: map-get($color-options, a),
        // $btn-class: g--btn-01,
        // $btn-font: f,
        // $min-height: 100px,
        // $shadow: 0 $measure $measure*2 map-get($color-options, a),
        // $title-color: map-get($color-options, b),
        // $title-font:f,
        // $title-font-weight: 400,
    );
}
```
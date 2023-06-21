# banner-01

## Layout

![alt text][banner-01]

[banner-01]: /src/img/global-components/banner/banner-01.png

## Html for a banner

```html
<section class="g--banner-01">
    <div class="f--container">
        <div class="f--row">
            <div class="f--col-12">
                <p class="g--banner-01__title">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </p>
            </div>
        </div>
    </div>
</section>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<section class="g--banner-01">
    <div class="f--container">
        <div class="f--row">
            <div class="f--col-12">
                <div class="g--banner-01__title c--content-a">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

## Editable variables

- $background-color
- $title-font
- $title-font-weight
- $title-color

## Use

```scss
.g--banner-01 {
    @include make-banner-01();
    @include make-banner-01-modifier(
        $background-color: map-get($color-options, a),
        $title-font: c,
        $title-font-weight: 400,
        $title-color: map-get($color-options, b)
    );
}
```

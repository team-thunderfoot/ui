# 404-01

## Layout

![alt text][404-01]

[404-01]: /src/img/global-components/404/404-01.png

## Html

```html
<div class="g--404-01">
    <div class="f--container">
        <div class="f--row justify-content--center">
            <div class="f--col-8 f--col-tablets-12">
                <div class="g--404-01__media-wrapper">
                    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--404-01__media-wrapper__media g--lazy-01">
                </div>
                <h1 class="g--404-01__title">Page not found</h1>
                <div class="g--404-01__subtitle c--content-a">
                    <p>This is a b--content. The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                </div>
                <a href="#" class="g--404-01__btn">Button Label</a>
            </div>
        </div>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color
- $btn-class
- $btn-font
- $title-color
- $title-font
- $title-font-weight
- $text-align
- $min-height
- $img-aspect-ratio
- $img-height
- $img-position
- $img-fit
- $img-width

## Use

To use it we have to import the css of the $btn-class in the entry

```scss
.g--404-01 {
    @include make-404-01();
    @include make-404-01-modifier(
        // $background-color: map-get($color-options, b),
        // $btn-class: g--btn-01,
        // $btn-font: f,
        // $img-aspect-ratio: false,
        // $img-fit: cover,
        // $img-height: 100px,
        // $img-position: center,
        // $img-width: auto,
        // $min-height: calc(100vh - 109px),
        // $text-align: false,
        // $title-color: map-get($color-options, a),
        // $title-font-weight: bold,
        // $title-font: b
    );

    // @media all and ($viewport-type: $tablets) {
    //     @include make-404-01-modifier(
    //         $min-height: calc(100vh - 99px),
    //     );
    // }
}
```

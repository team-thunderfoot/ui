# 404-01

## Layout

![alt text][404-01]

[404-01]: /src/img/global-components/404/404-01.png

## Html

```sh
<div class="g--404-01">
    <div class="f--container">
        <div class="f--row justify-content--center">
            <div class="f--col-8 f--col-tablets-12">
                <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--404-01__media g--lazy-01">
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

- $background-color: false by default
- $btn-class
- $btn-class-modifier: false by default
- $min-height
- $min-height-desktop: false by default
- $min-height-tabletl: false by default
- $min-height-tabletm: false by default
- $min-height-tablets: false by default
- $min-height-mobile: false by default
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default

### For Modifiers

- $background-color
- $btn-class-modifier
- $text-align
- $title-color

## Use

To use it we have to import the css of the $btn-class in the entry

```sh
.g--404-01 {
    @include make-404-01(
        $btn-class: g--btn-02,
        $min-height: calc(100vh - 109px),
        $title-font: c,
        // $title-font-weight: default,
        // $min-height-desktop: default,
        // $min-height-tabletl: default,
        // $min-height-tabletm: default,
        // $min-height-tablets: default,
        // $min-height-mobile: default
    );
    @include make-404-01-modifier(
        $title-color: map-get($color-options, a),
        // $background-color: default,
        // $btn-class-modifier: default,
        // $text-align: default
    );
}
```

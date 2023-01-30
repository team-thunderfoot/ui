# Cta-02

## layout

![alt text][cta-02]

[cta-02]: /src/img/global-components/cta/g--cta-02.png

## Html

```sh
<section class="g--cta-02" style="background-image: url(/src/img/global-components/card/card-bg-placeholder.jpg);">
    <div class="f--container">
        <div class="f--row justify-content--center">
            <div class="f--col-8 f--col-tabletm-10 f--col-mobile-12">
                <h2 class="g--cta-02__title">CTA-01 This is the Contact call to action</h2>
                <a href="#" class="g--cta-02__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
            </div>
        </div>
    </div>
</section>
```

## Editable variables

- $background-size
- $background-position
- $title-font
- $btn-class
- $mask-color
- $title-color
- $btn-class-modifier: false by default

### For Modifiers

- $mask-color
- $title-color
- $btn-class-modifier

## Use
To use it we have to import the css of the $btn-class in the entry

```sh
.g--cta-02{
    @include make-cta-02(
        $background-size: cover,
        $background-position: center,
        $title-font: b,
        $btn-class: g--btn-02,
    );
    @include make-cta-02-modifier(
        $mask-color: rgba(map-get($color-options, a), .5),
        $title-color: map-get($color-options, b),
        // $btn-class-modifier: default
    );
}
```
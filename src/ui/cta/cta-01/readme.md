# Cta-01

## layout

![alt text][cta-01]

[cta-01]: /src/img/global-components/cta/g--cta-01.png

## Html

```sh
<section class="g--cta-01">
    <div class="f--container">
        <div class="f--row justify-content--center">
            <div class="f--col-8 f--col-tabletm-10 f--col-mobile-12">
                <h2 class="g--cta-01__title">CTA-01 This is the Contact call to action</h2>
                <a href="#" class="g--cta-01__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
            </div>
        </div>
    </div>
</section>
```

## Editable variables

- $title-font
- $btn-class
- $title-color
- $background-color
- $btn-class-modifier: false by default

### For Modifiers

- $title-color
- $background-color
- $btn-class-modifier

## Use
To use it we have to import the css of the $btn-class in the entry

```sh
.g--cta-01{
    @include make-cta-01(
        $title-font: b,
        $btn-class: g--btn-02,
    );
    @include make-cta-01-modifier(
        $title-color: map-get($color-options, a),
        $background-color: map-get($color-options, e),
        // $btn-class-modifier: default
    );
}
```
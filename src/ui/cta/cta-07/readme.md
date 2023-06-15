# Cta-07

## Layout

![alt text][cta-07]

[cta-07]: /src/img/global-components/cta/cta-07.jpg

## Html

```sh
<div class="g--cta-07" style="background-image: url(/src/img/global-components/bg-placeholder.jpg);">
    <h2 class="g--cta-07__title">CTA-07 This is the Contact call to action</h2>
    <div class="g--cta-07__subtitle c--content-a">
        <p>Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    </div>
    <a href="#" class="g--cta-07__btn" target="_blank" rel="noopener noreferrer">Contact Us</a>
</div>
```

## Editable variables

- $background-position
- $background-size
- $$hover-background-img-zoom
- $btn-class
- $btn-font
- $border-radius
- $mask-color
- $subtitle-color
- $hover-subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $subtitle-max-lines
- $title-color
- $hover-title-color
- $title-font
- $title-font-weight
- $title-max-lines
- $text-align
- $hover-shadow
- $hover-transform

## Use

To use it we have to import the css of the $btn-class in the entry

```sh
.g--cta-07{
    @include make-cta-07();
    @include make-cta-07-modifier(
        $background-position: left top,
        $background-size: cover,
        $hover-background-img-zoom: 1.2,
        $btn-class: g--btn-01,
        // $btn-font: false,
        $border-radius: 8px,
        $mask-color: rgba(map-get($color-options, a), .5),
        $subtitle-color: map-get($color-options, b),
        $hover-subtitle-color: map-get($color-options, c),
        $subtitle-font: d,
        // $subtitle-font-weight: false,
        $subtitle-max-lines: 1,
        $title-color: map-get($color-options, b),
        $hover-title-color: map-get($color-options, c),
        $title-font: b,
        // $title-font-weight: false,
        // $title-max-lines: false,
        // $text-align: false,
        $hover-shadow: 0 0 $measure*2 map-get($color-options, h),
        $hover-transform: translateY(-$measure),
    );
}
```

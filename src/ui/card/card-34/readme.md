# Card-34

## Layout

![alt text][card-34]

[card-34]: /src/img/global-components/card/card-34.jpg

## Html for a card

```html
<div class="g--card-34">
    <div class="g--card-34__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-34__media-wrapper__media g--lazy-01" />
    </div>
    <div class="g--card-34__wrapper">
            <p class="g--card-34__wrapper__meta">Lorem ipsum | Lorem ipsum</p>
        <p class="g--card-34__wrapper__title">Card-34 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        <div class="g--card-34__wrapper__list-group">
            <div class="g--card-34__wrapper__list-group__list-item">Category</div>
            <div class="g--card-34__wrapper__list-group__list-item">Category</div>
        </div>
    </div>
</div>
```

## Editable variables

- $hover-img-zoom
- $hover-title-color
- $hover-title-underline-color
- $hover-transform
- $img-aspect-ratio
- $img-border-radius
- $img-height
- $img-position
- $meta-color
- $meta-font
- $meta-font-weight
- $pill-class
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-34 {
    @include make-card-34();
    @include make-card-34-modifier(
        // $hover-img-zoom: 1.1,
        // $hover-title-color: map-get($color-options, e),
        // $hover-title-underline-color: map-get($color-options, h),
        // $hover-transform: translateY(-5%),
        // $img-aspect-ratio: 1.7,
        // $img-border-radius: 
        // $img-height: 340px,
        // $img-position: center,
        // $meta-color: map-get($color-options, a),
        // $meta-font: f,
        // $meta-font-weight: 400,
        // $pill-class: g--pill-01,
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3
    );
}
```

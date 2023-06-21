# Card-36

## Layout

![alt text][card-36]

[card-36]: /src/img/global-components/card/card-36.jpg

## Html for a card

```html
<div class="g--card-36">
    <div class="g--card-36__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-36__media-wrapper__media g--lazy-01" />
    </div>
    <div class="g--card-36__wrapper">
            <p class="g--card-36__wrapper__meta">Lorem ipsum | Lorem ipsum</p>
        <p class="g--card-36__wrapper__title">Card-36 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-36__wrapper__link">This is a link</a>
    </div>
</div>
```

## Editable variables

- $hover-img-zoom
- $hover-title-color
- $hover-transform
- $img-aspect-ratio
- $img-border-radius
- $img-height
- $img-position
- $link-class
- $link-font
- $meta-color
- $meta-font
- $meta-font-weight
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-36 {
    @include make-card-36();
    @include make-card-36-modifier(
        $hover-img-zoom: 1.1,
        $hover-title-color: map-get($color-options, e),
        $hover-transform: translateY(-5%),
        $img-aspect-ratio: 1.7,
        // $img-border-radius: 
        // $img-height: 340px,
        $img-position: center,
        $link-class: g--link-01,
        $link-font: f,
        $meta-color: map-get($color-options, a),
        $meta-font: f,
        $meta-font-weight: 400,
        $text-align: left,
        $title-color: map-get($color-options, a),
        $title-font: c,
        $title-font-weight: 400,
        $title-max-lines: 3
    );
}
```

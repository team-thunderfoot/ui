# Card-40

## Layout

![alt text][card-42]

[card-42]: /src/img/global-components/card/card-42.png

## Html for a card

```sh
<div class="g--card-40">
    <div class="g--card-40__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-40__media-wrapper__media g--lazy-01">
    </div>
    <div class="g--card-40__wrapper">
        <div class="g--card-40__wrapper__hd">
            <p class="g--card-40__wrapper__hd__meta">Jan 5, 2023</p>
            <p class="g--card-40__wrapper__hd__author">By Author</p>
        </div>
        <p class="g--card-40__wrapper__title">Card-40 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        <div class="g--card-40__wrapper__list-group">
            <div class="g--card-40__wrapper__list-group__list-item">Category</div>
            <div class="g--card-40__wrapper__list-group__list-item">Category</div>
        </div>
    </div>
</div>
```

## Editable variables

- $background-color
- $background-color-hover
- $border-color: false by default
- $border-width
- $border-radius: false by default
- $full-image-height: false by default
- $img-position: false by default
- $pill-class
- $pill-class-modifier: false by default
- $author-color
- $meta-color
- $author-font
- $meta-font
- $text-align: false by default
- $title-color
- $title-color-hover
- $title-font
- $author-font-weight: false by default
- $meta-font-weight: false by default
- $title-font-weight: false by default

### For modifiers

- $background-color
- $background-color-hover
- $border-color
- $full-image-height
- $pill-class-modifier: false by default
- $author-color
- $meta-color
- $text-align
- $title-color
- $title-color-hover

## use

```sh
.g--card-40 {
    @include make-card-40(
        $author-font: g,
        $border-width: 1px,
        $meta-font: g,
        $pill-class: g--pill-01,
        $title-font: f,
        // $border-radius: default
    );
    @include make-card-40-modifier(
        $background-color: map-get($color-options, e),
        $border-color: map-get($color-options, a),
        $author-color: map-get($color-options, a),
        $meta-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $full-image-height: default,
        // $background-color-hover: default,
        // $pill-class-modifier: default,
        // $text-align: default,
        // $title-color-hover: default,
        // $zoom-hover:default,
        // $shadow-hover:default,
        // $translate-hover:default,
    );
}
```
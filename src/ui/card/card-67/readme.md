# Card-67

## Layout

![alt text][card-42]

[card-42]: /src/img/global-components/card/card-42.png

## Html for a card

```sh
<div class="g--card-67">
    <div class="g--card-67__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-67__media-wrapper__media g--lazy-01">
    </div>
    <div class="g--card-67__wrapper">
        <div class="g--card-67__wrapper__hd">
            <p class="g--card-67__wrapper__hd__meta">Jan 5, 2023</p>
            <p class="g--card-67__wrapper__hd__author">By Author</p>
        </div>
        <p class="g--card-67__wrapper__title">Card-67 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        <div class="g--card-67__wrapper__list-group">
            <div class="g--card-67__wrapper__list-group__list-item">Category</div>
            <div class="g--card-67__wrapper__list-group__list-item">Category</div>
        </div>
        <a href="" class="g--card-67__wrapper__link">this is a link</a>
    </div>
</div>
```

## Editable variables

- $background-color
- $background-color-hover
- $border-radius: false by default
- $full-image-height: false by default
- $img-position: false by default
- $pill-class
- $pill-class-modifier: false by default
- $author-color
- $meta-color
- $author-font: false by default
- $meta-font: false by default
- $text-align: false by default
- $title-color
- $title-color-hover
- $title-font: false by default
- $author-font-weight: false by default
- $meta-font-weight: false by default
- $title-font-weight: false by default

### For modifiers

- $background-color
- $background-color-hover
- $full-image-height
- $pill-class-modifier: false by default
- $author-color
- $author-font
- $author-font-weight
- $meta-color
- $meta-font
- $meta-font-weight
- $text-align
- $title-font
- $title-font-weight
- $title-color
- $title-color-hover

## use

```sh
.g--card-67 {
    @include make-card-67(
        $link-class: g--link-01,
        $pill-class: g--pill-01,
        // $border-radius: default,
        // $link-font: default
    );
    @include make-card-67-modifier(
        $background-color: map-get($color-options, e),
        $author-color: map-get($color-options, a),
        $meta-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $author-font: default,
        // $author-font-weight: default,
        // $link-class-modifier: default,
        // $meta-font: default,
        // $meta-font-weight: default,
        // $title-font: default,
        // $title-font-weight: default,
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

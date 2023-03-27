# Card-36

## Layout

![alt text][card-33]

[card-33]: /src/img/global-components/card/card-33.jpg

## Html for a card

```sh
<div class="g--card-33">
    <div class="g--card-33__hd">
        <p class="g--card-33__hd__item-left">
            Jan 5, 2023
        </p>
        <p class="g--card-33__hd__item-right">
            By author
        </p>
    </div>
    <p class="g--card-33__title">
    Card 33 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.
    </p>
    <div class="g--card-33__list-group">
        <div class="g--card-33__list-group__list-item">Category</div>
        <div class="g--card-33__list-group__list-item">Category</div>
    </div>
</div>
```

## Editable variables

- $pill-class
- $author-font
- $meta-font
- $title-font
- $author-font-weight: false by default
- $border-radius: false by default
- $meta-font-weight: false by default
- $title-font-weight: false by default
- $background-color
- $author-color
- $meta-color
- $title-color
- $background-color-hover: false by default
- $pill-class-modifier: false by default
- $text-align: false by default
- $title-color-hover: false by default

### For modifiers

- $background-color
- $author-color
- $meta-color
- $title-color
- $background-color-hover
- $pill-class-modifier
- $text-align
- $title-color-hover

## use

```sh
.g--card-33 {
    @include make-card-33(
        $author-font: g,
        $meta-font: g,
        $title-font: c,
        $pill-class: g--pill-01,
        // $author-font-weight: default,
        // $border-radius: default,
        // $meta-font-weight: default,
        // $title-font-weight: default
    );
    @include make-card-33-modifier(
        $background-color: map-get($color-options, g),
        $author-color: map-get($color-options, a),
        $meta-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $title-color-hover: default,
        // $background-color-hover: default,
        // $pill-class-modifier: default,
        // $text-align: default 
    );
}
```

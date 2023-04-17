# Card-62

## Layout

![alt text][card-42]

[card-42]: /src/img/global-components/card/card-42.png

## Html for a card

```sh
<div class="g--card-62">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-62__media g--lazy-01 f--ar" width="604" height="340">
    <div class="g--card-62__wrapper">
        <p class="g--card-62__wrapper__meta">Jan 5, 2023</p>
        <p class="g--card-62__wrapper__title">Card-62 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    </div>
</div>
```

## Editable variables

- $background-color
- $background-color-hover
- $border-radius: false by default
- $full-image-height: false by default
- $img-position: false by default
- $meta-color
- $meta-font
- $text-align: false by default
- $title-color
- $title-color-hover
- $title-font
- $meta-font-weight: false by default
- $title-font-weight: false by default

### For modifiers

- $background-color
- $background-color-hover
- $full-image-height
- $meta-color
- $text-align
- $title-color
- $title-color-hover

## use

```sh
.g--card-62 {
    @include make-card-62(
        $meta-font: g,
        $title-font: f,
        // $border-radius: default
    );
    @include make-card-62-modifier(
        $background-color: map-get($color-options, e),
        $meta-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $full-image-height: default,
        // $background-color-hover: default,
        // $text-align: default,
        // $title-color-hover: default
    );
}
```

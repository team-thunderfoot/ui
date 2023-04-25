# Card-68

## Layout

![alt text][card-42]

[card-42]: /src/img/global-components/card/card-42.png

## Html for a card

```sh
<div class="g--card-68">
    <div class="g--card-68__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-68__media-wrapper__media g--lazy-01 f--ar" width="604" height="340">
    </div>
    <div class="g--card-68__wrapper">
        <p class="g--card-68__wrapper__meta">Jan 5, 2023</p>
        <p class="g--card-68__wrapper__title">Card-68 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        <a href="" class="g--card-68__wrapper__link">this is a link</a>
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
.g--card-68 {
    @include make-card-68(
        $link-class: g--link-01,
        $meta-font: g,
        $title-font: f,
        // $border-radius: default,
        // $link-font: default,
        // $title-max-lines: default
    );
    @include make-card-68-modifier(
        $background-color: map-get($color-options, e),
        $meta-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $full-image-height: default,
        // $background-color-hover: default,
        // $link-class-modifier: default,
        // $text-align: default,
        // $title-color-hover: default,
        // $shadow-hover: default,
        // $translate-hover: default,
        // $zoom-hover: default,
    );
}
```

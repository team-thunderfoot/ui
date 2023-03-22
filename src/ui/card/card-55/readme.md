# Card-55

## Layout

![alt text][card-55]

[card-55]: /src/img/global-components/card/card-55.png

## Html for a card

```sh
<div class="g--card-55">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-55__media g--lazy-01 f--ar" width="604" height="340">
    <div class="g--card-55__wrapper">
        <p class="g--card-55__wrapper__title">Card-42 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
        <div class="g--card-55__wrapper__list-group">
            <div class="g--card-55__wrapper__list-group__list-item">Category</div>
            <div class="g--card-55__wrapper__list-group__list-item">Category</div>
        </div>
    </div>
</div>
```

## Editable variables

- $background-color
- $background-color-hover
- $border-radius: false by default
- $img-position: false by default
- $pill-class
- $pill-class-modifier: false by default
- $text-align: false by default
- $title-color
- $title-color-hover
- $title-font
- $title-font-weight: false by default

### For modifiers

- $background-color
- $background-color-hover
- $pill-class-modifier: false by default
- $text-align
- $title-color
- $title-color-hover

## use

```sh
.g--card-55 {
    @include make-card-55(
        $pill-class: g--pill-01,
        $title-font: c,
        // $border-radius: default
    );
    @include make-card-55-modifier(
        $background-color: map-get($color-options, e),
        $title-color: map-get($color-options, a),
        // $background-color-hover: default,
        // $full-image-height: default,
        // $pill-class-modifier: default,
        // $text-align: default,
        // $title-color-hover: default
    );
}
```

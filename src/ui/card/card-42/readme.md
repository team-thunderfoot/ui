# Card-42

## Layout

![alt text][card-42]

[card-42]: /src/img/global-components/card/card-42.png

## Html for a card

```sh
<div class="g--card-42">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-42__media g--lazy-01 f--ar" width="604" height="340">
    <div class="g--card-42__wrapper">
    <p class="g--card-42__wrapper__meta">Jan 5, 2023</p>
    <p class="g--card-42__wrapper__title">Card-42 Lorem ipsum dolor sit amet consectetur. Sed pulvinar odio velit fermentum etiam consectetur pretium fringilla metus.</p>
    <div class="g--card-42__wrapper__pill">Category</div>
    <div class="g--card-42__wrapper__pill">Category</div>
    </div>
</div>
```

## Editable variables

- $background-color
- $background-color-hover
- $border-radius: false by default
- $pill-class
- $pill-class-modifier: false by default
- $meta-color
- $meta-font
- $text-align: false by default
- $title-color
- $title-color-hover
- $title-font

### For modifiers

- $background-color
- $background-color-hover
- $pill-class-modifier: false by default
- $meta-color
- $text-align
- $title-color
- $title-color-hover

## use

```sh
.g--card-42 {
    @include make-card-42(
        $meta-font: g,
        $pill-class: g--pill-01,
        $title-font: f,
        // $border-radius: default,
        // $meta-font-weight: default,
        // $title-font-weight: default,
    );
    @include make-card-42-modifier(
        $background-color: map-get($color-options, e),
        $meta-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $background-color-hover: default,
        // $pill-class-modifier: default,
        // $text-align: default,
        // $title-color-hover: default
    );
}
```

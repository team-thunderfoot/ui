# Card-05

## Layout

![alt text][card-05]

[card-05]: /src/img/global-components/card/card-05.png

## Html for a card

```sh
<div class="g--card-05">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-05__media g--lazy-01">
    <h3 class="g--card-05__title">Card 05</h3>
    <p class="g--card-05__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-05__link">This is a link</a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color
- $border-radius: false by default
- $link-class
- $link-class-modifier: false by default
- $subtitle-color
- $subtitle-font
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For modifiers

- $background-color
- $subtitle-color
- $text-align
- $title-color

## Use

To use it we have to import the css of the $link-class in the entry

```sh
.g--card-05{
    @include make-card-05(
        $link-class: g--link-01,
        $subtitle-font: f,
        $title-font: c,
        // $border-radius: default,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
    );
    @include make-card-05-modifier(
        $background-color: map-get($color-options, f),
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $link-class-modifier: default,
        //$text-align: default
    );
}
```

# Card-22

## Layout

![alt text][card-22]

[card-22]: /src/img/global-components/card/card-22.png

## Html for a card

```sh
<div class="g--card-22">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-22__media g--lazy-01">
    <p class="g--card-22__title">Card 22 Solution description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-22__link">This is a link</a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color: false by default
- $border-color
- $border-radius: false by default
- $border-width,
- $link-class
- $link-class-modifier: false by default
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default

### For modifiers

- $background-color
- $link-class-modifier
- $text-align
- $title-color
- $title-font
- $title-font-weight

## Use

```sh
.g--card-22{
    @include make-card-22(
        $link-class: g--link-01,
        $border-width: 1px,
        // $border-radius: default,
    );
    @include make-card-22-modifier(
        $border-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $link-class-modifier: default
        // $background-color: default,
        // $text-align: default,
        // $title-font: default,
        // $title-font-weight: default,
    );
}
```

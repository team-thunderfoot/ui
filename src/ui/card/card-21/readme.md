# Card-21

## Layout

![alt text][card-21]

[card-21]: /src/img/global-components/card/card-21.png

## Html for a card

```sh
<div class="g--card-21">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-21__media g--lazy-01">
    <p class="g--card-21__title">Card 21 lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-21__link">This is a link</a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color
- $border-radius: false by default
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

## use

```sh
.g--card-21{
    @include make-card-21(
        $link-class: g--link-01,
        // $border-radius: default
    );
    @include make-card-21-modifier(
        $background-color: map-get($color-options, f),
        $title-color: map-get($color-options, a),
        // $link-class-modifier: default
        // $text-align: default,
        // $title-font: default,
        // $title-font-weight: default
    );
}
```

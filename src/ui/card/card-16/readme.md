# Card-16

## Layout

![alt text][card-16]

[card-16]: /src/img/global-components/card/card-16.png

## Html for a card

```sh
<div class="g--card-16" style="background-image: url(/src/img/global-components/card/card-bg-placeholder.jpg);">
    <div class="g--card-16__wrapper">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-16__wrapper__media g--lazy-01">
    <h3 class="g--card-16__wrapper__title">Card 16</h3>
    <a href="" class="g--card-16__wrapper__link">This is a link</a>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-position
- $background-size
- $border-radius: false by default
- $link-class
- $link-class-modifier: false by default
- $mask-color
- $text-align: false by default
- $title-color
- $title-font
- $title-font-weight: false by default

### For modifiers

- $text-align
- $title-color

## Use

```sh
.g--card-16{
    @include make-card-16(
        $background-size: cover,
        $background-position: center,
        $link-class: g--link-01,
        $title-font: c,
        // $border-radius: default,
        // $title-font-weight: default,
    );
    @include make-card-16-modifier(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
        // $link-class-modifier: default
        // $text-align: default
    );
}
```

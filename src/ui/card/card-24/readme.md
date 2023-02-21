# Card-24

## Layout

![alt text][card-24]

[card-24]: /src/img/global-components/card/card-24.png

## Html for a card

```sh
<div class="g--card-24 g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-bg-placeholder.jpg">
    <div class="g--card-24__wrapper">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-24__wrapper__media g--lazy-01">
    <p class="g--card-24__wrapper__title">Card 24 description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-24__wrapper__link">This is a link</a>
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

- $link-class-modifier
- $mask-color
- $text-align
- $title-color

## use

```sh
.g--card-24{
    @include make-card-24(
        $link-class: g--link-01,
        $background-size: cover,
        $background-position: center,
        $title-font: f,
        // $border-radius: default,
    );
    @include make-card-24-modifier(
        $mask-color: rgba(map-get($color-options, b), .5),
        $title-color: map-get($color-options, a),
        // $link-class-modifier: default,
        // $text-align: default
    );
}
```

# Card-08

## Layout

![alt text][card-08]

[card-08]: /src/img/global-components/card/card-08.png

## Html for a card

```sh
 <div class="g--card-08 g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-bg-placeholder.jpg">
    <div class="g--card-08__wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-08__wrapper__media g--lazy-01">
        <h3 class="g--card-08__wrapper__title">Card 08</h3>
        <p class="g--card-08__wrapper__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
        <a href="" class="g--card-08__wrapper__link">This is a link</a>
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
- $subtitle-color
- $subtitle-font: false by default
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For modifiers

- $link-class-modifier
- $mask-color
- $subtitle-color
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $subtitle-font
- $subtitle-font-weight

## use

```sh
.g--card-08{
    @include make-card-08(
        $background-position: center,
        $background-size: cover,
        $link-class: g--link-01,
        // $border-radius: default,
    );
    @include make-card-08-modifier(
        $mask-color: rgba(map-get($color-options, b), .5),
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $link-class-modifier: default,
        // $text-align: default,
        // $subtitle-font: default,
        // $title-font: default,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
    );
}
```

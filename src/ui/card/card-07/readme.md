# Card-07

## Layout

![alt text][card-07]

[card-07]: /src/img/global-components/card/card-07.png

## Html for a card

```sh
<div class="g--card-07">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-07__media g--lazy-01">
    <h3 class="g--card-07__title">Card 07</h3>
    <p class="g--card-07__subtitle">Solution description loremmm ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-07__link">This is a link</a>
</div>
```

It is not necessary to add aspect-ratio because the images have height in the css.
```sh
<div class="g--card-07">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-07__media g--lazy-01">
    <h3 class="g--card-07__title">Card 07</h3>
    <div class="g--card-07__subtitle c--content-a"></div>
    <a href="" class="g--card-07__link">This is a link</a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $link-class
- $link-class-modifier: false by default
- $subtitle-color
- $subtitle-font: false by default
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For modifiers

- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $text-align
- $title-color
- $title-font
- $title-font-weight

## Use

```sh
.g--card-07{
    @include make-card-07(
        $link-class: g--link-01,
    );

    @include make-card-07-modifier(
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

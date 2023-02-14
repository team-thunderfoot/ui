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

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $link-class
- $link-class-modifier: false by default
- $subtitle-color
- $subtitle-font
- $text-align: false by default
- $title-color
- $title-font

### For modifiers

- $subtitle-color
- $text-align
- $title-color

## Use

```sh
.g--card-07{
    @include make-card-07(
        $link-class: g--link-01,
        $subtitle-font: f,
        $title-font: c,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
    );

    @include make-card-07-modifier(
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $link-class-modifier: default,
        // $text-align: default
    );
}
```

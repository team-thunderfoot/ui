# Card-04

## Layout

![alt text][card-04]

[card-04]: /src/img/global-components/card/card-04.png

## Html for a card

```sh
<div class="g--card-04 g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-bg-placeholder.jpg">
    <div class="g--card-04__wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-04__wrapper__media g--lazy-01">
        <h3 class="g--card-04__wrapper__title">Card 04</h3>
        <p class="g--card-04__wrapper__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```sh
<div class="g--card-04 g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-bg-placeholder.jpg">
    <div class="g--card-04__wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-04__wrapper__media g--lazy-01">
        <h3 class="g--card-04__wrapper__title">Card 04</h3>
        <p class="g--card-04__wrapper__subtitle c--content-a"></p>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-position
- $background-size
- $border-radius: false by default
- $mask-color
- $subtitle-color
- $subtitle-font: false by default
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For modifiers

- $mask-color
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $text-align
- $title-color
- $title-font
- $title-font-weight

## Use

```sh
.g--card-04{
    @include make-card-04(
        $background-position: center,
        $background-size: cover,
        // $border-radius: default,
    );
    @include make-card-04-modifier(
        $mask-color: rgba(map-get($color-options, b), .5),
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $subtitle-font: default,
        // $subtitle-font-weight: default,
        // $text-align: default,
        // $title-font: default,
        // $title-font-weight: default,
    );
}
```

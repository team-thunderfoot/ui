# Card-08

## Layout

![alt text][card-08]

[card-08]: /src/img/global-components/card/card-08.png

## Html for a card

```sh
 <div class="g--card-08" style="background-image: url(/src/img/global-components/card/card-bg-placeholder.jpg);">
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
- $mask-color
- $subtitle-color
- $subtitle-font,
- $text-align: false by default
- $title-color
- $title-font

### For modifiers

- $subtitle-color
- $text-align
- $title-color

## use

```sh
.g--card-08{
    @include make-card-08(
        $background-position: center,
        $background-size: cover,
        $link-class: g--link-01,
        $subtitle-font: f,
        $title-font: c,
        // $border-radius: default,
    );
    @include make-card-08-color(
        $mask-color: rgba(map-get($color-options, b), .5),
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $text-align: default
    );
}
```

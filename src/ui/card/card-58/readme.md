# Card-58

## Layout

![alt text][card-58]

[card-58]: /src/img/global-components/card/card-58.png

## Html for a card

```sh
<div class="g--card-58">
    <div class="g--card-58__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/logo-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-58__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-58__title">Card 58</h3>
    <h4 class="g--card-58__subtitle">Job Position</h4>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $img-border-radius: false by default
- $text-align: false by default
- $subtitle-color
- $subtitle-font
- $title-color
- $title-font
- $img-background-color: false by default
- $img-background-color-hover: false by default
- $title-color-hover: false by default
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For modifiers

- $img-background-color
- $img-background-color-hover
- $title-color-hover
- $subtitle-color
- $text-align
- $title-color

## use

```sh
.g--card-58{
    @include make-card-58(
        $subtitle-font: f,
        $title-font: d,
        // $img-border-radius: default,
        // $title-font-weight: default,
        // $subtitle-font-weight: default,
    );
    @include make-card-58-modifier(
        $subtitle-color: map-get($color-options, a),
        $title-color: map-get($color-options, a),
        // $text-align: default,
        // $img-background-color: default,
        // $img-background-color-hover: default,
        // $title-color-hover: default,
    );
}
```

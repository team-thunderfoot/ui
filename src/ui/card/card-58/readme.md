# Card-58

## Layout

![alt text][card-58]

[card-58]: /src/img/global-components/card/card-58.png

## Html for a card

```sh
<div class="g--card-58">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-58__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
    <h3 class="g--card-58__title">Card 57</h3>
    <h4 class="g--card-58__subtitle">Job Position</h4>
</div>
```

##### \*Aspect Ratio

For the image, we have to add width, height and aspect ratio dynamically.

## Editable variables

- $img-border-radius: false by default
- $text-align: false by default
- $subtitle-color
- $subtitle-font
- $title-color
- $title-font
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For modifiers

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
    );
}
```

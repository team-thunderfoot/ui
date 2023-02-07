# Card-57

## Layout

![alt text][card-57]

[card-57]: /src/img/global-components/card/card-57.png

## Html for a card

```sh
<div class="g--card-57">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-57__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
    <h3 class="g--card-57__title">Card 57</h3>
    <h4 class="g--card-57__subtitle">Job Position</h4>
</div>
```

##### \*Aspect Ratio

For the image, we have to add width, height and aspect ratio dynamically.

## Editable variables

- $img-border-radius: false by default
- $title-font
- $subtitle-font
- $text-align: false by default
- $title-color
- $subtitle-color

### For modifiers

- $text-align
- $title-color
- $subtitle-color

## use

```sh
.g--card-57{
    @include make-card-57(
        // $img-border-radius: default,
        $title-font: d,
        $subtitle-font: f,
    );
    @include make-card-57-modifier(
        // $text-align: default,
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
    );
}
```

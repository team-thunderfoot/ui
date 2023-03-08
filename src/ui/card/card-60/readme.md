# Card-60

## Layout

![alt text][card-60]

[card-60]: /src/img/global-components/card/card-60.jpg

## Html for a card

```sh
<div class="g--card-60">
    <div class="g--card-60__wrapper">
        <h2 class="g--card-60__wrapper__hd">Card 60</h2>
        <p class="g--card-60__wrapper__bd">Lorem ipsum dolor sit amet consectetur. Vulputate facilisi ultrices pellentesque elit vel sit eu nascetur vitae.</p>
        <div class="g--card-60__wrapper__ft">
            <p class="g--card-60__wrapper__ft__title">Person Name</p>
            <p class="g--card-60__wrapper__ft__subtitle">Job Position</p>
        </div>
        <a href="#" class="g--card-60__wrapper__btn" target="_blank" rel="noopener noreferrer">This is a link</a>
    </div>
    <div class="g--card-60__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/img-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="img alt" class="g--card-60__media-wrapper__media g--lazy-01 f--ar" width="1000" height="1000" style="aspect-ratio: 1000 / 1000">
    </div>
</div>
```

##### \*Aspect Ratio

For the image, we have to add width, height and aspect ratio dynamically.

## Editable variables

- $background-color: false by default
- $btn-class
- $btn-class-modifier: false by default
- $content-color
- $content-font
- $heading-color
- $heading-font
- $person-color
- $person-font
- $position-color
- $position-font
- $border-radius: false by default
- $change-order-reponsive: false by default
- $content-font-weight: false by default
- $heading-font-weight: false by default
- $img-position: false by default
- $person-font-weight: false by default
- $position-font-weight: false by default
- $text-align: false

### For modifiers

- $background-color
- $btn-class-modifier
- $content-color
- $heading-color
- $person-color
- $position-color
- $text-align

## use

```sh
.g--card-60{
    @include make-card-60(
        $content-font: c,
        $heading-font: f,
        $person-font: d,
        $position-font: d,
        $btn-class: g--link-01,
        // $border-radius: default,
        // $heading-font-weight: default,
        // $person-font-weight: default,
        // $position-font-weight: default,
        // $change-order-reponsive: default,
        // $content-font-weight: default,
        // $img-position: default,
    );
    @include make-card-60-modifier(
        $content-color: map-get($color-options, a),
        $heading-color: map-get($color-options, a),
        $person-color: map-get($color-options, a),
        $position-color: map-get($color-options, a),
        // $background-color: default,
        // $text-align: default,
        // $btn-class-modifier: default
    );
}
```

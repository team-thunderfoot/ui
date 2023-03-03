# Card-59

## Layout

![alt text][card-59]

[card-59]: /src/img/global-components/card/card-59.jpg

## Html for a card

```sh
<div class="g--card-59">
    <div class="g--card-59__wrapper">
        <h2 class="g--card-59__wrapper__hd">Card 59</h2>
        <p class="g--card-59__wrapper__bd">Lorem ipsum dolor sit amet consectetur. Vulputate facilisi ultrices pellentesque elit vel sit eu nascetur vitae.</p>
        <div class="g--card-59__wrapper__ft">
            <p class="g--card-59__wrapper__ft__title">Person Name</p>
            <p class="g--card-59__wrapper__ft__subtitle">Job Position</p>
        </div>
        <a href="#" class="g--card-59__wrapper__btn" target="_blank" rel="noopener noreferrer">This is a link</a>
    </div>
    <div class="g--card-59__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/logo-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="img alt" class="g--card-59__media-wrapper__media g--lazy-01 f--ar" width="254" height="254" style="aspect-ratio: 254 / 254">
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
- $img-background-color: false by default
- $person-color
- $person-font
- $position-color
- $position-font
- $border-radius: false by default
- $change-order-reponsive: false by default
- $content-font-weight: false by default
- $heading-font-weight: false by default
- $person-font-weight: false by default
- $position-font-weight: false by default
- $text-align: false

### For modifiers

- $background-color
- $btn-class-modifier
- $content-color
- $heading-color
- $img-background-color
- $person-color
- $position-color
- $text-align

## use

```sh
.g--card-59{
    @include make-card-59(
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
    );
    @include make-card-59-modifier(
        $content-color: map-get($color-options, a),
        $heading-color: map-get($color-options, a),
        $person-color: map-get($color-options, a),
        $position-color: map-get($color-options, a),
        // $background-color: default,
        // $img-background-color: default,
        // $text-align: default,
        // $btn-class-modifier: default
    );
}
```

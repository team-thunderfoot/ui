# Card-09

## Layout

![alt text][card-09]

[card-09]: /src/img/global-components/card/card-09.png

## Html for a card

```html
<div class="g--card-09">
    <div class="g--card-09__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-09__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-09__title">Lorem ipsum</h3>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-09">
    <div class="g--card-09__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-09__media-wrapper__media g--lazy-01">
    </div>
    <div class="g--card-09__title c--content-a">Lorem ipsum</div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-color
- $border-radius
- $hover-background-color
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-transform
- $img-aspect-ratio
- $img-height
- $img-position
- $img-size
- $img-width
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

```scss
.g--card-09{
    @include make-card-09();
    @include make-card-09-modifier(
        // $background-color: false,
        // $border-radius: false,
        // $hover-background-color: false,
        // $hover-img-zoom: false,
        // $hover-shadow: false,
        // $hover-title-color: false,
        // $hover-transform: false,
        // $img-aspect-ratio: false,
        // $img-height: false,
        // $img-position: false,
        // $img-size: false,
        // $img-width: false,
        // $text-align: false,
        // $title-color: false,
        // $title-font: false,
        // $title-font-weight: false,
        // $title-max-lines: false,
    );
}
```

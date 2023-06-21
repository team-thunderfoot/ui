# Card-12

## Layout

![alt text][card-12]

[card-12]: /src/img/global-components/card/card-12.jpg

## Html for a card

```html
<div class="g--card-12">
    <div class="g--card-12__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"></div>
    <div class="g--card-12__ft-items">
    <div class="g--card-12__ft-items__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-12__ft-items__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-12__ft-items__title">Lorem ipsum</h3>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-12__ft-items__link">This is a link</a>
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-12">
    <div class="g--card-12__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"></div>
    <div class="g--card-12__ft-items">
    <div class="g--card-12__ft-items__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-12__ft-items__media-wrapper__media g--lazy-01">
    </div>
    <div class="g--card-12__ft-items__title c--content-a">Lorem ipsum dolor sit amet.</div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-12__ft-items__link">This is a link</a>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $background-position
- $background-size
- $border-radius
- $hover-background-img-zoom
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-transform
- $img-aspect-ratio
- $img-height
- $img-position
- $img-fit
- $img-width
- $link-class
- $link-font
- $mask-color
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-12{
    @include make-card-12();
    @include make-card-12-modifier(
        // $background-position: center
        // $background-size: cover,
        // $border-radius: $measure,
        // $hover-background-img-zoom: 2,
        // $hover-img-zoom: 1.2,
        // $hover-shadow: ,
        // $hover-title-color: ,
        // $hover-transform: ,
        // $img-aspect-ratio: calc(16 / 9),
        // $img-height: 340px,
        // $img-position: ,
        // $img-fit: ,
        // $img-width: ,
        // $link-class: g--link-01,
        // $link-font: f,
        // $mask-color: ,
        //$text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
    );
}
```

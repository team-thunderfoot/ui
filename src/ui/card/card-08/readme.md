# Card-08

## Layout

![alt text][card-08]

[card-08]: /src/img/global-components/card/card-08.jpg

## Html for a card

```html
<div class="g--card-08">
    <div class="g--card-08__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-08__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-08__title">Lorem ipsum</h3>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-08">
    <div class="g--card-08__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-08__media-wrapper__media g--lazy-01">
    </div>
    <div class="g--card-08__title c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

- $hover-img-zoom
- $hover-title-color
- $hover-transform
- $img-aspect-ratio
- $img-height
- $img-position
- $img-fit
- $img-width
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

```scss
.g--card-08{
    @include make-card-08();
    @include make-card-08-modifier(
        $hover-img-zoom: ,
        $hover-title-color: ,
        $hover-transform: ,
        $img-aspect-ratio: 1.7,
        $img-height: ,
        $img-position: ,
        $img-fit: ,
        $img-width: ,
       $text-align: left,
        $title-color: map-get($color-options, a),
        $title-font: c,
        $title-font-weight: 400,
        $title-max-lines: 3,
    );
}
```
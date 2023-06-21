# Card-11

## Layout

![alt text][card-11]

[card-11]: /src/img/global-components/card/card-11.jpg

## Html for a card

```html
<div class="g--card-11">
    <div class="g--card-11__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-11__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-11__title">Lorem ipsum</h3>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-11__link">This is a link</a>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-11">
    <div class="g--card-11__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-11__media-wrapper__media g--lazy-01">
    </div>
    <div class="g--card-11__title c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-11__link">This is a link</a>
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
- $link-class
- $link-font
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

```scss
.g--card-11{
    @include make-card-11();
    @include make-card-11-modifier(
        // $hover-img-zoom: 1.2,
        // $hover-title-color: ,
        // $hover-transform: ,
        // $img-aspect-ratio: 1.7,
        // $img-height: 340px,
        // $img-position: ,
        // $img-fit: ,
        // $img-width: ,
        // $link-class: g--link-01,
        // $link-font: f,
        //$text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
    );
}
```
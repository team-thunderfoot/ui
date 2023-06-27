# Card-02

## Layout

![alt text][card-02]

[card-02]: /src/img/global-components/card/card-02.jpg

## Html for a card

```html
<div class="g--card-02">
    <div class="g--card-02__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-02__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-02__title">Lorem ipsum</h3>
    <p class="g--card-02__subtitle">Solution description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-02">
    <div class="g--card-02__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-02__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-02__title">Lorem ipsum</h3>
    <div class="g--card-02__subtitle c--content-a">Solution description lorem ipsum dolor sit amet consectetur.</div>
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
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $subtitle-max-lines
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

```scss
.g--card-02{
    @include make-card-02();
    @include make-card-02-modifier(
        $hover-img-zoom: 1.2,
        $hover-title-color: ,
        $hover-transform: ,
        $img-aspect-ratio: 1.7,
        $img-height: 340px,
        $img-position: center,
        $img-fit: ,
        $img-width: ,
        $subtitle-color: map-get($color-options, a)
        $subtitle-font: f,
        $subtitle-font-weight: ,
        $subtitle-max-lines: ,
       $text-align: left,
        $title-color: map-get($color-options, a),
        $title-font: c,
        $title-font-weight: 400,
        $title-max-lines: 3,
    );
}
```
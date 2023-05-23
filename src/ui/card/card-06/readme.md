# Card-06

## Layout

![alt text][card-06]

[card-06]: /src/img/global-components/card/card-06.jpg

## Html for a card

```html
<div class="g--card-06">
    <div class="g--card-06__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"></div>
    <div class="g--card-06__ft-items">
    <div class="g--card-06__ft-items__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-06__ft-items__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-06__ft-items__title">Lorem ipsum</h3>
    <p class="g--card-06__ft-items__subtitle">Lorem ipsum dolor sit amet.</p>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-06__ft-items__link">This is a link</a>
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-06">
    <div class="g--card-06__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"></div>
    <div class="g--card-06__ft-items">
    <div class="g--card-06__ft-items__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-06__ft-items__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-06__ft-items__title">Lorem ipsum</h3>
    <div class="g--card-06__ft-items__subtitle c--content-a">Lorem ipsum dolor sit amet.</div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-06__ft-items__link">This is a link</a>
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
- $img-size
- $img-width
- $link-class
- $link-font
- $mask-color
- $subtitle-color
- $subtitle-font
- $subtitle-font-weight
- $subtitle-max-lines
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## use

```scss
.g--card-06{
    @include make-card-06();
    @include make-card-06-modifier(
        // $background-position: false,
        // $background-size: false,
        // $border-radius: false,
        // $hover-background-img-zoom: false,
        // $hover-img-zoom: false,
        // $hover-shadow: false,
        // $hover-title-color: false,
        // $hover-transform: false,
        // $img-aspect-ratio: false,
        // $img-height: false,
        // $img-position: false,
        // $img-size: false,
        // $img-width: false,
        // $link-class: false,
        // $link-font: false,
        // $mask-color: false,
        // $subtitle-color: false,
        // $subtitle-font: false,
        // $subtitle-font-weight: false,
        // $subtitle-max-lines: false,
        // $text-align: false,
        // $title-color: false,
        // $title-font: false,
        // $title-font-weight: false,
        // $title-max-lines: false,
    );
}
```

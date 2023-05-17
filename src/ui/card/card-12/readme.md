# Card-12

## Layout

![alt text][card-12]

[card-12]: /src/img/global-components/card/card-12.png

## Html for a card

```html
<div class="g--card-12">
    <div class="g--card-12__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-bg-placeholder.jpg"></div>
    <div class="g--card-12__ft-items">
        <div class="g--card-12__ft-items__media-wrapper">
            <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-12__ft-items__media-wrapper__media g--lazy-01">
        </div>
        <h3 class="g--card-12__ft-items__title">Lorem ipsum</h3>
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-12 g--card-12--second">
    <div class="g--card-12__bg-items g--lazy-01" data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-bg-placeholder.jpg"></div>
    <div class="g--card-12__ft-items">
        <div class="g--card-12__ft-items__media-wrapper">
            <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-12__ft-items__media-wrapper__media g--lazy-01">
        </div>
        <p class="g--card-12__ft-items__title c--content-a">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

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
- $mask-color
- $text-align
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

```scss
.g--card-12{
    @include make-card-12();
    @include make-card-12-modifier(
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
        // $mask-color: false,
        // $text-align: false,
        // $title-color: false,
        // $title-font: false,
        // $title-font-weight: false,
        // $title-max-lines: false,
    );
}
```
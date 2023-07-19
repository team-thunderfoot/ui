# Card-57

## Layout

![alt text][card-57]

[card-57]: /src/img/global-components/card/card-57.jpg

## Html for a card

```html
<div class="g--card-57">
    <h3 class="g--card-57__title">Lorem ipsum</h3>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-57__link"
        >This is a link</a
    >
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-57">
    <div class="g--card-57__title c--content-a">Lorem ipsum</div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-57__link"
        >This is a link</a
    >
</div>
```

## Editable variables

-   $background-color
-   $border-color
-   $border-radius
-   $border-style
-   $border-width
-   $card-min-height
-   $hover-background-color
-   $hover-border-radius
-   $hover-shadow
-   $hover-title-color
-   $hover-title-underline-color
-   $hover-transform
-   $link-class
-   $link-font
-   $shadow
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## Use

```scss
.g--card-57 {
    @include make-card-57();
    @include make-card-57-modifier(
        // $background-color: lighten(map-get($color-options, a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: $measure * 3,
        // $border-style: solid,
        // $border-width: 1px,
        // $card-min-height: 500px,
        // $hover-background-color: linear-gradient(217deg, map-get($color-options, e), map-get(
        //                 $color-options,
        //                 g
        //             ) 70.71%),
        // $hover-border-radius: $measure * 4,
        // $hover-shadow: 0 0 $measure * 2 map-get($color-options, h),
        // $hover-title-color: map-get($color-options, f),
        // $hover-title-underline-color: map-get($color-options, f),
        // $hover-transform: translateY(-$measure),
        // $link-class: g--link-01,
        // $link-font: a,
        // $shadow: 0 0 $measure * 2 map-get($color-options, a),
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font-weight: bold,
        // $title-font: c,
        // $title-max-lines: 2
    );
}
```

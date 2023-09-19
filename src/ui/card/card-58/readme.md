# Card-58

## Layout

![alt text][card-58]

[card-58]: /src/img/global-components/card/card-58.jpg

## Html for a card

```html
<div class="g--card-58">
    <h3 class="g--card-58__title">Lorem ipsum</h3>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-58__link"
        >This is a link</a
    >
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-58">
    <div class="g--card-58__title c--content-a">
        Solution description lorem ipsum dolor sit amet consectetur.
    </div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-58__link"
        >This is a link</a
    >
</div>
```

## Editable variables

-   $card-min-height
-   $hover-title-color
-   $hover-title-underline-color
-   $hover-transform
-   $link-class
-   $link-font
-   $text-align
-   $title-color
-   $title-font-weight
-   $title-font
-   $title-max-lines

## Use

```scss
.g--card-58 {
    @include make-card-58();
    @include make-card-58-modifier(
        $card-min-height: 300px,
        $hover-title-color: map-get($color-options, h),
        $hover-title-underline-color: map-get($color-options, h),
        $hover-transform: translateY(-$measure),
        $link-class: g--link-01,
        $link-font: f,
        $text-align: left,
        $title-color: map-get($color-options, a),
        $title-font-weight: 400,
        $title-font: c,
        $title-max-lines: 2
    );
}
```

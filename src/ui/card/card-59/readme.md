# Card-59

## Layout

![alt text][card-59]

[card-59]: /src/img/global-components/card/card-59.jpg

## Html for a card

```html
<div class="g--card-59">
    <div
        class="g--card-59__bg-items g--lazy-01"
        data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"
    ></div>
    <div class="g--card-59__ft-items">
        <h3 class="g--card-59__ft-items__title">Solution Name</h3>
        <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-59__ft-items__link"
            >This is a link</a
        >
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-59">
    <div
        class="g--card-59__bg-items g--lazy-01"
        data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg"
    ></div>
    <div class="g--card-59__ft-items">
        <div class="g--card-59__ft-items__title c--content-a">Lorem ipsum dolor sit amet.</div>
        <a href="#" target="_blank" rel="noopener noreferrer" class="g--card-59__ft-items__link"
            >This is a link</a
        >
    </div>
</div>
```

## Editable variables

-   background-color
-   background-position
-   background-size
-   border-radius
-   card-min-height
-   hover-background-img-zoom
-   hover-border-radius
-   hover-mask-color
-   hover-shadow
-   hover-title-color
-   hover-title-underline-color
-   hover-transform
-   link-class
-   link-font
-   mask-color
-   shadow
-   text-align
-   title-color
-   title-font-weight
-   title-font
-   title-max-lines

## use

```scss
.g--card-59 {
    @include make-card-59();
    @include make-card-59-modifier(
        // $background-color: map-get($color-options, a),
        // $background-position: center,
        // $background-size: cover,
        // $border-radius: $measure * 2,
        // $card-min-height: 100px,
        // $hover-background-img-zoom: 1.2,
        // $hover-border-radius: $measure * 4,
        // $hover-mask-color: rgba(map-get($color-options, b), 0.8),
        // $hover-shadow: 0 0 $measure * 2 map-get($color-options, h),
        // $hover-title-color: rgba(map-get($color-options, e), 0.8),
        // $hover-title-underline-color: rgba(map-get($color-options, e), 0.8),
        // $hover-transform: translateY(-$measure),
        // $link-class: g--link-01,
        // $link-font: f,
        // $mask-color: rgba(map-get($color-options, b), 0.5),
        // $shadow: 0 0 $measure * 2 map-get($color-options, a),
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font-weight: bold,
        // $title-font: d,
        // $title-max-lines: 3
    );
}
```

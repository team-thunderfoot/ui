# Card-42

## Layout

![alt text][card-42]

[card-42]: /src/img/global-components/card/card-42.jpg

## Html for a card

```html
<div class="g--card-42">
    <div class="g--card-42__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-42__media-wrapper__media g--lazy-01" />
    </div>
    <div class="g--card-42__wrapper">
        <p class="g--card-42__wrapper__meta">Lorem ipsum | dolor sit</p>
        <h2 class="g--card-42__wrapper__bd">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea atque alias sit adipisci vero ab, repellendus quam delectus recusandae, maxime officiis quisquam porro possimus nostrum aspernatur quo ratione eveniet! Aut!</h2>
        <div class="g--card-42__wrapper__ft">
            <span class="g--card-42__wrapper__ft__badge">Category</span>
            <span class="g--card-42__wrapper__ft__badge">Category</span>
        </div>
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:

```html
<div class="g--card-42">
    <div class="g--card-42__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-42__media-wrapper__media g--lazy-01" />
    </div>
    <div class="g--card-42__wrapper">
        <p class="g--card-42__wrapper__meta">Lorem ipsum | dolor sit</p>
        <div class="g--card-42__wrapper__bd c--content-a">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea atque alias sit adipisci vero ab, repellendus quam delectus recusandae, maxime officiis quisquam porro possimus nostrum aspernatur quo ratione eveniet! Aut!</div>
        <div class="g--card-42__wrapper__ft">
            <span class="g--card-42__wrapper__ft__badge">Category</span>
            <span class="g--card-42__wrapper__ft__badge">Category</span>
        </div>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

-   $background-color
-   $border-color
-   $border-radius
-   $border-style
-   $border-width
-   $breakpoint
-   $card-min-height
-   $hover-background-color
-   $hover-img-zoom
-   $hover-shadow
-   $hover-title-color
-   $hover-transform
-   $img-aspect-ratio-responsive
-   $img-height-responsive
-   $img-position
-   $meta-color
-   $meta-font
-   $meta-font-weight
-   $pill-class
-   $shadow
-   $text-align
-   $title-color
-   $title-font
-   $title-font-weight
-   $title-max-lines

## Use

```scss
.g--card-42 {
    @include make-card-42();
    @include make-card-42-modifier(
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-radius: $measure,
        // $border-style: solid,
        // $border-width: 1px,
        // $breakpoint: $tablets,
        // $card-min-height: 500px,
        // $hover-background-color: map-get($color-options, g),
        // $hover-img-zoom: 1.2,
        // $hover-shadow: 0 0 $measure*4 map-get($color-options, a),
        // $hover-title-color: map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $img-aspect-ratio-responsive: 1.7,
        // $img-height-responsive: 340px,
        // $img-position: center,
        // $meta-color: map-get($color-options, a),
        // $meta-font: f,
        // $meta-font-weight: 400,
        // $pill-class: g--pill-01,
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $text-align: left,
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
    );
}
```

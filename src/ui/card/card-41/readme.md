# Card-41

## Layout

![alt text][card-41]

[card-41]: /src/img/global-components/card/card-41.jpg

## Html for a card

```html
<div class="g--card-41">
    <div class="g--card-41__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-41__media-wrapper__media g--lazy-01" />
    </div>
    <div class="g--card-41__wrapper">
        <div class="g--card-41__wrapper__hd">
            <p class="g--card-41__wrapper__hd__meta">Lorem ipsum | dolor sit</p>
            <p class="g--card-41__wrapper__hd__author">By Author</p>
        </div>
        <h2 class="g--card-41__wrapper__bd">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea atque alias sit adipisci vero ab, repellendus quam delectus recusandae, maxime officiis quisquam porro possimus nostrum aspernatur quo ratione eveniet! Aut!</h2>
        <div class="g--card-41__wrapper__ft">
            <span class="g--card-41__wrapper__ft__badge">Category</span>
            <span class="g--card-41__wrapper__ft__badge">Category</span>
        </div>
    </div>
</div>
```

If you want the subtitle to be a c--content, the HTML should be:
```html
<div class="g--card-41">
    <div class="g--card-41__media-wrapper">
        <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/bg-placeholder.jpg" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-41__media-wrapper__media g--lazy-01" />
    </div>
    <div class="g--card-41__wrapper">
        <div class="g--card-41__wrapper__hd">
            <p class="g--card-41__wrapper__hd__meta">Lorem ipsum | dolor sit</p>
            <p class="g--card-41__wrapper__hd__author">By Author</p>
        </div>
        <div class="g--card-41__wrapper__bd c--content-a">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea atque alias sit adipisci vero ab, repellendus quam delectus recusandae, maxime officiis quisquam porro possimus nostrum aspernatur quo ratione eveniet! Aut!</div>
        <div class="g--card-41__wrapper__ft">
            <span class="g--card-41__wrapper__ft__badge">Category</span>
            <span class="g--card-41__wrapper__ft__badge">Category</span>
        </div>
    </div>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio.

## Editable variables

- $author-color
- $author-font
- $author-font-weight
- $background-color
- $border-color
- $border-style
- $border-width
- $border-radius
- $breakpoint
- $hover-background-color
- $hover-img-zoom
- $hover-shadow
- $hover-title-color
- $hover-transform
- $img-aspect-ratio-responsive
- $img-height-responsive
- $img-position
- $meta-color
- $meta-font
- $meta-font-weight
- $pill-class
- $title-color
- $title-font
- $title-font-weight
- $title-max-lines

## Use

```scss
.g--card-41{
    @include make-card-41();
    @include make-card-41-modifier(
        // $author-color: map-get($color-options, a),
        // $author-font: f,
        // $author-font-weight: 400,
        // $background-color: lighten(map-get($color-options,a), 82%),
        // $border-color: map-get($color-options, a),
        // $border-style: solid,
        // $border-width: 1px,
        // $border-radius: $measure,
        // $breakpoint: $tablets,
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
        // $title-color: map-get($color-options, a),
        // $title-font: c,
        // $title-font-weight: 400,
        // $title-max-lines: 3,
    );
}
```
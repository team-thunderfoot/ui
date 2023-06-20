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
-   $border-style
-   $border-width
-   $border-radius
-   $breakpoint
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
        // $background-color: ,
        // $border-color: ,
        // $border-style: ,
        // $border-width: ,
        // $border-radius: ,
        // $breakpoint: ,
        // $hover-background-color: ,
        // $hover-img-zoom: ,
        // $hover-shadow: ,
        // $hover-title-color: ,
        // $hover-transform: ,
        // $img-aspect-ratio-responsive: ,
        // $img-height-responsive: ,
        // $img-position: ,
        // $meta-color: ,
        // $meta-font: ,
        // $meta-font-weight: ,
        // $pill-class: ,
        // $text-align: ,
        // $title-color: ,
        // $title-font: ,
        // $title-font-weight: ,
        // $title-max-lines: ,
    );
}
```

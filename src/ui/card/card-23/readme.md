# Card-23

## Layout

![alt text][card-23]

[card-23]: /src/img/global-components/card/card-23.png

## Html for a card

```sh
<div class="g--card-23">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/rounded-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-23__media g--lazy-01">
    <p class="g--card-23__title">Card 23 description lorem ipsum dolor sit amet consectetur.</p>
    <a href="" class="g--card-23__link">This is a link</a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $link-class
- $link-class-modifier: false by default
- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default

### For modifiers

- $link-class-modifier
- $text-align
- $title-color
- $title-font
- $title-font-weight

## Use

```sh
.g--card-23{
    @include make-card-23(
        $link-class: g--link-01,
    );
    @include make-card-23-modifier(
        $title-color: map-get($color-options, a),
        // $link-class-modifier: default,
        // $text-align: default,
        // $title-font: default,
        //$title-font-weight: default
    );
}
```

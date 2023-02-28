# Card-19

## Layout

![alt text][card-19]

[card-19]: /src/img/global-components/card/card-19.png

## Html for a card

```sh
<div class="g--card-19">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/global-components/card/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-19__media g--lazy-01">
    <p class="g--card-19__title">Card 19 description lorem ipsum dolor sit amet consectetur.</p>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $text-align: false by default
- $title-color
- $title-font: false by default
- $title-font-weight: false by default

### For modifiers

- $text-align
- $title-color
- $title-font
- $title-font-weight

## Use

```sh
.g--card-19{
    @include make-card-19();
    @include make-card-19-modifier(
        $title-color: map-get($color-options, a),
        // $text-align: default,
        // $title-font: default,
        // $title-font-weight: default,
    );
}
```

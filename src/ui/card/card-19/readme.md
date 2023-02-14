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
- $title-font
- $title-color

### For modifiers

- $text-align
- $title-color

## Use

```sh
.g--card-19{
    @include make-card-19(
        $title-font: f,
        // $title-font-weight: default,
    );
    @include make-card-19-modifier(
        $title-color: map-get($color-options, a),
        // $text-align: default
    );
}
```

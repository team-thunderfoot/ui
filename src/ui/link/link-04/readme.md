# Link-04

## Layout

![alt text][link-04]

[link-04]: /src/img/global-components/link/g--link-04.png

## Html for a button

```html
<button class="g--link-04">link 04</button>
```

## Html for a link

```html
<a href="#" class="g--link-04" target="_blank" rel="noopener noreferrer">link 04 link</a>
```

## Editable variables

- $text-color
- $hover-text-color
- $underline-color
- $underline-height


## Use

```scss
.g--link-04 {
    @include make-link-04();
    @include make-link-04-modifier(
        $underline-height: 1px,
        $text-color: map-get($color-options, a),
        $underline-color: map-get($color-options, a)
    );
    &--second {
        @include make-link-04-modifier(
            $underline-height: 2px,
            $text-color: map-get($color-options, a),
            $underline-color: map-get($color-options, f)
        );
    }
}
```

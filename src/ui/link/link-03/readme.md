# Link-03

## Layout

![alt text][link-03]

[link-03]: /src/img/global-components/link/link-03.png

## Html for a button

```html
<button class="g--link-03">link 03</button>
```

## Html for a link

```html
<a href="#" class="g--link-03" target="_blank" rel="noopener noreferrer">link 03 link</a>
```

## Editable variables

- $hover-text-color
- $text-color

## Use

```scss
.g--link-03{
    @include make-link-03();
    @include make-link-03-modifier(
        // $hover-text-color: map-get($color-options, g)
        // $text-color: map-get($color-options, a),
    );
}
```

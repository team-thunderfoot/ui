# Link-02

## Layout

![alt text][link-02]

[link-02]: /src/img/global-components/link/link-02.png

## Html for a button

```html
<button class="g--link-02">link 02</button>
```

## Html for a link

```html
<a href="#" class="g--link-02" target="_blank" rel="noopener noreferrer">link 02 link</a>
```

## Editable variables

- $hover-text-color
- $text-color

## Use

```scss
.g--link-02{
    @include make-link-02();
    @include make-link-02-modifier(
        // $hover-text-color: map-get($color-options, g)
        // $text-color: map-get($color-options, a),
    );
}
```

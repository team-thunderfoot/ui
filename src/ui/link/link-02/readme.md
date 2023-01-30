# Link-02

## Layout

![alt text][link-02]

[link-02]: /src/img/global-components/link/link-02.png

## Html for a button

```sh
<button class="g--link-02">link 02</button>
```

## Html for a link

```sh
<a href="#" class="g--link-02" target="_blank" rel="noopener noreferrer">link 02 link</a>
```

## Editable variables

- $text-color
- $text-color-hover

### For Modifiers

- $text-color
- $text-color-hover

## Use

```sh
.g--link-02{
    @include make-link-02();
    @include make-link-02-modifier(
        $text-color: map-get($color-options, a),
        $text-color-hover: map-get($color-options, g)
    );
}
```

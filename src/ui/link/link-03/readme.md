# Link-03

## Layout

![alt text][link-03]

[link-03]: /src/img/global-components/link/link-03.png

## Html for a button

```sh
<button class="g--link-03">link 03</button>
```

## Html for a link

```sh
<a href="#" class="g--link-03" target="_blank" rel="noopener noreferrer">link 03 link</a>
```

## Editable variables

- $text-color
- $text-color-hover

### For Modifiers

- $text-color
- $text-color-hover

## Use

```sh
.g--link-03{
    @include make-link-03();
    @include make-link-03-modifier(
        $text-color: map-get($color-options, a),
        $text-color-hover: map-get($color-options, g)
    );
}
```

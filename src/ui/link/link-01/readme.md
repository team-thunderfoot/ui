# Link-01

## Layout

![alt text][link-01]

[link-01]: /src/img/global-components/link/link-01.png

## Html for a button

```sh
<button class="g--link-01">link 01</button>
```

## Html for a link

```sh
<a href="#" class="g--link-01" target="_blank" rel="noopener noreferrer">link 01 link</a>
```

## Editable variables

- $underline-height
- $text-color
- $underline-color

### For Modifiers

- $text-color
- $underline-color

## Use

```sh
.g--link-01{
    @include make-link-01(
        $underline-height: 1px
    );
    @include make-link-01-modifier(
        $text-color: map-get($color-options, a),
        $underline-color: map-get($color-options, a),
    );
}
```

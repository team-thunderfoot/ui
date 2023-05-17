# Link-04

## Layout

![alt text][link-04]

[link-04]: /src/img/global-components/link/link-04.png

## Html for a button

```html
<button class="g--link-04">link 04
    <svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.5L5 5.5L1 1.5" stroke="#4D49F3" stroke-width="1.5"/>
    </svg>
</button>
```

## Html for a link

```html
<a href="#" class="g--link-04" target="_blank" rel="noopener noreferrer">link 04 link
    <svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.5L5 5.5L1 1.5" stroke="#4D49F3" stroke-width="1.5"/>
    </svg>
</a>
```

## Editable variables

- $text-color
- $text-color-hover
- $icon-top
- $link-font
- $link-font-weight
- $artwork-color-fill
- $artwork-color-stroke
- $artwork-color-hover

## Use

```scss
.g--link-04{
    @include make-link-04();
    @include make-link-04-modifier(
        $text-color: map-get($color-options, a),
        $text-color-hover: map-get($color-options, g),
        $icon-top: 0px,
        $link-font: c,
        $link-font-weight: 600,
        $artwork-color-fill: map-get($color-options, f),
        $artwork-color-stroke: map-get($color-options, g),
        $artwork-color-hover: map-get($color-options, h)
    );
}
```

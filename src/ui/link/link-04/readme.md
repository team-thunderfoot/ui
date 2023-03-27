# Link-04

## Layout

![alt text][link-04]

[link-04]: /src/img/global-components/link/link-04.png

## Html for a button

```sh
<button class="g--link-04">link 04
    <svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.5L5 5.5L1 1.5" stroke="#4D49F3" stroke-width="1.5"/>
    </svg>
</button>
```

## Html for a link

```sh
<a href="#" class="g--link-04" target="_blank" rel="noopener noreferrer">link 04 link
    <svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.5L5 5.5L1 1.5" stroke="#4D49F3" stroke-width="1.5"/>
    </svg>
</a>
```

## Editable variables

- $text-color
- $artwork-color-fill: false by default
- $artwork-color-stroke: false by default
- $artwork-color-hover: false by default
- $text-color-hover: false by default

### For Modifiers

- $text-color
- $artwork-color-fill
- $artwork-color-stroke
- $artwork-color-hover
- $text-color-hover

## Use

```sh
.g--link-04{
    @include make-link-04();
    @include make-link-04-modifier(
        $text-color: map-get($color-options, a),
        // $artwork-color-fill: default,
        // $artwork-color-stroke: default,
        // $artwork-color-hover: default,
        // $text-color-hover: default,
    );
}
```

# Search-01

## Layout

![alt text][search-01]

[search-01]: /src/img/global-components/search/search-01.png

## Html

```html
<div class="g--search-01">
    <label for="text-01" class="g--search-01__title">Search by:</label>
    <div class="g--search-01__wrapper">
        <input type="search" id="text-01" class="g--search-01__wrapper__item" placeholder="Type something...">
        <svg class="g--search-01__wrapper__artwork" viewBox="0 0 18 19" fill="none">
            <path d="M11.9264 12.4266L16.9998 17.5M13.8395 7.87383C13.8395 11.394 10.9858 14.2477 7.46563 14.2477C3.94546 14.2477 1.0918 11.394 1.0918 7.87383C1.0918 4.35366 3.94546 1.5 7.46563 1.5C10.9858 1.5 13.8395 4.35366 13.8395 7.87383Z" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </div>
</div>
```

## Editable variables

- $artwork-color
- $input-background-color
- $input-background-color-autofill
- $input-border-color
- $input-border-radius
- $input-border-style
- $input-border-width
- $input-font
- $input-font-weight
- $input-text-color
- $placeholder-color
- $title-color
- $title-font
- $title-font-weight
## Use

```scss
.g--search-01{
    @include make-search-01();
    @include make-search-01-modifier(
        // $artwork-color: map-get($color-options, g),
        // $input-background-color: transparent,
        // $input-background-color-autofill: transparent,
        // $input-border-color: map-get($color-options, a),
        // $input-border-radius: 0,
        // $input-border-style: solid,
        // $input-border-width: 1px,
        // $input-font: f,
        // $input-font-weight: 600,
        // $input-text-color: map-get($color-options, f),
        // $placeholder-color: rgba(map-get($color-options, a), .5),
        // $title-color: map-get($color-options, a),
        // $title-font: f,
        // $title-font-weight: 400,
    );
}
```

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

- $input-background-color
- $input-background-color-autofill
- $input-border-radius
- $input-border-width
- $input-border-style
- $input-border-color
- $input-text-color
- $input-font
- $input-font-weight
- $title-color
- $title-font
- $title-font-weight
- $artwork-color
- $placeholder-color

## Use

```scss
.g--search-01{
    @include make-search-01();
    @include make-search-01-modifier(
        $input-background-color: transparent,
        $input-background-color-autofill: transparent,
        $input-border-radius: 8px,
        $input-border-width: 3px,
        $input-border-style: dotted,
        $input-border-color: map-get($color-options, e),
        $input-text-color: map-get($color-options, f),
        $input-font: f,
        // $input-font-weight: ,
        $title-color: map-get($color-options, g),
        $title-font: c,
        // $title-font-weight: 
        $artwork-color: map-get($color-options, g),
        $placeholder-color: rgba(map-get($color-options, g), .5),
    );
}
```

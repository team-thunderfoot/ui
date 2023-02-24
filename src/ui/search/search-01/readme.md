# Search-01

## Layout

![alt text][search-01]

[search-01]: /src/img/global-components/search/search-01.jpg

## Html

```sh
<div class="g--search-01">
    <label for="text-01" class="g--search-01__title">Search by:</label>
    <input type="search" id="text-01" class="g--search-01__item" placeholder="Type something...">
</div>
```

## Editable variables

- $artwork-img
- $input-background-color
- $input-background-color-autofill
- $input-border-color
- $input-border-radius
- $input-border-width
- $input-font
- $input-text-color
- $input-font-weight: false by default
- $placeholder-color
- $title-font
- $title-font-weight: false by default

### For Modifiers

- $artwork-img
- $input-background-color
- $input-background-color-autofill
- $input-border-color
- $placeholder-color
- $input-text-color

## Use

```sh
.g--search-01{
    @include make-search-01(
        $input-border-radius: 0,
        $input-border-width: 1px,
        $input-font: f,
        $title-font: f,
        // $input-font-weight: default,
        // $title-font-weight: default
    );
    @include make-search-01-modifier(
        $artwork-img: './img/global-components/search/icon.svg',
        $input-background-color: transparent,
        $input-background-color-autofill: transparent,
        $input-border-color: map-get($color-options, a),
        $placeholder-color: rgba(map-get($color-options, a), .5),
        $input-text-color: map-get($color-options, a),
    );
}
```
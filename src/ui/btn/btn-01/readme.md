# Btn-01

## Layout

![alt text][btn-01]
![alt text][btn-01--second]

[btn-01]: /src/img/global-components/btn/g--btn-01.png
[btn-01--second]: /src/img/global-components/btn/g--btn-01--second.png

## Html for a button

```html
<button class="g--btn-01">button 01</button>
```

## Html for a link

```html
<a href="#" class="g--btn-01" target="_blank" rel="noopener noreferrer">button 01</a>
```

## Editable variables

- $border-color
- $border-color-hover
- $border-width
- $border-style
- $font
- $font-weight
- $text-color
- $text-color-hover
- $background-color
- $background-color-hover

## Use

```scss
.g--btn-01{
    @include make-btn-01();
    @include make-btn-01-modifier(
        $border-color: map-get($color-options, a),
        $border-color-hover: map-get($color-options, g),
        $border-width: 1px,
        $border-style: solid,
        $font: f,
        $font-weight: 400,
        $text-color: map-get($color-options, a),
        $text-color-hover: map-get($color-options, g),
        // $background-color: transparent,
        // $background-color-hover: map-get($color-options, a)
    );

    &--second {
        @include make-btn-01-modifier(
            $border-color: map-get($color-options, a),
            $border-color-hover: map-get($color-options, a),
            $border-width: 1px,
            $border-style: solid,
            $font: f,
            $font-weight: 400,
            $text-color: map-get($color-options, b),
            $text-color-hover: map-get($color-options, a),
            $background-color: map-get($color-options, a),
            $background-color-hover: map-get($color-options, b)
        );
    }
}
```

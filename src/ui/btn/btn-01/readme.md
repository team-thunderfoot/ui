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

- $background-color-hover
- $background-position
- $background-position-hover
- $background-repeat
- $background-size
- $background-size-hover
- $border-color
- $border-color-hover
- $border-radius
- $border-style
- $border-width
- $font
- $font-weight
- $text-color
- $text-color-hover
- $transition

## Use

```scss
.g--btn-01{
    @include make-btn-01();
    @include make-btn-01-modifier(
        // $background-color-hover: false,
        // $background-position: false,
        // $background-position-hover: false,
        // $background-repeat: false,
        // $background-size: false,
        // $background-size-hover: false,
        // $border-color: false,
        // $border-color-hover: false,
        // $border-radius: false,
        // $border-style: false,
        // $border-width: false,
        // $font: false,
        // $font-weight: false,
        // $text-color: false,
        // $text-color-hover: false,
        // $transition: false
    );
}
```

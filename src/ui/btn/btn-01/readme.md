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

- $hover-background-color
- $background-position
- $hover-background-position
- $background-repeat
- $background-size
- $hover-background-size
- $border-color
- $hover-border-color
- $border-radius
- $border-style
- $border-width
- $font
- $font-weight
- $text-color
- $hover-text-color
- $transition

## Use

```scss
.g--btn-01{
    @include make-btn-01();
    @include make-btn-01-modifier(
        // $hover-background-color: false,
        // $background-position: false,
        // $hover-background-position: false,
        // $background-repeat: false,
        // $background-size: false,
        // $hover-background-size: false,
        // $border-color: false,
        // $hover-border-color: false,
        // $border-radius: false,
        // $border-style: false,
        // $border-width: false,
        // $font: false,
        // $font-weight: false,
        // $text-color: false,
        // $hover-text-color: false,
        // $transition: false
    );
}
```

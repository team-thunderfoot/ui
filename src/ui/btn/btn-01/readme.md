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

- $background-color
- $background-position
- $background-repeat
- $background-size
- $border-color
- $border-radius
- $border-style
- $border-width
- $font
- $font-weight
- $hover-background-color
- $hover-background-position
- $hover-background-size
- $hover-border-color
- $hover-border-radius
- $hover-shadow
- $hover-text-color
- $shadow
- $text-color
- $transition

## Use

```scss
.g--btn-01 {
  @include make-btn-01();
  @include make-btn-01-modifier(
    // $background-color: map-get($color-options, a),
    // $background-position: center,
    // $background-repeat: no-repeat,
    // $background-size: 100% 0px,
    // $border-color: map-get($color-options, a),
    // $border-radius: 0,
    // $border-style: solid,
    // $border-width: 1px,
    // $font: f,
    // $font-weight: 600,
    // $hover-background-color:  map-get($color-options, a),
    // $hover-background-position: bottom left,
    // $hover-background-size: 100% 100%,
    // $hover-border-color: map-get($color-options, a),
    // $hover-border-radius: 20px,
    // $hover-shadow: 0 0 $measure*4 map-get($color-options, a),
    // $hover-text-color: map-get($color-options, a),
    // $shadow: 0 0 $measure*2 map-get($color-options, a),
    // $text-color: map-get($color-options, a),
    // $transition: (border-color $time-b $ease-standard-a, color $time-b $ease-standard-a, background $time-b $ease-standard-a, background-size $time-b $ease-standard-a)
  );
}
```

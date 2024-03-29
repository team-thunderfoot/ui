# Icon-01

## Layout

![alt text][icon-01]
![alt text][icon-01--second]
![alt text][icon-01--third]
![alt text][icon-01--fourth]

[icon-01]: /src/img/global-components/icon/icon-01/g--icon-01.png
[icon-01--second]: /src/img/global-components/icon/icon-01/g--icon-01--second.png
[icon-01--third]: /src/img/global-components/icon/icon-01/g--icon-01--third.png
[icon-01--fourth]: /src/img/global-components/icon/icon-01/g--icon-01--fourth.png

## Html for an icon as a button

```html
<button class="g--icon-01">
    <svg class="g--icon-01__artwork" viewBox="0 0 16 17" fill="none">
        <path d="M8 16.5L0 8.5L8 0.5L9.425 1.9L3.825 7.5H16V9.5H3.825L9.425 15.1L8 16.5Z" fill="#1A191D"/>
    </svg>
</button>
```

## Html for an icon as a link

```html
<a href="#" class="g--icon-01 g--icon-01--fourth">
    <svg class="g--icon-01__artwork" viewBox="0 0 17 16" fill="none">
        <path d="M0.5 8L8.5 -3.49691e-07L16.5 8L15.1 9.425L9.5 3.825L9.5 16L7.5 16L7.5 3.825L1.9 9.425L0.5 8Z" fill="#1A191D"/>
    </svg>
</a>
```

## Editable variables

- $artwork-height
- $artwork-width
- $background-color
- $border-color
- $border-radius
- $border-style
- $border-width
- $height
- $hover-background-color
- $hover-border-color
- $hover-border-radius
- $hover-path-fill-color
- $hover-shadow
- $hover-transform
- $path-fill-color
- $shadow
- $width

## Use

```scss
.g--icon-01 {
    @include make-icon-01();

    @include make-icon-01-modifier(
        // $artwork-height: $measure * 2,
        // $artwork-width: $measure*3,
        // $background-color: transparent,
        // $border-color: map-get($color-options, a),
        // $border-radius: 100%,
        // $border-style: solid,
        // $border-width: 1px,
        // $height: $measure * 6,
        // $hover-background-color: map-get($color-options, a),
        // $hover-border-color: map-get($color-options, g),
        // $hover-border-radius: $measure,
        // $hover-path-fill-color: map-get($color-options, g),
        // $hover-shadow: 0 0 $measure * 2 map-get($color-options, h),
        // $hover-transform: translateY(-$measure),
        // $path-fill-color: map-get($color-options, a),
        // $shadow: 0 0 $measure*2 map-get($color-options, g),
        // $width: $measure * 6,
    );
}
```

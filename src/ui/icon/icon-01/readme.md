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

```sh
<button class="g--icon-01">
    <svg class="g--icon-01__artwork" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16.5L0 8.5L8 0.5L9.425 1.9L3.825 7.5H16V9.5H3.825L9.425 15.1L8 16.5Z" fill="#1A191D"/>
    </svg>
</button>
```

## Html for an icon as a link

```sh
<a href="#" class="g--icon-01 g--icon-01--fourth">
    <svg class="g--icon-01__artwork" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 8L8.5 -3.49691e-07L16.5 8L15.1 9.425L9.5 3.825L9.5 16L7.5 16L7.5 3.825L1.9 9.425L0.5 8Z" fill="#1A191D"/>
    </svg>
</a>
```

## Editable variables

- $background-color:
- $background-color-hover: false by default
- $border-color
- $border-color-hover
- $border-width
- $height
- $path-fill-color
- $path-fill-color-hover
- $width

### For Modifiers

- $background-color
- $background-color-hover
- $border-color
- $border-color-hover
- $path-fill-color
- $path-fill-color-hover

## Use

```sh
.g--icon-01{
    @include make-icon-01(
        $border-width: 1px,
        $width: $measure * 6,
        $height: $measure * 6
    );

    @include make-icon-01-modifier(
        $background-color: transparent,
        $border-color: map-get($color-options, a ),
        $path-fill-color: map-get($color-options, a ),
        $border-color-hover: map-get($color-options, g ),
        $path-fill-color-hover: map-get($color-options, g ),
        // $background-color-hover: default,
    );
}
```

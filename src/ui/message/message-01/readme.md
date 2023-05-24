# Message-01

## Layout

![alt text][message-01]

[message-01]: /src/img/global-components/message/g--message-01.png

## Html

```html
<div class="g--message-01">
    <p class="g--message-01__content">
        This is a message lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
    </p>
</div>
```

## Editable variables

- $background-color
- $border-color
- $border-radius
- $border-style
- $border-width
- $text-align
- $text-color
- $text-font
- $text-font-weight
- $text-max-lines

## Use

```scss
.g--message-01 {
    @include make-message-01();
    @include make-message-01-modifier(
        // $background-color: false,
        // $border-color: false,
        // $border-radius: false,
        // $border-style: false,
        // $border-width: false,
        // $text-align: false,
        // $text-color: false,
        // $text-font: false,
        // $text-font-weight: false,
        // $text-max-lines: false,
    );
}
```

# Message-01

## Layout

![alt text][message-01]

[message-01]: /src/img/global-components/message/g--message-01.png

## Html

```sh
<div class="g--message-01">
    <p class="g--message-01__content">
        This is a message lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
    </p>
</div>
```

## Editable variables

- $background-color
- $hover-background-color
- $border-radius
- $border-width
- $border-style
- $border-color
- $hover-border-color
- $text-color
- $hover-text-color
- $text-font
- $text-font-weight
- $text-max-lines
- $text-align
- $hover-shadow
- $hover-transform

## Use

```sh
.g--message-01 {
    @include make-message-01();
    @include make-message-01-modifier(
        $background-color: map-get($color-options, g),
        // $hover-background-color: false,
        // $border-radius: false,
        // $border-width: false,
        // $border-style: false,
        // $border-color: false,
        // $hover-border-color: false,
        $text-color: map-get($color-options, a),
        // $hover-text-color: false,
        $text-font: d,
        // $text-font-weight: bold,
        // $text-max-lines: false,
        // $text-align: false,
        // $hover-shadow: false,
        // $hover-transform: false,
    );
}
```

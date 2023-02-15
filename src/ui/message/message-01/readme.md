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

- $background-color: false by default
- $text-color
- $text-font
- $text-font-weight: false by default

### For Modifiers

- $background-color
- $text-color

## Use

```sh
.g--message-01 {
    @include make-message-01(
        $text-font: d,
        // $text-font-weight: default,
    );

    @include make-message-01-modifier(
        $text-color: map-get($color-options, a)
        // $background-color: default,
    );
}
```

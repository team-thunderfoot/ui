# Message-02

## Layout

![alt text][message-02]

[message-02]: /src/img/global-components/message/g--message-02.png

## Html

```sh
<div class="g--message-02">
        <p class="g--message-02__content">
            This is a message lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
        </p>
</div>
```

## Editable variables

- $border-color
- $text-color
- $text-font

### For Modifiers

- $border-color
- $text-color

## Use

```sh
.g--message-02 {
    @include make-message-02(
        $border-width: 1px,
        $text-font: d
    );

    @include make-message-02-modifier(
        $border-color: map-get($color-options, a),
        $text-color: map-get($color-options, a)
    );
}
```

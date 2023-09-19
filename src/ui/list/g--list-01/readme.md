# List-01

## Layout

![alt text][list-01]

[list-01]: /src/img/global-components/list/list-01.png

## Html for a list

```html
<ul class="g--list-01">
    <li class="g--list-01__list-item">list 01 item</li>
    <li class="g--list-01__list-item">list 01 item</li>
    <li class="g--list-01__list-item">list 01 item</li>
    <li class="g--list-01__list-item">list 01 item</li>
    <li class="g--list-01__list-item">list 01 item</li>
</ul>
```

## Editable variables

- None

## Use

```scss
.g--list-01 {
    &__list-item {
        @include make-list-01();
    }
}
```

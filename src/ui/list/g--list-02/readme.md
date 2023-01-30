# List-02

## Html for a list

```sh
<ul class="g--list-02">
    <li class="g--list-02__list-item">list 02 item</li>
    <li class="g--list-02__list-item">list 02 item</li>
    <li class="g--list-02__list-item">list 02 item</li>
    <li class="g--list-02__list-item">list 02 item</li>
    <li class="g--list-02__list-item">list 02 item</li>
</ul>
```

## Editable variables

- None

## use
```sh
.g--list-02 {
    &__list-item {
        @include make-list-02();
    }
}
```

## layout
![alt text][list-02]

[list-02]: /src/img/global-components/list/list-02.png 
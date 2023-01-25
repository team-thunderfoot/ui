# List-01

## Html for a list

```sh
<ul class="g--list-01">
    <li class="g--list-01__list-item">list 01 item</li>
    <li class="g--list-01__list-item">list 01 item</li>
    <li class="g--list-01__list-item">list 01 item</li>
    <li class="g--list-01__list-item">list 01 item</li>
    <li class="g--list-01__list-item">list 01 item</li>
</ul>
```

## use
```sh
.g--list-01 {
    &__list-item {
        @include make-list-01();
    }
}
```

## layout
![alt text][list-01]

[list-01]: /src/img/global-components/list/list-01.png 
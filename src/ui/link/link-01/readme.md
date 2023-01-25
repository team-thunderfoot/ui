# Link-01

## Html for a button

```sh
<button class="g--link-01">link 01</button>
```

## Html for a link

```sh
<a href="#" class="g--link-01" target="_blank" rel="noopener noreferrer">link 01 link</a>
```

## editable variables
- $text-color


## use
```sh
.g--link-01{
    @include make-link-01();
    @include make-link-01-color(
        $text-color: map-get($color-options, a),
    );
}
```

## layout
![alt text][link-01]

[link-01]: /src/img/global-components/link/link-01.png 
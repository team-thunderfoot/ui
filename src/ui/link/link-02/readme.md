# Link-02

## Html for a button

```sh
<button class="g--link-02">link 02</button>
```

## Html for a link

```sh
<a href="#" class="g--link-02" target="_blank" rel="noopener noreferrer">link 02 link</a>
```

## editable variables
- $text-color
- $text-color-hover


## import
```sh
@import '@teamthunderfoot/ui/src/ui/g-components/link/link-02/_make-g--link-02';
.g--link-02{
    @include make-link-02();
    @include make-link-02-color(
        $text-color: map-get($color-options, a),
        $text-color-hover: map-get($color-options, g)
    );
}
```

## layout
![alt text][link-02]

[link-02]: /src/img/global-components/link/link-02.png 
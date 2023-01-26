# Link-02

## layout
![alt text][link-02]

[link-02]: /src/img/global-components/link/link-02.png 

## editable variables
- $text-color
- $text-color-hover

### For Modifiers
- $text-color
- $text-color-hover

## Html for a button

```sh
<button class="g--link-02">link 02</button>
```

## Html for a link

```sh
<a href="#" class="g--link-02" target="_blank" rel="noopener noreferrer">link 02 link</a>
```


## use
```sh
.g--link-02{
    @include make-link-02();
    @include make-link-02-color(
        $text-color: map-get($color-options, a),
        $text-color-hover: map-get($color-options, g)
    );
}
```
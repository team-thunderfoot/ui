# Pill-01

## Html for a pill

```sh
<div class="g--pill-01">pill 01</div>
```

## Html for a link

```sh
<a href="#" class="g--pill-01" target="_blank" rel="noopener noreferrer">pill 01</a>
```

## editable variables

- $font
- $background-color
- $text-color
- $background-color-hover
- $text-color-hover

## import

```sh
@import '@teamthunderfoot/ui/src/ui/g-components/pill/pill-01/_make-g--pill-01';
.g--pill-01 {
    @include make-pill-01($font: b);

    @include make-pill-01-color(
        $background-color: map-get($color-options: b),
        $background-color-hover:  map-get($color-options: a),
        $text-color:  map-get($color-options: a),
        $text-color-hove:  map-get($color-options: b)
    );
}
```

<!-- ## layout
![alt text][pill-01]

[pill-01]: /src/img/global-components/pill/pill-01.svg  -->

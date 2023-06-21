# backdrop-01

## Editable variables

-   $background-color
-   $opacity
-   $opacity-active
-   $transform
-   $transform-active
-   $transition

## Use

```scss
.g--backdrop-01 {
    @include make-backdrop-01();
    @include make-backdrop-01-modifier($background-color: rgba(map-get($color-options, a), 20%), $opacity: 0, $opacity-active: 1, $transform: translate(100%, 0px), $transform-active: translate(0%, 0px), $transition: all $time-b $ease-standard-a);
}
```

# Social-01

## Layout

![alt text][social-01]

[social-01]: /src/img/global-components/social/g--social-01.png

## Html

```sh
<div class="g--social-01">
    <button class="g--social-01__item">
    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5749 10.85H8.8249L9.7249 7.25H6.5749V5.45C6.5749 4.523 6.5749 3.65 8.3749 3.65H9.7249V0.626C9.4315 0.5873 8.3236 0.5 7.1536 0.5C4.7101 0.5 2.9749 1.9913 2.9749 4.73V7.25H0.274902V10.85H2.9749V18.5H6.5749V10.85Z" fill="black"/>
    </svg>
    </button>
    <button class="g--social-01__item">
    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8447 2.38235C19.12 2.71176 18.3388 2.92824 17.5294 3.03176C18.3576 2.53294 18.9976 1.74235 19.2988 0.791765C18.5176 1.26235 17.6517 1.59176 16.7388 1.78C15.9953 0.970588 14.9506 0.5 13.7647 0.5C11.5529 0.5 9.74586 2.30706 9.74586 4.53765C9.74586 4.85765 9.78351 5.16824 9.84939 5.46C6.4988 5.29059 3.51527 3.68118 1.52939 1.24353C1.18116 1.83647 0.983509 2.53294 0.983509 3.26706C0.983509 4.66941 1.68939 5.91176 2.78116 6.61765C2.11292 6.61765 1.49174 6.42941 0.945862 6.14706V6.17529C0.945862 8.13294 2.3388 9.77059 4.18351 10.1376C3.59125 10.2997 2.96948 10.3223 2.36704 10.2035C2.62267 11.0059 3.12331 11.7079 3.79858 12.211C4.47386 12.7141 5.28981 12.9929 6.13174 13.0082C4.70457 14.1381 2.93551 14.7488 1.11527 14.74C0.795273 14.74 0.475273 14.7212 0.155273 14.6835C1.94351 15.8318 4.07057 16.5 6.34821 16.5C13.7647 16.5 17.84 10.3447 17.84 5.00824C17.84 4.82941 17.84 4.66 17.8306 4.48118C18.6212 3.91647 19.2988 3.20118 19.8447 2.38235Z" fill="black"/>
    </svg>
    </button>
</div>
```

## Editable variables

- $icon-class
- $icon-class-modifier: false by default

### For Modifiers

- $icon-class-modifier

## Use

To use it we have to import the css of the $icon-class in the entry

```sh
.g--social-01{
    @include make-social-01(
        $icon-class: g--icon-01
    );
    @include make-social-01-modifier(
        // $icon-class-modifier: default
    );
}
```
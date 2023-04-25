# Card-61

## Layout

![alt text][card-61]

[card-61]: /src/img/global-components/card/card-58.png

## Html for a card

```sh
<div class="g--card-61">
    <div class="g--card-61__media-wrapper">
    <img data-src="https://raw.githubusercontent.com/team-thunderfoot/ui/main/src/img/logo-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--card-61__media-wrapper__media g--lazy-01">
    </div>
    <h3 class="g--card-61__title">Card 61</h3>
    <h4 class="g--card-61__subtitle">Job Position</h4>
    <a href="#" class="g--card-61__link">
    <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
        <path d="M16 0.5H2C1.0375 0.5 0.25875 1.2875 0.25875 2.25L0.25 12.75C0.25 13.7125 1.0375 14.5 2 14.5H16C16.9625 14.5 17.75 13.7125 17.75 12.75V2.25C17.75 1.2875 16.9625 0.5 16 0.5ZM15.65 4.21875L9.46375 8.08625C9.18375 8.26125 8.81625 8.26125 8.53625 8.08625L2.35 4.21875C2.26226 4.1695 2.18543 4.10295 2.12415 4.02315C2.06288 3.94334 2.01843 3.85193 1.9935 3.75445C1.96858 3.65697 1.96369 3.55544 1.97914 3.45602C1.99458 3.35659 2.03004 3.26134 2.08337 3.17601C2.1367 3.09069 2.20678 3.01707 2.28939 2.95962C2.37199 2.90217 2.46539 2.86207 2.56393 2.84176C2.66248 2.82145 2.76412 2.82135 2.86271 2.84145C2.9613 2.86156 3.05478 2.90147 3.1375 2.95875L9 6.625L14.8625 2.95875C14.9452 2.90147 15.0387 2.86156 15.1373 2.84145C15.2359 2.82135 15.3375 2.82145 15.4361 2.84176C15.5346 2.86207 15.628 2.90217 15.7106 2.95962C15.7932 3.01707 15.8633 3.09069 15.9166 3.17601C15.97 3.26134 16.0054 3.35659 16.0209 3.45602C16.0363 3.55544 16.0314 3.65697 16.0065 3.75445C15.9816 3.85193 15.9371 3.94334 15.8758 4.02315C15.8146 4.10295 15.7377 4.1695 15.65 4.21875Z" fill="black"/>
    </svg>
    </a>
</div>
```

##### \*Aspect Ratio

It is not necessary to add aspect-ratio because the images have height in the css.

## Editable variables

- $img-border-radius: false by default
- $icon-class,
- $text-align: false by default
- $subtitle-color
- $subtitle-font
- $title-color
- $title-font
- $img-background-color: false by default
- $img-background-color-hover: false by default
- $title-color-hover: false by default
- $title-font-weight: false by default
- $subtitle-font-weight: false by default

### For modifiers

- $img-background-color
- $img-background-color-hover
- $icon-class-modifier,
- $title-color-hover
- $subtitle-color
- $text-align
- $title-color

## use

```sh
.g--card-61{
    @include make-card-61(
        // $img-border-radius: default,
        $icon-class: g--icon-01,
        $title-font: d,
        $subtitle-font: f,
    );
    @include make-card-61-modifier(
        // $text-align: default,
        $title-color: map-get($color-options, a),
        $subtitle-color: map-get($color-options, a),
        $img-background-color: map-get($color-options, f),
        // $img-background-color-hover: map-get($color-options, e),
        // $icon-class-modifier: default,
        // $title-color-hover: map-get($color-options, g)
    );
}
```
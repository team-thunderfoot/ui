# Back-top-01

## Layout

![alt text][back-top-01]

[back-top-01]: /src/img/global-components/back-top/back-top-01.png

## Html for a card

You need to add it at the beginning in the HTML container that you want the limits to be. For example, if you want it to be in the main content, you have to add it inside the main tag. It doesn't need container or rows.

```sh
<button class="g--back-top-01 js--back-top" style="opacity: 1">
</button>
```

Inside the `<button>` you can add whatever you want. If you add an icon, it can't be a link or a button. Here's an example:

```sh
<button class="g--back-top-01 js--back-top" style="opacity: 1">
    <div class="g--icon-01">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
        <path d="M0.5 8L8.5 -3.49691e-07L16.5 8L15.1 9.425L9.5 3.825L9.5 16L7.5 16L7.5 3.825L1.9 9.425L0.5 8Z" fill="#1A191D"/>
        </svg>
    </div>
</button>
```

## Editable variables

- $icon-height
- $icon-width
- $margin-bottom
- $margin-right
- $breakpoint: false by default
- $icon-height-responsive: false by default
- $icon-width-responsive: false by default
- $margin-bottom-responsive: false by default
- $margin-right-responsive: false by default

## Use

```sh
.g--back-top-01 {
    @include make-back-top-01(
        $icon-height: $measure*5,
        $icon-width: $measure*5,
        $margin-bottom: $measure*5,
        $margin-right: $measure*3,
        // $breakpoint: default,
        // $icon-height-responsive: default,
        // $icon-width-responsive: default,
        // $margin-bottom-responsive: default,
        // $margin-right-responsive: default,
    );
}
```

### Packages needed

You have to install [jsutil package](https://www.npmjs.com/package/@andresclua/jsutil),

```sh
npm i @andresclua/jsutil
```

### JS

Import the BackToTop and initialize it inside `init()`. The `activeClass` is the class used to show it, `distance` is the dstance (in px) you have to scroll to start seeing it, if you don't add any distance it'll be 500.

```sh
import BackToTop from "@teamthunderfoot/ui/src/ui/back-top/back-top-01/back-top.js";

class Index {
  constructor() {
    this.init();
  }
  init() {
    new BackToTop({
      activeClass: 'g--back-top-01--is-active',
      distance: 300,
    });
  }
}

export default Index;
new Index();
```
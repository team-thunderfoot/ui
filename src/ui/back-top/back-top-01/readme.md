# Back-top-01

## Layout

![alt text][back-top-01]

[back-top-01]: /src/img/global-components/back-top/back-top-01.png

## Html

You need to add it at the beginning in the HTML container that you want the limits to be. For example, if you want it to be in the main content, you have to add it inside the main tag. It doesn't need container or rows.

```html
<button class="g--back-top-01 js--back-top" tf-data-distance="200"></button>
```

Inside the `<button>` you can add whatever you want. If you add an icon, it can't be a link or a button.

## Example with an icon

```html
<button class="g--back-top-01 js--back-top" tf-data-distance="200">
    <div class="g--icon-01">
        <svg width="16" height="16" fill="none" viewBox="0 0 17 16">
            <path
                d="M0.5 8L8.5 -3.49691e-07L16.5 8L15.1 9.425L9.5 3.825L9.5 16L7.5 16L7.5 3.825L1.9 9.425L0.5 8Z"
                fill="#1A191D"
            />
        </svg>
    </div>
</button>
```

## Position example inside `<main>`

```html
<main>
    <button class="g--back-top-01 js--back-top" tf-data-distance="200"></button>
    <section class="g--hero-01"></section>
    <section class="f--section-a"></section>
    <section class="f--section-b"></section>
</main>
```

## Editable variables

-   $icon-height
-   $icon-width
-   $margin-bottom
-   $margin-right

## Use

```scss
.g--back-top-01 {
    @include make-back-top-01();

    @include make-back-top-01-modifier(
        // $icon-height: $measure*5,
        // $icon-width: $measure*5,
        // $margin-bottom: $measure*5,
        // $margin-right: $measure*3,
    );
}
```

## Packages needed

You have to install [back-to-top package](https://www.npmjs.com/package/@teamthunderfoot/back-to-top),

```sh
npm install @teamthunderfoot/back-to-top
```

## JS

Import the BackToTop and initialize it inside `init()`. The `element` is the back-to-top button element, `activeClass` is The CSS class applied to the back-to-top button when it is active and `distanceTrigger` The data attribute that specifies the distance from the top of the page at which the back-to-top button should appear.

```js
import BackToTop from "@teamthunderfoot/back-to-top"

class Index {
    constructor() {
        this.init()
    }
    init() {
        const backToTop = new BackToTop({
            element: document.querySelector(".js--back-top"),
            activeClass: "g--back-top-01--is-active",
            distanceTrigger: "tf-data-distance",
        })

        // with more than one element
        document.querySelectorAll(".js--back-top").forEach((element) => {
            const backToTop = new BackToTop({
                element: element,
                activeClass: "g--back-top-01--is-active",
                distanceTrigger: "tf-data-distance",
            })
        })
    }
}

export default Index
new Index()
```

To remove the back-to-top functionality, you can use the destroy method. Call the destroy method on the instance of BackToTop:

```js
const destroy = this.backToTop.destroy()
```

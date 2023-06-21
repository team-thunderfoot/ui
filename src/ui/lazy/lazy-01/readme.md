# Lazy-01

## Html for a img with lazy

```html
<img data-src="https://globalcomponents.netlify.app/card-img-placeholder.png" src="/src/img/global-components/placeholder.jpg" alt="alt text" class="g--lazy-01">
```

## use
You have to add alt text to make it work properly. You can add src with a placeholder image.
You have to import CSS:
```scss
.g--lazy-01 {
    @include make-lazy-01();
}
```
And import JS:
```js
/**
 * Lazy Loading
 */
import Blazy from "blazy";

class Index {
  constructor() {
    this.init();
  }
  init() {
    // lazy loading for images
    new Blazy({
      selector: ".g--lazy-01",
      successClass: "g--lazy-01--is-loaded",
      errorClass: "g--lazy-01--is-error",
      loadInvisible: true
    });
  }
}

export default Index;
new Index();
```
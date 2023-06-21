# modal-01

## Modal

![alt text][modal-01]

[modal-01]: /src/img/global-components/modal/modal-01.jpg

## Html

```html
<button type="button" class="g--btn-01" tf-ds-modal-target="modal-1">open modal-01</button>

<div class="g--modal-01" id="modal-1" role="dialog">
    <div class="g--modal-01__wrapper">
        <h3 class="f--font-third">modal 01</h3>
        <img
            src="https://www.turn-keytechnologies.com/wp-content/uploads/2020/02/aruba-mobility-master.png"
            alt=""
        />
        <p class="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto labore cum harum
            laudantium dignissimos deserunt tenetur, possimus accusamus sit unde natus atque earum
            est, magni sint esse quisquam aspernatur consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugiat molestias ea est expedita rem necessitatibus
            tempora. Nisi corporis exercitationem cumque nulla, ducimus fuga dignissimos itaque
            voluptas! Qui non sequi obcaecati! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Ullam alias praesentium nobis eligendi corporis maxime officia error. Magnam
            laborum necessitatibus, dolor doloremque voluptatem earum dolorem esse iusto rerum,
            aperiam aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis id
            repudiandae pariatur sint vel culpa, veritatis soluta nobis obcaecati in amet
            perferendis porro eveniet quis accusamus enim perspiciatis voluptatibus. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Molestias reprehenderit ipsa sapiente
            accusantium magni nam odit libero, aliquam, ex ratione culpa ea molestiae optio
            voluptates dicta soluta sequi porro tempore. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Necessitatibus aliquid ab nihil maiores reiciendis minima dignissimos,
            provident optio quae quisquam ea unde amet ullam explicabo sequi similique mollitia
            illum a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sed nemo
            dolorum enim sequi repellat delectus ut dignissimos voluptatum nihil, magnam veniam,
            nisi eligendi aut adipisci porro suscipit odio nulla.
        </p>
    </div>
    <button class="g--modal-01__btn" tf-ds-modal-close="modal-1" aria-label="Close">
        <svg
            class="g--modal-01__btn__icon"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z"
                fill="black"
            />
        </svg>
    </button>
</div>
```

## Editable variables

-   $transition
-   $background-color
-   $size
-   $icon-color
-   $icon-height
-   $icon-width
-   $opacity
-   $opacity-active
-   $zoom
-   $zoom-active

## Use

```scss
.g--modal-01 {
    @include make-modal-01();
    @include make-modal-01-modifier(
        // $transition: all $time-b * 2 $ease-standard-a,
        // $background-color: map-get($color-options, b),
        // $size: small,
        // $icon-color: map-get($color-options, g),
        // $icon-height: $measure * 2,
        // $opacity: 0,
        // $opacity-active: 1,
        // $zoom: 0,
        // $zoom-active: 1
    );
}
```

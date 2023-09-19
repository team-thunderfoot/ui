# Video-01

## Layout

![alt text][video-01]

[video-01]: /src/img/global-components/video/video-01.jpg

## Html for a video

```html
<section class="g--video-01">
    <video class="g--video-01__media" poster="./img/global-components/img-placeholder.jpg" autoplay muted loop playsinline>
        <source src="./img/global-components/video-placeholder.mp4" type="video/mp4">
    </video>
</section>
```

## Editable variables

-   no editable variables

## Use
Upload the video in mp4 format and be sure it's compressed.

```scss
.g--video-01 {
    @include make-video-01();
}
```
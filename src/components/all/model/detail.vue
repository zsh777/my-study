<template>
    <div class="video">
    <video
    width="400px"
    height="500px"
    id="my-player"
    class="video-js"
    controls
    preload="auto"
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'>
    <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
    <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
    <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg">
    <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank">
        supports HTML5 video
    </a>
    </p>
</video>
    </div>
</template>
<script>
export default {
    name:"videoDetail"
}
</script>
<style>
.video{
    position: absolute;
    top: 10%;
}
</style>
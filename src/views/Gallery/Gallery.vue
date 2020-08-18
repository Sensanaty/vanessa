<template>
    <div class="gallery-wrapper">
        <h1 class="gallery-title">{{ title }}</h1>

        <Flickity ref="flickity" class="carousel" :options="flickityOptions">
            <div class="carousel-cell" v-for="index in 10" :key="index">
                <img :src="`/images/gallery/${index}.jpg`" alt="cocj" class="carousel-image" />
            </div>
        </Flickity>
    </div>
</template>

<script>
    export default {
        name: "Gallery"
    };
</script>

<style lang="scss">
</style>

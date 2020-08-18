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
import Flickity from "vue-flickity";

export default {
    name: "GalleryPage",
    components: {
        Flickity
    },
    props: {
        title: String
    },
    data() {
        return {
            flickityOptions: {
                initialIndex: 1,
                prevNextButtons: true,
                pageDots: true,
                wrapAround: true
            }
        };
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        }
    }
};
</script>

<style lang="scss">
.carousel-cell {
    overflow: hidden;
    width: 65%;
    height: 750px;
    counter-increment: carousel-cell;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 10rem;
}
</style>

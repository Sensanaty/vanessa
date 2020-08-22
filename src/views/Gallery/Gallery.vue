<template>
    <div class="content-wrapper gallery-wrapper">
        <GalleryCard
            v-for="gallery in galleries"
            :key="gallery.id"
            :url="gallery.id"
            :title="gallery.title"
            :image="`/images/gallery/${gallery.id}/${gallery.displayImage}`"
        />
    </div>
</template>

<script>
    import galleryList from "@/assets/lists/galleryList.json";
    import GalleryCard from "@/components/GalleryCard";

    export default {
        name: "Gallery",
        metaInfo: {
            title: "Vanessa | Gallery"
        },
        data() {
            return {
                galleries: galleryList
            };
        },
        components: {
            GalleryCard
        }
    };
</script>

<style lang="scss">
    .gallery-wrapper {
        display: flex;
        flex: 1 0 auto;
        justify-content: space-evenly;
        align-items: center;
        flex-flow: row wrap;
    }
</style>

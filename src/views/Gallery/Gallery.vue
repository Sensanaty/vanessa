<template>
    <div class="gallery-wrapper">
        <router-link :to="{ name: 'GalleryPage', params: { testString: 'This is a test string', id: 1 } }" exact>
            Link
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Gallery",
        metaInfo: {
            title: "Vanessa | Gallery"
        }
    };
</script>

<style lang="scss"></style>

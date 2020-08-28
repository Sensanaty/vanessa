<template>
    <router-link
        class="gallery-link"
        style="text-decoration: none"
        :to="{ name: 'GalleryPage', params: { id: url } }"
        exact
    >
        <h1 class="mobile-header">{{ title }}</h1>
        <div class="gallery-card">
            <picture>
                <source :srcset="`${image}.webp`" type="image/webp" />
                <source :srcset="`${image}.jpg`" type="image/jpeg" />
                <img :src="`${image}.jpg`" :alt="title" class="gallery-image" />
            </picture>

            <div class="text-wrapper">
                <h1 class="gallery-title">{{ title.toUpperCase() }}</h1>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "GalleryCard",
        props: {
            image: String,
            altText: String,
            title: String,
            url: String
        }
    };
</script>

<style lang="scss">
    .gallery-card {
        height: 650px;
        width: 650px;
        position: relative;
        margin: 30px 0;
        background-image: url("/images/ohmlaut.svg");

        .gallery-title {
            text-align: center;
            transition: all 5ms ease-in-out;
            opacity: 0;
            font-size: 4rem;
        }

        .gallery-image {
            height: 100%;
            width: 100%;
            object-fit: fill;
            transition: all 150ms ease-in-out;
            user-select: none;
        }

        .text-wrapper {
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            user-select: none;
            position: absolute;
            bottom: 0;
            left: 0;
            opacity: 0;
            background: transparentize($color-main, 0.1);
            transition: opacity 170ms ease-in-out;
        }

        &:hover {
            .text-wrapper {
                opacity: 1;
            }

            .gallery-title {
                opacity: 1;
            }
        }
    }

    .mobile-header {
        display: none;
    }
</style>

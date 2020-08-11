<template>
    <router-link class="project-link" :to="{ name: 'Project', params: { testString: 'This is a test string', id: url } }" exact>
        <div class="project-card">
            <picture>
                <source :srcset="imagePaths.webp" type="image/webp" />
                <source :srcset="imagePaths.jpg" type="image/jpeg" />
                <img :src="imagePaths.jpg" :alt="altText" class="project-image" >
            </picture>
            <div class="text-wrapper">
                <h1 class="project-title">{{ title.toUpperCase() }}</h1>
                <p class="project-description">{{ description }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "ProjectCard",
        props: {
            imagePaths: Object,
            altText: String,
            title: String,
            description: String,
            url: String
        }
    };
</script>

<style lang="scss">
    .project-card {
        height: 550px;
        width: 550px;
        position: relative;
        margin: 15px;
        box-shadow: 0 4px 4px 4px transparentize(black, 0.7), 0 4px 6px 6px transparentize(black, 0.8),
            0 4px 8px 8px transparentize(black, 0.9);
        background-image: url("/images/ohmlaut.svg");

        .project-title,
        .project-description {
            text-align: center;
            display: none;
            transition: all 5ms ease-in-out;
            opacity: 0;
        }

        .project-title {
            text-align: center;
            margin-bottom: 10px;
            font-size: 2.3rem;
        }

        .project-description {
            font-size: 1.15rem;
            margin: 0 15px 10px 15px;
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: fill;
            transition: all 150ms ease-in-out;
            user-select: none;

            &[lazy="loading"] {
                width: 550px;
            }
        }

        &:hover {
            box-shadow: 0 4px 4px 4px transparentize(black, 0.8), 0 4px 6px 6px transparentize(black, 0.8),
                0 4px 8px 8px transparentize(black, 0.8);

            .text-wrapper {
                opacity: 1;
                height: 40%;
                bottom: 0;
            }

            .project-title,
            .project-description {
                display: block;
                opacity: 1;
            }
        }
    }

    .text-wrapper {
        width: 100%;
        user-select: none;
        opacity: 0;
        height: 29%;
        padding: 15px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: transparentize($color-main, 0.1);
        transition: opacity 170ms ease-in-out, height 200ms ease-in-out, box-shadow 200ms ease-in-out;
    }
</style>

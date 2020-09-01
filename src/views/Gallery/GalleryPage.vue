<template>
    <div class="content-wrapper gallery-page-wrapper">
        <div class="link-wrapper">
            <router-link to="/gallery" class="back-link link" exact>
                <span aria-hidden="true">←</span>Back to Gallery
            </router-link>

            <router-link v-if="hasProject" class="project-link link" :to="`/projects/${currentRoute}`">
                See the Project <span aria-hidden="true">→</span>
            </router-link>
        </div>

        <hide-at breakpoint="mediumAndBelow" :breakpoints="{ medium: 901 }">
            <Flickity ref="flickity" class="carousel" :options="flickityOptions" autofocus>
                <div class="carousel-cell" v-for="(image, index) in images" :key="index">
                    <picture>
                        <source :srcset="`/images/gallery/${currentRoute}/${image}.webp`" type="image/webp" />
                        <source :srcset="`/images/gallery/${currentRoute}/${image}.jpg`" type="image/jpeg" />
                        <img
                            :alt="altTexts[index]"
                            class="carousel-image"
                            :src="`/images/gallery/${currentRoute}/${image}.jpg`"
                            :loading="
                                index === 0 ||
                                index === 1 ||
                                index === 2 ||
                                index === 3 ||
                                index === images.length - 1 ||
                                index === images.length - 2 ||
                                index === images.length - 3
                                    ? 'eager'
                                    : 'lazy'
                            "
                        />
                    </picture>
                </div>
            </Flickity>
        </hide-at>

        <show-at breakpoint="mediumAndBelow" :breakpoints="{ medium: 901 }">
            <div class="gallery-grid-wrapper">
                <div class="image-wrapper" v-for="(image, index) in images" :key="index">
                    <picture>
                        <source :srcset="`/images/gallery/${currentRoute}/${image}.webp`" type="image/webp" />
                        <source :srcset="`/images/gallery/${currentRoute}/${image}.jpg`" type="image/jpeg" />
                        <img
                            class="grid-image"
                            :src="`/images/gallery/${currentRoute}/${image}.jpg`"
                            :alt="altTexts[index]"
                            loading="lazy"
                        />
                    </picture>
                </div>
            </div>
        </show-at>
    </div>
</template>

<script>
    import Flickity from "vue-flickity";
    import ImageList from "@/assets/lists/galleryList.json";
    import ProjectList from "@/assets/lists/projectList.json";
    import { showAt, hideAt } from "vue-breakpoints";

    export default {
        name: "GalleryPage",
        metaInfo() {
            return {
                title: "Gallery | " + this.title
            };
        },
        components: {
            Flickity,
            showAt,
            hideAt
        },
        data() {
            return {
                flickityOptions: {
                    initialIndex: 0,
                    prevNextButtons: true,
                    wrapAround: true,
                    pageDots: false
                },
                images: null,
                currentRoute: null,
                title: null,
                hasProject: false,
                altTexts: null
            };
        },
        created() {
            this.populatePage();
            this.$route.meta.title = "Gallery | " + this.title;
        },
        methods: {
            next() {
                this.$refs.flickity.next();
            },
            previous() {
                this.$refs.flickity.previous();
            },
            populatePage() {
                const currentGallery = ImageList.find(image => image.id === this.$route.params.id);
                this.images = currentGallery.galleryPageImageNames;
                this.currentRoute = this.$route.params.id;
                this.title = currentGallery.title;
                this.altTexts = currentGallery.altText;
                this.checkForProject();
            },
            checkForProject() {
                if (ProjectList.find(project => project.id === this.$route.params.id)) {
                    this.hasProject = true;
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .link-wrapper {
        display: flex;
        position: absolute;
        margin-top: 10px;
    }

    .link {
        text-decoration: none;
        color: $off-white;
        user-select: none;
        font-size: 1.8rem;
        transition: all 200ms ease-in-out;
        position: relative;

        span {
            display: inline-block;
            transition: transform 150ms ease-in-out;
        }

        &:hover {
            color: $highlight-gallery;
        }

        &.back-link {
            margin: 0 30px 15px 15px;

            span {
                margin-right: 5px;
            }

            &:hover {
                span {
                    transform: translateX(-3px);
                }
            }
        }

        &.project-link {
            margin: 0 15px 20px 30px;

            &:hover {
                span {
                    transform: translateX(3px);
                }
            }
        }
    }

    .carousel {
        margin: 5% 0 2% 0;
    }

    .carousel-cell {
        width: 100%;
        height: 725px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 40px;

        .carousel-image {
            width: 100%;
            height: 100%;
        }
    }

    .gallery-grid-wrapper {
        box-sizing: content-box;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 100%;
        margin: 0 auto;
    }

    .image-wrapper {
        margin: 10px 0;
        &:nth-child(1) {
            margin: 50px 0 10px 0;
        }
    }

    .grid-image {
        height: auto;
        width: 100%;
        margin: 20px 0;
    }

    @import "../../styles/media-query/_galleryPage";
</style>

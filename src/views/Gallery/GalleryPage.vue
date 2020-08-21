<template>
    <div class="gallery-wrapper">
        <div class="link-wrapper">
            <router-link to="/gallery" class="back-link link" exact>
                <span aria-hidden="true">←</span>Back to Gallery
            </router-link>

            <router-link v-if="hasProject" class="project-link link" :to="`/projects/${currentRoute}`">
                See the Project <span aria-hidden="true">→</span>
            </router-link>
        </div>

        <Flickity ref="flickity" class="carousel" :options="flickityOptions">
            <div class="carousel-cell" v-for="(image, index) in images" :key="index">
                <picture>
                    <source :srcset="`/images/gallery/${currentRoute}/${image}.webp`" type="image/webp" />
                    <source :srcset="`/images/gallery/${currentRoute}/${image}.jpg`" type="image/jpeg" />
                    <img
                        alt=""
                        class="carousel-image"
                        :src="`/images/gallery/${currentRoute}/${image}.jpg`"
                    />
                </picture>
            </div>
        </Flickity>
    </div>
</template>

<script>
    import Flickity from "vue-flickity";
    import ImageList from "@/assets/lists/galleryList.json";
    import ProjectList from "@/assets/lists/projectList.json";

    export default {
        name: "GalleryPage",
        components: {
            Flickity
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
                hasProject: false
            };
        },
        created() {
            this.populatePage();
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
                console.log(currentGallery);
                this.images = currentGallery.imageNames;
                this.currentRoute = this.$route.params.id;
                this.title = currentGallery.title;
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
        margin: 3%;
    }

    .carousel-cell {
        width: 100%;
        height: 725px;
        display: flex;
        justify-content: center;
        align-items: center;

        .carousel-image {
            width: 100%;
            height: 100%;
        }
    }
</style>

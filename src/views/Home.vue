<template>
    <div class="content-wrapper home-wrapper">
        <div class="hero-text">
            <h1 class="title">PRODUCTS ARE FRIENDS</h1>
            <h2 class="subtitle">NOT TRASH</h2>
        </div>
        <nav class="hero-navigation">
            <router-link to="/projects" class="navlink projects" exact>PROJECTS</router-link>
            <router-link to="/gallery" class="navlink gallery" exact>GALLERY</router-link>
            <router-link to="/about" class="navlink about" exact>ABOUT</router-link>
            <router-link to="/contact" class="navlink contact" exact>CONTACT</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Home",
        metaInfo: {
            title: "Vanessa Sölter",
            meta: [
                {
                    name: "description",
                    content:
                        "Emerging, passionate, dedicated and driven freelance industrial designer based in Australia who specializes in 3D modelling, CAD, UX design and Graphic design"
                }
            ]
        }
    };
</script>

<style lang="scss">
    .home-wrapper {
        align-items: center;
        display: flex;
        flex-flow: column nowrap;
    }

    .hero-navigation {
        margin-top: 1%;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        text-align: center;
    }

    .navlink {
        padding: 1rem;
        width: 100%;
        text-decoration: none;
        color: $color-main;
        font-size: calc(20px + 1vmin);
        margin: 20px 0;
        box-shadow: 0 0 0 0 $color-main;
        transition: all 150ms ease-in-out;
        min-height: 65px;
        user-select: none;

        &.projects {
            background: $highlight-main;

            &:hover {
                box-shadow: 0 0 4px 0 opacify($highlight-main, 0.5);
            }
        }
        &.gallery {
            background: $highlight-gallery;

            &:hover {
                box-shadow: 0 0 4px 0 opacify($highlight-gallery, 0.5);
            }
        }
        &.about {
            background: $highlight-about;

            &:hover {
                box-shadow: 0 0 4px 0 opacify($highlight-about, 0.5);
            }
        }
        &.contact {
            background: $highlight-contact;

            &:hover {
                box-shadow: 0 0 4px 0 opacify($highlight-contact, 0.5);
            }
        }
    }

    .hero-text {
        margin-top: 3%;
        text-align: center;

        .title {
            font-size: 5.5rem;
        }

        .subtitle {
            font-size: 12rem;
        }
    }

    @import "../styles/media-query/_home";
</style>

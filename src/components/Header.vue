<template>
    <header class="header-wrapper">
        <router-link to="/" class="logo" aria-label="Homepage">Ö</router-link>
        <LinkButton url="/projects" text="PROJECTS" />
        <LinkButton url="/gallery" text="GALLERY" />
        <LinkButton url="/about" text="ABOUT" />
        <LinkButton url="/contact" text="CONTACT" />
        <a href="https://vanessasoelter.youcanbook.me/" target="_blank" class="link-button" rel="noopener">CONSULTS</a>
    </header>
</template>

<script>
    import LinkButton from "@/components/LinkButton";

    export default {
        name: "Header",
        components: {
            LinkButton
        },
        methods: {
            changeHeader(name) {
                const wrapper = document.querySelector(".header-wrapper");
                const pagePath = this.$route.path;

                if (name === "Projects" || pagePath.includes("projects/")) {
                    wrapper.classList.remove("gallery", "about", "contact", "misc");
                    wrapper.classList.add("projects");
                } else if (name === "Gallery" || pagePath.includes("gallery/")) {
                    wrapper.classList.remove("project", "about", "contact", "misc");
                    wrapper.classList.add("gallery");
                } else if (name === "About" || pagePath.includes("about/")) {
                    wrapper.classList.remove("gallery", "projects", "contact", "misc");
                    wrapper.classList.add("about");
                } else if (name === "Contact" || pagePath.includes("contact/")) {
                    wrapper.classList.remove("gallery", "projects", "about", "misc");
                    wrapper.classList.add("contact");
                } else {
                    wrapper.classList.remove("gallery", "projects", "about", "contact");
                    wrapper.classList.add("misc");
                }
            }
        },
        mounted() {
            this.changeHeader(this.$route.name);
        },
        watch: {
            $route() {
                this.changeHeader(this.$route.name);
            }
        }
    };
</script>

<style lang="scss">
    .header-wrapper {
        display: flex;
        flex-flow: row nowrap;
        min-height: 85px;
        max-height: 100px;
        align-items: center;
        text-align: center;
        background: $color-main;
        transition: background 350ms ease-in-out;

        &.projects {
            background: $highlight-main;
        }

        &.gallery {
            background: $highlight-gallery;
        }

        &.about {
            background: $highlight-about;
        }

        &.contact {
            background: $highlight-contact;
        }

        &.misc {
            background: $highlight-misc;
        }

        a {
            text-decoration: none;
        }
    }

    .logo {
        color: $color-main;
        margin-right: auto;
        margin-left: 40px;
        font-size: 3.1rem;
        user-select: none;
        border: none;
        transition: all 150ms ease-in-out;
        background: none !important;
        box-shadow: none !important;

        &:hover {
            &:after {
                content: " ";
                height: 10px;
                width: 100%;
                border-bottom: 1px solid red;
                position: relative;
            }
        }
    }

    .router-link-active {
        background: $off-white;
        color: $color-main;
        box-shadow: 0 0 4px 0 $off-white;
    }

    .router-link-exact-active {
        background: $off-white;
        color: $color-main;
        box-shadow: 0 0 4px 0 $off-white;
    }

    @media screen and (max-width: 790px) {
        .logo {
            font-size: 2.8rem;
        }
    }
</style>

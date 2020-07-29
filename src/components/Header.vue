<template>
    <header class="header-wrapper">
        <router-link to="/" class="logo" aria-label="Homepage">Ö</router-link>
        <LinkButton url="/projects" text="PROJECTS" />
        <LinkButton url="/gallery" text="GALLERY" />
        <LinkButton url="/about" text="ABOUT" />
        <LinkButton url="/contact" text="CONTACT" />
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

                if (name === "Projects") {
                    wrapper.classList.remove("gallery", "about", "contact");
                    wrapper.classList.add("projects");
                } else if (name === "Gallery") {
                    wrapper.classList.remove("project", "about", "contact");
                    wrapper.classList.add("gallery");
                } else if (name === "About") {
                    wrapper.classList.remove("gallery", "projects", "contact");
                    wrapper.classList.add("about");
                } else if (name === "Contact") {
                    wrapper.classList.remove("gallery", "projects", "about");
                    wrapper.classList.add("contact");
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
        height: 100px;
        align-items: center;
        text-align: center;
        transition: background 350ms ease-in-out;

        .logo {
            color: $color-main;
            margin-right: auto;
            margin-left: 40px;
            font-size: 3rem;
            user-select: none;
            border: none;
            transition: all 150ms ease-in-out;

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

        .router-link-exact-active {
            background: $off-white !important;
            color: $color-main;
            box-shadow: 0 0 4px 0 $off-white;
        }

        a {
            text-decoration: none;
        }
    }
</style>

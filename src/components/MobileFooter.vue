<template>
    <footer class="mobile">
        <router-link to="/projects" class="footer-link" id="project">PROJECT</router-link>
        <router-link to="/gallery" class="footer-link" id="gallery">GALLERY</router-link>
        <div :class="['footer-logo', { open: clicked }]" @click="clicked = !clicked">Ö</div>
        <transition name="slide">
            <div :class="['nav-menu', { open: clicked }]" v-if="clicked">
                <div class="social-footer">
                    <a
                        href="https://www.behance.net/vasequise"
                        class="social-link"
                        aria-label="Vanessa's Behance Profile"
                        target="_blank"
                        rel="noopener"
                    >
                        <BehanceIcon />
                    </a>
                    <a
                        href="https://www.instagram.com/vxsxltxr/"
                        class="social-link"
                        aria-label="Vanessa's Instagram Profile"
                        target="_blank"
                        rel="noopener"
                    >
                        <InstagramIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vsoelter/"
                        class="social-link"
                        aria-label="Vanessa's LinkedIn Profile"
                        target="_blank"
                        rel="noopener"
                    >
                        <LinkedinIcon />
                    </a>
                    <a
                        href="https://www.facebook.com/soelterdesign/"
                        class="social-link"
                        aria-label="Vanessa's Facebook Profile"
                        target="_blank"
                        rel="noopener"
                    >
                        <FacebookIcon />
                    </a>
                </div>
                <div class="navlink-wrapper">
                    <router-link to="/legal" class="legal-link">Legal</router-link>
                    <router-link to="/" class="home-link">Home</router-link>
                </div>
            </div>
        </transition>
        <router-link to="/about" class="footer-link" id="about">ABOUT</router-link>
        <router-link to="/contact" class="footer-link" id="contact">CONTACT</router-link>
    </footer>
</template>

<script>
    import BehanceIcon from "@/assets/icons/behance.svg";
    import InstagramIcon from "@/assets/icons/instagram.svg";
    import LinkedinIcon from "@/assets/icons/linkedin.svg";
    import FacebookIcon from "@/assets/icons/facebook.svg";

    export default {
        name: "MobileFooter",
        components: {
            BehanceIcon,
            InstagramIcon,
            LinkedinIcon,
            FacebookIcon
        },
        data() {
            return {
                clicked: false
            };
        },
        mounted() {
            this.changeHeader(this.$route.name);
        },
        watch: {
            $route() {
                this.changeHeader(this.$route.name);
            }
        },
        methods: {
            changeHeader(name) {
                const footer = document.querySelector(".mobile");
                const pagePath = this.$route.path;

                if (name === "Projects" || pagePath.includes("projects/")) {
                    footer.classList.remove("gallery", "about", "contact", "misc");
                    footer.classList.add("projects");
                } else if (name === "Gallery" || pagePath.includes("gallery/")) {
                    footer.classList.remove("project", "about", "contact", "misc");
                    footer.classList.add("gallery");
                } else if (name === "About" || pagePath.includes("about/")) {
                    footer.classList.remove("gallery", "projects", "contact", "misc");
                    footer.classList.add("about");
                } else if (name === "Contact" || pagePath.includes("contact/")) {
                    footer.classList.remove("gallery", "projects", "about", "misc");
                    footer.classList.add("contact");
                } else if (name === "Legal" || pagePath.includes("legal/")) {
                    footer.classList.remove("gallery", "projects", "about", "contact");
                    footer.classList.add("misc");
                } else {
                    footer.classList.remove("gallery", "projects", "about", "contact", "misc");
                }
            }
        }
    };
</script>

<style lang="scss">
    footer.mobile {
        position: fixed;
        bottom: 0;
        width: 100%;
        min-height: 100px;
        max-height: 100px;
        background: $color-secondary;
        display: grid;
        grid-template: 1fr / 2fr 2fr 1fr 2fr 2fr;
        justify-content: center;
        align-items: center;
        transition: background 150ms ease-in-out;

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
    }

    .home-link,
    .legal-link {
        background: none !important;
        box-shadow: none !important;
        color: $off-white;
    }

    .footer-link {
        background: $color-secondary;
        font-size: 1.75rem;
        text-align: center;
        color: $off-white;
        text-decoration: $off-white;
        padding: 15px;
        margin: 0;

        &.router-link-exact-active {
            box-shadow: none;
            background: $off-white;
            color: $color-secondary;
        }
    }

    .footer-logo {
        font-size: 4rem;
        display: flex;
        justify-content: center;
        color: $off-white;
        transition: 100ms ease-in-out;

        &.open {
            background: $off-white;
            color: $color-secondary;
        }
    }

    .nav-menu {
        display: flex;
        flex-flow: column wrap;
        position: absolute;
        left: 0;
        bottom: 100px;
        background: $color-secondary;
        width: 100%;
        height: 170px;
        padding: 20px 0;
        transition: all 150ms ease-in-out;

        .social-footer {
            display: flex;
            width: 100%;
            flex-flow: row nowrap;
            justify-content: space-evenly;
            margin-bottom: 10px;

            a {
                height: 60px;
            }
            svg {
                height: 100%;
                width: auto;
                fill: $off-white;
            }
        }
    }

    .navlink-wrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        a {
            color: $off-white;
            font-size: 2.5rem;
            margin: 0 25px;
        }
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: height 175ms ease-in-out, opacity 150ms ease-in-out;
    }

    .slide-enter,
    .slide-leave-to {
        height: 0;
        opacity: 0;
    }

    @import "../styles/media-query/_mobileFooter";
</style>

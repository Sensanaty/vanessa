<template>
    <footer>
        <nav aria-label="Footer Navigation Links">
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
        </nav>

        <div class="middle">
            <span class="item legal">
                <router-link class="misc-link" to="/legal">Legal</router-link>
            </span>

            <span class="item name-text"><span class="copyright">© 2020</span>Vanessa Sölter </span>
        </div>

        <div class="plug">
            Made with <span aria-label="Heart Emoticon">&lt;3</span> by
            <a href="https://github.com/Sensanaty" aria-label="Sensanaty, Web Developer" target="_blank" rel="noopener">
                Sensanaty
            </a>
        </div>
    </footer>
</template>

<script>
    import BehanceIcon from "@/assets/icons/behance.svg";
    import InstagramIcon from "@/assets/icons/instagram.svg";
    import LinkedinIcon from "@/assets/icons/linkedin.svg";
    import FacebookIcon from "@/assets/icons/facebook.svg";

    export default {
        name: "Footer",
        components: {
            BehanceIcon,
            InstagramIcon,
            LinkedinIcon,
            FacebookIcon
        }
    };
</script>

<style lang="scss">
    footer {
        margin-top: auto;
        height: 80px;
        min-height: 80px;
        max-height: 80px;
        width: 100%;
        display: grid;
        grid-template: 1fr / 1fr 1fr 1fr;
        position: sticky;
        top: 0;
        left: 0;
        align-items: center;
        background: $color-secondary;
        color: $off-white;

        a {
            display: inline-block;
            color: $off-white;
            text-decoration: none;
            transition: all 150ms ease-in-out;

            &:hover {
                color: $highlight-main;
            }
        }

        nav {
            justify-self: flex-start;
            height: 100%;
            display: flex;
            align-items: center;
        }

        .middle {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 0 auto;
            font-size: 1.3rem;

            .name-text {
                &:before {
                    content: "•";
                    margin: 0 15px;
                }

                .copyright {
                    margin-right: 5px;
                }
            }

            .misc-link {
                &.router-link-exact-active {
                    background: $color-secondary;
                    box-shadow: none;
                    color: $off-white;
                    text-decoration: underline $off-white;

                    &:hover {
                        text-decoration: underline $highlight-main;
                        color: $highlight-main;
                    }
                }
            }
        }

        .plug {
            justify-self: flex-end;
            margin-right: 40px;
            user-select: none;
            font-size: 1.2rem;

            span {
                color: red;
            }
        }
    }

    .social-link {
        height: 60%;
        margin: 0 10px;
        border-radius: 50%;
        box-shadow: 0 0 0 0 $color-main;
        transition: all 100ms ease-in-out;

        &:nth-child(1) {
            margin-left: 40px;
        }

        svg {
            fill: $off-white;
            height: 100%;
            width: auto;
            transition: all 175ms ease-in-out;
        }

        &:hover {
            box-shadow: 0 0 4px 0 transparentize($highlight-main, 0.5);
            svg {
                fill: $highlight-main;
            }
        }
    }
</style>

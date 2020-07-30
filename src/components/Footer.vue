<template>
    <footer>
        <nav>
            <a href="https://behance.net" class="social-link"><BehanceIcon /></a>
            <a href="https://google.com" class="social-link"><InstagramIcon /></a>
            <a href="https://google.com" class="social-link"><LinkedinIcon /></a>
            <a href="https://google.com" class="social-link"><FacebookIcon /></a>
        </nav>
        <div class="copyright">Copyright © 2020 <span>Vanessa Sölter</span></div>
        <div class="plug">Made with <span>&lt;3</span> by <a href="https://github.com/Sensanaty">Sensanaty</a></div>
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
        max-height: 80px;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        background: $color-secondary;
        flex: 1 0 auto;
        color: $off-white;
        font-weight: bold;

        nav {
            height: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
        }

        .copyright {
            font-size: 2rem;
            user-select: none;

            span {
                user-select: all;
            }
        }

        .plug {
            justify-self: flex-end;
            margin-right: 40px;
            user-select: none;

            span {
                color: red;
            }

            a {
                display: inline-block;
                user-select: all;
                color: $off-white;
                text-decoration: none;
                transition: all 150ms ease-in-out;

                &:hover {
                    transform: skew(-10deg) translate(1px);
                    color: $highlight-main;
                }
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

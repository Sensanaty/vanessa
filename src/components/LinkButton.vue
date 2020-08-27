<template>
    <router-link :to="url" class="link-button">{{ text }}</router-link>
</template>

<script>
    export default {
        name: "LinkButton",
        props: {
            url: String,
            text: String
        }
    };
</script>

<style lang="scss">
    .link-button {
        user-select: none;
        padding: 20px;
        color: $off-white;
        background: $color-main;
        font-size: 1.35rem;
        transition: background 350ms ease-in-out, box-shadow 350ms ease-in-out, color 175ms ease-in-out;
        box-shadow: 0 0 0 0 opacify($off-white, 1);
    }

    .projects .link-button:hover {
        color: $highlight-main;
    }
    .gallery .link-button:hover {
        color: $highlight-gallery;
    }
    .about .link-button:hover {
        color: $highlight-about;
    }
    .contact .link-button:hover {
        color: $highlight-contact;
    }

    .misc .link-button:hover {
        color: $highlight-misc;
    }

    @media screen and (max-width: 790px) {
        .link-button {
            font-size: 1.2rem;
        }
    }
</style>

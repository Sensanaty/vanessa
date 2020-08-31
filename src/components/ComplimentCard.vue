<template>
    <section class="recommendation">
        <p v-for="(text, index) in texts" :key="index">{{ text }}</p>
        <p class="recommender">
            <a :href="recommender.link" target="_blank" rel="noopener">{{ recommender.name }}</a>
            , {{ recommender.position }}
        </p>
    </section>
</template>

<script>
    export default {
        name: "ComplimentCard",
        props: {
            texts: Array,
            recommender: Object
        }
    };
</script>

<style lang="scss">
    .recommendation {
        box-sizing: content-box;
        background: $color-secondary;
        padding: 35px;
        width: 50%;
        margin: 15px 0;
        border-top: 2px solid $highlight-contact;

        p {
            font-size: 1.5rem;
            font-family: "Aeonik Medium", sans-serif;
            line-height: 1.2;
            margin: 10px 0;
        }

        .recommender {
            font-size: 1.7rem;
            margin-top: 30px;

            a {
                color: $off-white;
                text-decoration: underline $off-white;
                transition: all 150ms ease-in-out;

                &:hover {
                    color: $highlight-contact;
                    text-decoration: underline $highlight-contact;
                }
            }
        }
    }
</style>

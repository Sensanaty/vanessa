<template>
    <section class="recommendation">
        <p v-for="(text, index) in texts" class="words" :key="index">{{ text }}</p>
        <a :href="recommender.link" class="reference-link" target="_blank" rel="noopener">{{ recommender.name }}</a>
        <p class="recommender">{{ recommender.position }}</p>
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
        display: flex;
        flex-flow: column wrap;
        box-sizing: border-box;
        margin: 10px;
        font-size: 1.4rem;

        .words {
            margin: 10px 0;
            font-family: "Aeonik Medium", sans-serif;
        }

        .reference-link {
            color: $off-white;
            text-decoration: underline $off-white;
            font-size: 1.8rem;
            margin: 30px 0 7px;
            align-self: flex-start;
            transition: all 100ms ease-in-out;
        }
    }
</style>

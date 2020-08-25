<template>
    <div class="content-wrapper contact-wrapper">
        <div class="recommendations">
            <h1>Some kind words from the people I've worked with in the past</h1>

            <section v-for="recommendation in recommendations" :key="recommendation.id" class="recommendation">
                <p v-for="(text, index) in recommendation.texts" :key="index">{{ text }}</p>
                <p class="recommender" target="_blank" rel="noopener">
                    <a :href="recommendation.recommender.link">{{ recommendation.recommender.name }}</a
                    >, {{ recommendation.recommender.position }}
                </p>
            </section>
        </div>
    </div>
</template>

<script>
    import recommendations from "@/assets/lists/recommendationList.json";

    export default {
        name: "Contact",
        metaInfo: {
            title: "Vanessa | Contact"
        },
        data() {
            return {
                recommendations: recommendations
            };
        }
    };
</script>

<style lang="scss">
    .contact-wrapper {
        margin: 15px;
    }

    .recommendations {
        display: flex;
        flex-flow: column wrap;

        h1 {
            font-size: 3rem;
            text-align: center;
            margin-bottom: 20px;
        }

        .recommendation {
            box-sizing: content-box;
            background: $color-secondary;
            padding: 35px;
            width: 75%;
            margin: 15px auto;
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
    }
</style>

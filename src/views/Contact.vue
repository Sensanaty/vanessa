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

        <div class="get-in-touch">
            <h1>Had a project in mind you wanted to talk about?</h1>
            <ContactForm />
        </div>
    </div>
</template>

<script>
    import recommendations from "@/assets/lists/recommendationList.json";
    import ContactForm from "@/components/ContactForm.vue";

    export default {
        name: "Contact",
        metaInfo: {
            title: "Vanessa | Contact"
        },
        components: {
            ContactForm
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
        margin: 15px 25px;
    }

    .recommendations {
        display: flex;
        flex-flow: column wrap;

        h1 {
            font-size: 2.3rem;
            margin-bottom: 20px;
        }

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
    }

    .get-in-touch {
        display: flex;
        flex-flow: column nowrap;
        box-sizing: content-box;
        position: fixed;
        right: 50px;
        top: 17%;
        margin: auto;
        text-align: center;
        user-select: none;

        p {
            font-size: 1.4rem;
            margin-top: 15px;

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

    @import "../styles/media-query/_contact";
</style>

<template>
    <div class="content-wrapper contact-wrapper">
        <div class="recommendations">

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

<template>
    <form name="contact-form" method="post" data-netlify="true" data-netlify-bot-field="bot-field">
        <input type="hidden" name="form-name" value="contact-form" />
        <input
            aria-label="What is your Email?"
            type="email"
            name="email"
            id="email-form"
            v-model="form.email"
            placeholder="Your Email (Required)"
            required
        />
        <input
            aria-label="What is your name?"
            type="text"
            name="name"
            id="name-form"
            v-model="form.name"
            placeholder="Your Name (Required)"
            required
        />
        <textarea
            aria-label="What would you like to discuss with Vanessa?"
            name="message"
            id="message-form"
            v-model="form.message"
            placeholder="What do you want to get in touch about? (Required)"
            required
        ></textarea>
        <button type="submit" @submit.prevent="handleSubmit">Send</button>
    </form>
</template>

<script>
    export default {
        name: "ContactForm",
        data() {
            return {
                form: {
                    name: "",
                    email: "",
                    message: ""
                }
            };
        },
        methods: {
            encode(data) {
                return Object.keys(data)
                    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
                    .join("&");
            },
            handleSubmit() {
                const formWrapper = document.querySelector("form");
                formWrapper.innerHTML = "Sending";
                formWrapper.classList.add("loading");
                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: this.encode({ "form-name": "contact-form", ...this.form })
                })
                    .then(() => {
                        formWrapper.classList.remove("loading");
                        formWrapper.classList.add("loaded");
                        formWrapper.innerHTML = `Thanks! I'll get in touch with you soon at ${this.form.email}!`;
                    })
                    .catch(error => alert(error));
            }
        }
    };
</script>

<style lang="scss">
    form {
        display: flex;
        flex-flow: column wrap;
        width: 90%;
        margin: 15px auto;
        font-size: 1.3rem;
        font-family: "Aeonik Medium", sans-serif;

        ::placeholder {
            color: $highlight-contact;
            text-align: center;
            font-family: "Aeonik Bold", sans-serif;
        }

        input,
        textarea {
            background: $color-secondary;
            padding: 15px;
            color: $off-white;
            border: none;
            margin: 5px 0;
            outline: 0 solid $color-secondary;
            transition: all 75ms ease-in-out;
            box-shadow: 0 1px 1px 1px black;

            &:active,
            &:focus {
                outline: 1px solid $highlight-contact;
                box-shadow: none;
            }
        }

        textarea {
            min-height: 400px;
            max-height: 400px;
            max-width: 100%;
            min-width: 100%;
            resize: none;
        }

        button {
            width: 50%;
            margin: 10px auto;
            padding: 15px;
            font-family: "Aeonik Bold", sans-serif;
        }
    }
</style>

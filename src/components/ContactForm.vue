<template>
    <form name="contact-form" method="post" data-netlify="true" data-netlify-bot-field="bot-field" autocomplete="off">
        <div class="errors" v-show="errors.length !== 0">
            There were some errors with the form:
            <ul>
                <li class="error-message" v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </div>

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
        <button type="submit" @click.prevent="handleSubmit">send</button>
    </form>
</template>

<script>
    export default {
        name: "ContactForm",
        data() {
            return {
                errors: [],
                form: {
                    name: null,
                    email: null,
                    message: null
                }
            };
        },
        methods: {
            encode(data) {
                return Object.keys(data)
                    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
                    .join("&");
            },
            validForm() {
                const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const nameField = document.querySelector("#name-form");
                const emailField = document.querySelector("#email-form");
                const messageField = document.querySelector("#message-form");

                if (this.form.name && this.form.email && emailRegex.test(this.form.email) && this.form.message) {

                    emailField.style.outline = "0 solid #272727";
                    messageField.style.outline = "0 solid #272727";
                    return true;
                }

                this.errors = [];

                if (!this.form.name) {
                    this.errors.push("No Name Provided");
                    nameField.style.outline = "1px solid red";
                } else if (this.form.name) {
                    nameField.style.outline = "0 solid #272727";
                }

                if (!this.form.email) {
                    this.errors.push("No Email Provided");
                    emailField.style.outline = "1px solid red";
                } else if (!emailRegex.test(this.form.email)) {
                    this.errors.push("The Email You Entered Was Invalid, Please Double Check It");
                    emailField.style.outline = "1px solid red";
                } else if (this.form.email) {
                    emailField.style.outline = "0 solid #272727";
                }

                if (!this.form.message) {
                    this.errors.push("No Message Provided");
                    messageField.style.outline = "1px solid red";
                } else if (this.form.message) {
                    nameField.style.outline = "0 solid #272727";
                }

                return false;
            },
            handleSubmit() {
                const formWrapper = document.querySelector("form");

                if (this.validForm()) {
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
        color: $off-white;

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
                outline: 1px solid $highlight-contact !important;
                box-shadow: none;
            }
        }

        textarea {
            min-height: 300px;
            max-height: 300px;
            max-width: 100%;
            min-width: 100%;
            resize: none;
        }

        button {
            width: 25%;
            margin: 10px auto;
            padding: 8px 15px 15px 15px;
            font-family: "Aeonik Bold", sans-serif;
            border: none;
            background: $off-white;
            cursor: pointer;
            transition: all 150ms ease-in-out;
            background: $highlight-contact;
            color: $off-white;
            font-size: 2rem;
            line-height: 1;

            &:hover {
                background: $off-white;
                color: $highlight-contact;
            }

            &:active {
                transform: translateY(2px);
            }
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
            -webkit-text-fill-color: white;
            transition: background-color 1ms ease-in-out;
            -webkit-box-shadow: 0 0 0px 1000px $color-secondary inset;
        }
    }

    .errors {
        text-align: left;
        color: $off-white;

        ul {
            padding: 15px;
            margin: 0 0 10px 15px;

            li {
                list-style: square;
            }
        }
    }
</style>

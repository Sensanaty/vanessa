<template>
    <div id="app">
        <transition name="header">
            <hide-at breakpoint="small">
                <Header v-show="renderNav" :breakpoints="{ small: 756 }" />
            </hide-at>
        </transition>
        <router-view />
        <hide-at breakpoint="small" :breakpoints="{ small: 756 }">
            <Footer />
        </hide-at>
        <show-at breakpoint="small" :breakpoints="{ small: 756 }">
            <MobileFooter />
        </show-at>
    </div>
</template>

<script>
    import Footer from "@/components/Footer";
    import MobileFooter from "@/components/MobileFooter.vue";
    import Header from "@/components/Header";
    import { showAt, hideAt } from "vue-breakpoints";

    export default {
        name: "App",
        components: {
            Footer,
            Header,
            MobileFooter,
            showAt,
            hideAt
        },
        computed: {
            renderNav() {
                return !(this.$route.name === "Home");
            }
        }
    };
</script>

<style lang="scss">
    #app {
        display: flex;
        flex-flow: column nowrap;
    }

    .content-wrapper {
        padding: 15px 0;
    }

    .header-leave-active {
        transition: all 1ms;
    }

    .header-leave,
    .header-leave-to {
        display: none;
    }

    @media screen and (max-width: 755px) {
        .header-wrapper {
            display: none !important;
        }
    }
</style>

<template>
    <div id="app">
        <transition name="header">
            <Header v-show="renderNav" />
        </transition>
        <router-view />
        <Footer />
    </div>
</template>

<script>
    import Footer from "@/components/Footer";
    import Header from "@/components/Header";

    export default {
        name: "App",
        components: {
            Footer,
            Header
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
</style>

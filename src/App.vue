<template>
    <div id="app">
        <Header v-if="renderNav" />
        <router-view />
        <Footer />
    </div>
</template>

<style lang="scss">
    #app {
        display: flex;
        flex-flow: column nowrap;
    }
</style>

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
                return !(this.$route.name === "Home" || !this.$route.name);
            }
        }
    };
</script>

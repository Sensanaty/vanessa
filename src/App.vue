<template>
    <div id="app">
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

    export default {
        name: "App",
        components: {
            Footer
        }
    };
</script>

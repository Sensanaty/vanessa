import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import VueLazyload from "vue-lazyload";
import "@/styles/normalize.css";
import "@/styles/main.scss";

Vue.use(VueLazyload, {
    loading: "images/ohmlaut.svg"
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

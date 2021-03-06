import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import VueMeta from "vue-meta";
import "overlayscrollbars/css/OverlayScrollbars.css";
import OverlayScrollbars from "overlayscrollbars";
import { OverlayScrollbarsPlugin } from "overlayscrollbars-vue";
import "@/styles/normalize.css";
import "@/styles/main.scss";

Vue.config.productionTip = false;

Vue.use(OverlayScrollbarsPlugin);
Vue.use(VueMeta);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

OverlayScrollbars(document.body, {
    nativeScrollbarsOverlaid: {
        initialize: true
    }
});

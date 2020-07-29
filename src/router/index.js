import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => {
            import(/* webpackChunkName: "projects" */ "@/views/Projects.vue");
        }
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: () => {
            import(/* webpackChunkName: "gallery" */ "@/views/Gallery.vue");
        }
    },
    {
        path: "/about",
        name: "About",
        component: () => {
            import(/* webpackChunkName: "about" */ "@/views/About.vue");
        }
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => {
            import(/* webpackChunkName: "contact" */ "@/views/Contact.vue");
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

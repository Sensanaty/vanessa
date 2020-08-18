import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
const Projects = () => import(/* webpackChunkName: "projects" */ "@/views/Project/Projects.vue");
const Gallery = () => import(/* webpackChunkName: "gallery" */ "@/views/Gallery/Gallery.vue");
const About = () => import(/* webpackChunkName: "about" */ "@/views/About.vue");
const Contact = () => import(/* webpackChunkName: "contact" */ "@/views/Contact.vue");
const ProjectPage = () => import(/* webpackChunkName: "project-page" */ "@/views/ProjectPage.vue");
const FourOhFour = () => import(/* webpackChunkName: "404" */ "@/views/FourOhFour.vue");

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
        component: Projects
    },
    {
        path: "/projects/:id",
        props: true,
        name: "ProjectPage",
        component: ProjectPage
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: Gallery
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "*",
        component: FourOhFour
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

export default router;

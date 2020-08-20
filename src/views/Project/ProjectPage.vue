<template>
    <div class="project-page-wrapper" v-if="project">
        <div class="link-wrapper">
            <router-link to="/projects" class="back-link link" exact>
                <span aria-hidden="true">←</span>Back to Projects
            </router-link>

            <router-link :to="`/gallery/${project.id}`" class="gallery-link link" exact>
                See the Pictures <span aria-hidden="true">→</span>
            </router-link>
        </div>

        <div class="project-hero-wrapper">
            <h1 class="hero-title">{{ project.title }}</h1>
            <h2 class="hero-description">{{ project.short_description }}</h2>
        </div>

        <div class="project-detail-wrapper">
            <p class="detail" v-for="(description, index) in project.descriptions" :key="index">{{ description }}</p>
        </div>
    </div>
</template>

<script>
    import ProjectList from "@/assets/lists/projectList.json";

    export default {
        name: "ProjectPage",
        data() {
            return {
                project: null
            };
        },
        methods: {
            setProjectPage(projectDetails) {
                this.project = projectDetails;
            }
        },
        beforeRouteEnter(to, from, next) {
            const currentProject = ProjectList.find(project => project.id === to.params.id);
            next(page => {
                page.setProjectPage(currentProject);
            });
        }
    };
</script>

<style lang="scss">
    .project-page-wrapper {
        margin: 1.5%;
        display: flex;
        flex-flow: column;
    }

    .link-wrapper {
        display: flex;
        justify-content: space-between;
    }

    .link {
        text-decoration: none;
        color: $off-white;
        user-select: none;
        font-size: 1.8rem;
        transition: all 200ms ease-in-out;

        span {
            display: inline-block;
            transition: transform 150ms ease-in-out;
        }

        &:hover {
            color: $highlight-main;
        }

        &.back-link {
            margin: 0 0 15px 15px;

            span {
                margin-right: 5px;
            }

            &:hover {
                span {
                    transform: translateX(-3px);
                }
            }
        }

        &.gallery-link {
            margin: 0 15px 20px 0;

            &:hover {
                span {
                    transform: translateX(3px);
                }
            }
        }
    }

    .project-hero-wrapper {
        display: flex;
        flex-flow: column;

        .hero-title {
            margin: 0 0 10px 0;
            font-size: 9rem;
            display: inline-block;
            color: $highlight-main;
        }

        .hero-description {
            font-size: 4rem;
            margin: 5px 0;
            text-decoration: underline $highlight-main;
        }
    }

    .project-detail-wrapper {
        margin: 25px auto 10px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        text-align: justify;
        width: 80%;

        .detail {
            margin: 15px 0;
            font-size: 1.6rem;
            line-height: 1.15;
            text-align: justify;
            font-family: "Aeonik Medium", sans-serif;
        }
    }
</style>

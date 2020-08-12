<template>
    <div class="project-page" v-if="project">
        <div class="project-header">
            <h1 class="title">{{ project.title }}</h1>
            <h3 class="description">{{ project.description }}</h3>
            <div :class="['expand-button', expand ? 'expanded' : null]" v-on:click="expand = !expand">
                <pre>{{ expand ? "READ LESS" : "READ MORE" }}</pre>
                <ExpandArrow />
            </div>
        </div>

        <transition name="expand-text" mode="in-out">
            <div class="project-body" v-if="expand">
                <div class="tagline-wrapper">
                    <h2 class="tagline" v-for="(tagline, index) in project.texts.taglines" :key="Math.random() + index">
                        {{ tagline }}
                    </h2>
                </div>

                <div class="detail-wrapper">
                    <p class="details" v-for="(detail, index) in project.texts.details" :key="Math.random() + index">
                        {{ detail }}
                    </p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import ProjectList from "@/assets/lists/projectList.json";
    import ExpandArrow from "@/assets/icons/arrow-down.svg";

    export default {
        name: "ProjectPage",
        components: {
            ExpandArrow
        },
        data() {
            return {
                project: null,
                expand: false
            };
        },
        methods: {
            setProjectPage(projectDetails) {
                this.logDetails(projectDetails);
                this.project = projectDetails;
            },
            logDetails(project) {
                console.log("Title:", project.title);
                console.log("Description:", project.description);
                console.log("Alt Text:", project.altText);
                console.log("Image:", project.image);
                console.log("Texts:", project.texts);
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
    .project-page {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
        margin: 2% 0;
    }

    .project-header {
        width: 95%;
        background: $highlight-main;
        color: $color-main;
        padding: 1.5% 2% 0.5% 2%;
        line-height: 1;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;

        .expand-button {
            cursor: pointer;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            margin: 20px 0 5px 0;

            pre {
                padding: 1px 0 0 0;
                margin: 10px 0;
                user-select: none;
                cursor: pointer;
                font-size: 1.4rem;
                transition: all 150ms ease-in-out;
            }

            svg {
                height: 20px;
                transition: all 150ms ease-in-out;
            }

            &:hover {
                pre {
                    color: $off-white;
                }

                svg {
                    fill: $off-white;
                }
            }

            &.expanded {
                svg {
                    transform: rotate(180deg);
                }

                pre {
                    margin: 10px 0 9px 0;
                }
            }
        }

        .title,
        .description {
            color: $color-secondary;
            text-align: center;
        }

        .title {
            font-size: 4rem;
            margin: 0 0 15px 0;
        }

        .description {
            font-size: 2rem;
        }
    }

    .expand-text-enter-active,
    .expand-text-leave-active {
        transition: all 350ms;
        max-height: 600px;
    }
    .expand-text-enter,
    .expand-text-leave-to {
        opacity: 0;
        max-height: 0;
    }

    .project-body {
        background: $color-secondary;
        width: 90%;
        height: 100%;
        padding: 2%;
        display: flex;
        flex-flow: column nowrap;
        line-height: 1.1;

        .tagline-wrapper {
            text-align: center;

            .tagline {
                font-size: 2.3rem;
            }
        }

        .detail-wrapper {
            margin-top: 25px;
            text-align: center;

            .details {
                margin: 10px 0;
                font-size: 1.3rem;
            }
        }
    }
</style>

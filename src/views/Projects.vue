<template>
    <div class="content-wrapper projects-wrapper">
        <ProjectCard
            title="Cool Tablet"
            description="word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word"
            altText="tablet"
            :image="images.tablet"
        />
        <ProjectCard
            title="Cool Table"
            description="This is the really cool tablet and it has a pretty long description wow that's long"
            altText="tablet"
            :image="images.table"
        />
        <ProjectCard
            title="Cool Scissors"
            description="This is the really cool tablet and it has a pretty long description wow that's long"
            altText="tablet"
            :image="images.scissors"
        />
    </div>
</template>

<script>
    import ProjectCard from "@/components/ProjectCard";

    export default {
        name: "Projects",
        components: {
            ProjectCard
        },
        data() {
            return {
                images: {
                    tablet: require("@/assets/images/projects/tablet.webp"),
                    table: require("@/assets/images/projects/table.webp"),
                    scissors: require("@/assets/images/projects/scissors.webp")
                }
            };
        }
    };
</script>

<style lang="scss">
    .projects-wrapper {
        display: flex;
        flex-flow: wrap;
        flex: 1 1 auto;
        justify-content: space-around;
        align-items: center;
    }
</style>

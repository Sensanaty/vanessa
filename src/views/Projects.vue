<template>
    <div class="content-wrapper projects-wrapper">
        <ProjectCard
            v-for="project in ProjectList"
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :altText="project.altText"
            :imagePaths="project.image"
            :url="project.src"
        />
    </div>
</template>

<script>
    import ProjectCard from "@/components/ProjectCard";
    import ProjectList from "@/assets/lists/projectList.json";

    export default {
        name: "Projects",
        components: {
            ProjectCard
        },
        data() {
            return {
                ProjectList
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

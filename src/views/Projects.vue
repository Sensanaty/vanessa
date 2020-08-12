<template>
    <div class="content-wrapper projects-wrapper">
        <ProjectCard
            v-for="(project, index) in ProjectList"
            :key="index"
            :title="project.title"
            :description="project.description"
            :altText="project.altText"
            :imagePaths="project.image"
            :url="project.id"
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
        flex-flow: column wrap;
        flex: 1;
        justify-content: space-around;
        align-items: center;
    }
</style>

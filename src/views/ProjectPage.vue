<template>
    <div>
        <h1>Project Page</h1>
        <p>{{ title }}</p>
    </div>
</template>

<script>
    import ProjectList from "@/assets/lists/projectList.json";

    export default {
        name: "ProjectPage",
        data() {
            return {
                title: null
            };
        },
        methods: {
            setProjectPage(projectDetails) {
                this.title = projectDetails.title;
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

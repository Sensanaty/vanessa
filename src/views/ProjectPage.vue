<template>
    <div>
        <h1>Project Page</h1>
        <p>{{ testString }}</p>
    </div>
</template>

<script>
    export default {
        name: "ProjectPage",
        props: {
            testString: String
        }
    };
</script>

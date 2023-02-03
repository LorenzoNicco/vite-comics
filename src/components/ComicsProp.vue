<script>
    export default {
        name: "ComicsProp",
        props: {
            src: String,
            title: String
        }
    }
</script>

<template>
    <div>
        <img :src="src">

        <h5>{{ title }}</h5>
    </div>
</template>

<style lang="scss" scoped>
    img {
        width: 100%;
    }

    h5 {
        color: white;
        width: 100%;
        margin-top: 0.5rem;
    }
</style>
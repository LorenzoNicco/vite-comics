<script>
export default {
    name: "AppHeader",
    data () {
        return {
            headerNav: [
                {
                    link: "#",
                    label: "CHARACTERS",
                    active: false
                },
                {
                    link: "#",
                    label: "COMICS",
                    active: false
                },
                {
                    link: "#",
                    label: "MOVIES",
                    active: false
                },
                {
                    link: "#",
                    label: "TV",
                    active: false
                },
                {
                    link: "#",
                    label: "GAMES",
                    active: false
                },
                {
                    link: "#",
                    label: "COLLECTIBLES",
                    active: false
                },
                {
                    link: "#",
                    label: "VIDEOS",
                    active: false
                },
                {
                    link: "#",
                    label: "FANS",
                    active: false
                },
                {
                    link: "#",
                    label: "NEWS",
                    active: false
                },
                {
                    link: "#",
                    label: "SHOP",
                    active: false
                },
            ]
        }
    }
}
</script>

<template>
  <header>
        <div class="container">
            <div class="logo-container">
                <img src="../assets/img/vue-dc-comics-1/img/dc-logo.png" alt="">
            </div>

            <nav>
                <ul>
                    <li v-for="item in headerNav">
                        <a :href="item.link">{{ item.label }}</a>
                    </li>
                </ul>
            </nav>
        </div>

  </header>
</template>

<style lang="scss" scoped>
    @use "../styles/partials/headerStyle.scss";
</style>
<script>
export default {
    name: "AppHeader"
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
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                </ul>
            </nav>
        </div>

  </header>
</template>

<style scoped>
    header {
        background-color: white;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .logo-container {
        height: 4rem;
        vertical-align: middle;
    }

    img {
        height: 100%;
    }

    nav {
        vertical-align: middle;
        height: 100%;
    }

    ul {
        list-style: none;
        display: flex;
        height: 100%;
        margin: 0;
    }

    li {
        padding: 2rem 1rem;
    }

    a {
        color: white;
        text-decoration: none;
    }
</style>
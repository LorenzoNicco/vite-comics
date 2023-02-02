<script>
    export default {
    name: "AppFooter"
}
</script>

<template>
    <section class="blue-section">
        <div class="container-small">
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
        </div>
    </section>
    <footer>
        <div class="top-footer">
            <div class="container">
                <div class="menu-side">
                    <div>
                        <nav>
                            <h3>TITOLO</h3>

                            <ul>
                                <li>
                                    <a href="#">LINK</a>
                                </li>
                                <li>
                                    <a href="#">LINK</a>
                                </li>
                                <li>
                                    <a href="#">LINK</a>
                                </li>
                                <li>
                                    <a href="#">LINK</a>
                                </li>
                                <li>
                                    <a href="#">LINK</a>
                                </li>
                                <li>
                                    <a href="#">LINK</a>
                                </li>
                                <li>
                                    <a href="#">LINK</a>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <h3>TITOLO</h3>

                            <ul>
                                <li>
                                    <a href="#">LINK</a>
                                </li>
                                <li>
                                    <a href="#">LINK</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <nav>
                        <h3>TITOLO</h3>

                        <ul>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                        </ul>
                    </nav>

                    <nav>
                        <h3>TITOLO</h3>

                        <ul>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                            <li>
                                <a href="#">LINK</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="logo-side">
                    
                </div>
            </div>
        </div>

        <div class="bottom-footer">

        </div>

        <div class="end-footer" -->></div>
    </footer>
</template>

<style scoped>
    .blue-section {
        background-color: #0282f9;
    }

    .container-small {
        width: 1000px;
        height: 6rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .top-footer {
        background-image: url("../assets/img/vue-dc-comics-1/img/footer-bg.jpg");
        height: calc(100vh - 22rem);
    }

    .bottom-footer {
        background-color: #303030;
        height: 5rem;
    }

    .end-footer {
        background-color: #222222;
        height: 1rem;
    }

    .menu-side {
        display: flex;
    }

    h3 {
        color: white;
    }

    a {
        color: white;
        text-decoration: none;
    }
</style>
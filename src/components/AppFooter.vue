<script>
    export default {
    name: "AppFooter",
    data () {
        return {
            dcComicsList: ["Characters", 
                "Comics", 
                "Movies", 
                "Tv", 
                "Games", 
                "Videos", 
                "News"
            ],
            shopList: ["Shop DC", "Shop DC Collectibles"],
            dcList: ["Terms of Use", 
                "Privacy policy (new)", 
                "Ad Choices", 
                "Advertising", 
                "Jobs", 
                "Subscriptions", 
                "Talent Workshops", 
                "CPSC Certificates", 
                "Ratings", 
                "Shop Help", 
                "Contact Us"
            ],
            sitesList: ["DC", 
                "Mad Magazine", 
                "DC Kids", 
                "DC Universe", 
                "DC Power Visa"
            ]
        }
    }
}
</script>

<template>
    <section class="blue-section">
        <div class="container-small">
            <div class="icons">
                <img src="../assets/img/vue-dc-comics-1/img/buy-comics-digital-comics.png" alt="">

                <span>DIGITAL COMICS</span>
            </div>

            <div class="icons">
                <img src="../assets/img/vue-dc-comics-1/img/buy-comics-merchandise.png" alt="">

                <span>DC MERCHANDISE</span>
            </div>

            <div class="icons">
                <img src="../assets/img/vue-dc-comics-1/img/buy-comics-subscriptions.png" alt="">

                <span>SUBSCRIPTION</span>
            </div>
            
            <div class="icons">
                <img src="../assets/img/vue-dc-comics-1/img/buy-comics-shop-locator.png" alt="">

                <span>COMIC SHOP LOCATOR</span>
            </div>

            <div class="icons">
                <img src="../assets/img/vue-dc-comics-1/img/buy-dc-power-visa.svg" alt="">

                <span>DC POWER VISA</span>
            </div>
        </div>
    </section>

    <footer>
        <div class="top-footer">
            <div class="container">
                <div class="menu-side">
                    <div>
                        <nav>
                            <h3>DC COMICS</h3>

                            <ul>
                                <li v-for="item in dcComicsList">
                                    <a href="#">{{ item }}</a>
                                </li>

                            </ul>
                        </nav>
                        <nav class="nav-2">
                            <h3>SHOP</h3>

                            <ul>
                                <li v-for="item in shopList">
                                    <a href="#">{{ item }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <nav class="nav-3">
                        <h3>DC</h3>

                        <ul>
                            <li v-for="item in dcList">
                                <a href="#">{{ item }}</a>
                            </li>
                        </ul>
                    </nav>

                    <nav class="nav-4">
                        <h3>SITES</h3>

                        <ul>
                            <li v-for="item in sitesList">
                                <a href="#">{{ item }}</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="logo-side">
                    <img src="../assets/img/vue-dc-comics-1/img/dc-logo-bg.png" alt="">
                </div>
            </div>
        </div>

        <div class="bottom-footer">
            <div class="container">
                <div>
                    <button class="sign-up-btn">SIGN-UP NOW!</button>
                </div>

                <nav>
                    <button class="follow-up-btn">
                        FOLLOW US
                    </button>

                    <button class="icon-btn">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    </button>
                    <button class="icon-btn">
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </button>
                    <button class="icon-btn">
                        <font-awesome-icon icon="fa-brands fa-youtube" />
                    </button>
                    <button class="icon-btn">
                        <font-awesome-icon icon="fa-brands fa-pinterest-p" />
                    </button>
                    <button class="icon-btn">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                    </button>
                </nav>
            </div>
        </div>

        <div class="end-footer"></div>
    </footer>
</template>

<style lang="scss" scoped>
    @use "../styles/partials/footerStyle.scss";
</style>
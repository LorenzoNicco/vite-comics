import { createApp } from 'vue'
import App from './App.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faLocationDot,
    faUserSecret,
} from '@fortawesome/free-solid-svg-icons';

import { 
    faFacebookF,
    faTwitter,
    faYoutube,
    faPinterestP,
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
    faUserSecret,
    faFacebookF,
    faTwitter,
    faYoutube,
    faPinterestP,
    faLocationDot
)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

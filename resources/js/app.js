require('./bootstrap');
import router from './routes';
import VueRouter from 'vue-router';
import Index from "./index";
// Todo esto es boiler plate para setupear el router.
window.Vue = require('vue');
Vue.component()

Vue.use(VueRouter); 
const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index,
    }
});

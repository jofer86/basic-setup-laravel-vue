// Se importa el router, se importan los componentes que van a a estar disponibles.
import VueRouter from 'vue-router';
import Bookables from './bookables/Bookables';
import Bookable from './bookable/Bookable';

const routes = [
    {
        path: '/',
        component: Bookables,
        name: 'bookables',
    },
    {
        path: '/bookable/:id',
        component: Bookable,
        name: 'bookable',
    },

];

// se exporta el valor en modo history para tener rutas limpias en el explorador.
const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue'
import ContactPage from '../contact/ContactPage.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    }]
});
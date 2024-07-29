import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import GaleriePage from './components/GaleriePage.vue';
import LeistungenPage from './components/LeistungenPage.vue';
import ImpressumPage from './components/ImpressumPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/galerie', component: GaleriePage },
    { path: '/leistungen', component: LeistungenPage },
    { path: '/impressum', component: ImpressumPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
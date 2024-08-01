import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import GaleriePage from './components/GaleriePage.vue';
import LeistungenPage from './components/LeistungenPage.vue';
import ImpressumPage from './components/ImpressumPage.vue';
import UnternehmenPage from './components/UnternehmenPage.vue';
import PrivacyPolicy from "@/components/DSGVO/PrivacyPolicy.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/galerie', component: GaleriePage },
    { path: '/leistungen', component: LeistungenPage },
    { path: '/impressum', component: ImpressumPage },
    { path: '/unternehmen', component: UnternehmenPage},
    { path: '/:notFound(.*)', redirect: '/' },
    { path: '/datenschutz', component: PrivacyPolicy },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
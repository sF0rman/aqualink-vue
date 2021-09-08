import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/products',
        component: ProductPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/contact',
        component: ContactPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
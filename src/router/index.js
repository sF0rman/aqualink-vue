import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import ProductDetails from '@/pages/ProductDetails.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import AdminPage from '@/pages/AdminPage.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/products',
        component: ProductPage,
    },
    {
        path: '/:url',
        component: ProductDetails
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/contact',
        component: ContactPage
    },
    {
        path: '/admin',
        component: AdminPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
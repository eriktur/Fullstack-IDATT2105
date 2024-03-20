import { createRouter, createWebHashHistory } from 'vue-router'
import Calculator from '../components/Calculator.vue'
import ContactForm from '../components/ContactForm.vue'
import Review from "@/components/Review.vue";
import Login from "@/components/Login.vue";

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/calculator',
        name: 'calculator',
        component: Calculator
    },
    {
        path: '/contactForm',
        name: 'contactForm',
        component: ContactForm
    },
    {
        path: '/Review',
        name: 'Review',
        component: Review
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

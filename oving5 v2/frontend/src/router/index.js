import { createRouter, createWebHashHistory } from 'vue-router'
import Calculator from '../components/Calculator.vue'
import ContactForm from '../components/ContactForm.vue'
import Review from "@/components/Review.vue";
import Login from "@/components/Login.vue";
import createUser from "@/components/createUser.vue";

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
        path: '/createUser',
        name: 'createUser',
        component: createUser,
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

import { createRouter, createWebHashHistory } from 'vue-router'
import Calculator from '../components/Calculator.vue'
import ContactForm from '../components/ContactForm.vue'
import Review from "@/components/Review.vue";

const routes = [
    {
        path: '/',
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
        name: 'Rewiev',
        component: Review
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
import {createRouter,createWebHistory} from 'vue-router'
import LoginR from '@/components/LoginR.vue'

const routes =[
    {
        name:'login',
        path:'/login',
        component:LoginR
    }
 
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router
import {createRouter, createWebHashHistory} from "vue-router";

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            component: () => import('../view/HomeView.vue')
        },
        {
            path:'/loading',
            component: () => import('../components/Loading.vue')
        }
    ]
});
import {createRouter, createWebHashHistory} from "vue-router";

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: () => import('../view/HomeView.vue')
        },
        {
            path:"/Register",
            name:'Register',
            component:() => import('../view/RegisterView.vue'),
        }

    ]
});


import {createRouter, createWebHashHistory} from "vue-router";

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component: () => import('../view/HomeView.vue'),
        },
        {
            path:"/Register",
            name:'Register',
            component:() => import('../view/RegisterView.vue'),
        },
        {
            path:"/Loading",
            name:'Loading',
            component:() => import('../view/LoadingView.vue'),
        },

    ]
});


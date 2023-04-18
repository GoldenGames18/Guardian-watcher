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
            path:"/Offline",
            name:'Offline',
            component:() => import('../view/NoNetworkView.vue'),
        }

    ]
});


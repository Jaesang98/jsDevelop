const codeRoutes = [
    {
        path: '/VUE_1',
        name: 'VUE_1',
        props: true,
        component: () => import(/* webpackChunkName: "CODE" */ '@/views/CODEPAGE/FRAMEWORK/VUE/VUE_1.vue')
    },
    {
        path: '/VUE_2',
        name: 'VUE_2',
        props: true,
        component: () => import(/* webpackChunkName: "CODE" */ '@/views/CODEPAGE/FRAMEWORK/VUE/VUE_2.vue')
    },
    {
        path: '/VUE_3',
        name: 'VUE_3',
        props: true,
        component: () => import(/* webpackChunkName: "CODE" */ '@/views/CODEPAGE/FRAMEWORK/VUE/VUE_3.vue')
    },
];
export default codeRoutes;

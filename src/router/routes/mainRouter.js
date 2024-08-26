const mainRoutes = [
    {
        path: '/MAIN_1000',
        name: 'MAIN_1000',
        props: true,
        component: () => import(/* webpackChunkName: "MAIN" */ '@/views/MAIN/MAIN_1000.vue')
    },
];
export default mainRoutes;

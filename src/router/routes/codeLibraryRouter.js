const codeRoutes = [
    {
        path: '/MOMENT_1',
        name: 'MOMENT_1',
        props: true,
        component: () => import(/* webpackChunkName: "CODE" */ '@/views/CODEPAGE/LIBRARY/MOMENT/MOMENT_1.vue')
    },
    {
        path: '/MOMENT_2',
        name: 'MOMENT_2',
        props: true,
        component: () => import(/* webpackChunkName: "CODE" */ '@/views/CODEPAGE/LIBRARY/MOMENT/MOMENT_2.vue')
    },
    {
        path: '/MOMENT_3',
        name: 'MOMENT_3',
        props: true,
        component: () => import(/* webpackChunkName: "CODE" */ '@/views/CODEPAGE/LIBRARY/MOMENT/MOMENT_3.vue')
    },
];
export default codeRoutes;

const codeRoutes = [
    {
        path: '/CODE_1000',
        name: 'CODE_1000',
        props: true,
        component: () => import(/* webpackChunkName: "CODE" */ '@/views/CODE/CODE_1000.vue')
    },
];
export default codeRoutes;

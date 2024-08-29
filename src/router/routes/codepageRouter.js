const codepageRouter = [
    {
        path: '/checkbox1',
        name: 'checkbox1',
        props: true,
        component: () => import(/* webpackChunkName: "CODE" */ '@/views/CODEPAGE/checkbox1.vue')
    },
];
export default codepageRouter;

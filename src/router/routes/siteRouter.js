const siteRoutes = [
    {
        path: '/SITE_1000',
        name: 'SITE_1000',
        props: true,
        component: () => import(/* webpackChunkName: "SITE" */ '@/views/SITE/SITE_1000.vue')
    },
];
export default siteRoutes;

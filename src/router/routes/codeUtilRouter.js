const codepageRouter = [
    // SORT(정렬)
    {
        path: '/SORT_1',
        name: 'SORT_1',
        props: true,
        component: () => import(/* webpackChunkName: "CODE" */ '@/views/CODEPAGE/UTILITY/SORT/SORT_1.vue')
    },
    {
        path: '/SORT_2',
        name: 'SORT_2',
        props: true,
        component: () => import(/* webpackChunkName: "CODE" */ '@/views/CODEPAGE/UTILITY/SORT/SORT_2.vue')
    },
    
    //SCROLL
    {
        path: '/SCROLL_1',
        name: 'SCROLL_1',
        props: true,
        component: () => import(/* webpackChunkName: "CODE" */ '@/views/CODEPAGE/UTILITY/SCROLL/SCROLL_1.vue')
    },
];
export default codepageRouter;

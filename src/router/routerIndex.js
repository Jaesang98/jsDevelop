import { createWebHashHistory, createRouter } from "vue-router";
// import { createWebHistory, createRouter } from "vue-router";

//라우터들 임포트
import mainRouter from '@/router/routes/mainRouter';
import codeRouter from '@/router/routes/codeRouter';
import siteRouter from '@/router/routes/siteRouter';
import codeUtilRouter from "@/router/routes/codeUtilRouter";
import codeLibraryRouter from "@/router/routes/codeLibraryRouter"
import codeFrameworkRouter from "@/router/routes/codeFrameworkRouter"

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: [
        // Default Path 설정
        {
            path: '/',
            redirect: '/MAIN_1000',
        },

        // Sample
        ...mainRouter,
        ...codeRouter,
        ...siteRouter,
        ...codeUtilRouter,
        ...codeLibraryRouter,
        ...codeFrameworkRouter,


        // 404 Path 처리
        {
            path: '/:pathMatch(.*)*',
            redirect: '/', // 선언되지 않은 Path릂 지정된 경로로 리다이렉트
        },
    ]
});

export default router;

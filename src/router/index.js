// 이 파일은 URL과 페이지 컴포넌트를 1:1로 연결해 주며, Header의 menu.url이 여기 path와 일치해야 화면이 표시된다.
import { createRouter, createWebHistory } from 'vue-router';

// 각 URL에 연결될 페이지 컴포넌트 목록
import HomePage from '@/pages/Home.vue';
import ElectronicsPage from '@/pages/Home_appliances.vue';
import JeweleryPage from '@/pages/Jewel.vue';
import MensClothingPage from '@/pages/M_clothes.vue';
import WomensClothingPage from '@/pages/W_clothes.vue';

// 라우터 인스턴스 생성
const router = createRouter({
  // createWebHistory를 사용하면 URL에 # 없이 일반 웹사이트처럼 보임
  history: createWebHistory(),
  // routes 배열은 path(주소)와 component(화면)를 연결하는 핵심 매핑
  routes: [
    // 홈 화면
    { path: '/', component: HomePage },
    // 가전 화면
    { path: '/electronics', component: ElectronicsPage },
    // 주얼리 화면
    { path: '/jewelery', component: JeweleryPage },
    // 남성의류 화면
    { path: '/mensclothing', component: MensClothingPage },
    // 여성의류 화면
    { path: '/womensclothing', component: WomensClothingPage },
  ],
});

// main.js에서 app.use(router)로 등록하기 위해 기본 export
export default router;

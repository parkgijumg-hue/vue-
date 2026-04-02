// vue-router에서 라우터 생성 함수와 히스토리 모드 사용
import { createRouter, createWebHistory } from 'vue-router';

// 각 URL에 연결될 페이지 컴포넌트들
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import Memberinfo from '@/pages/Memberinfo.vue';

// 라우터 인스턴스 생성
const router = createRouter({
  // createWebHistory(): 일반적인 웹사이트처럼 URL이 깔끔하게 보이도록 설정
  // (예: /about)
  history: createWebHistory(),
  // routes 배열: path(주소) ↔ component(화면) 연결
  routes: [
    // 홈 화면
    { path: '/', component: Home },
    // 소개 화면
    { path: '/about', component: About },
    // 멤버 화면
    { path: '/members', component: Members },
    // 영상 화면
    { path: '/videos', component: Videos },
    { path: '/members/:id', component: Memberinfo },
  ],
});

// 다른 파일에서 사용할 수 있도록 내보내기
export default router;

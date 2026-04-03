// Vue Router 라이브러리에서 필요한 함수들을 가져옴
// createRouter : Vue 라우터 인스턴스를 생성하는 함수
// createWebHistory : HTML5 History API 를 사용하여 URL 경로를 관리하는 함수

import { createRouter, createWebHistory } from 'vue-router';

//페이지 컴포넌트 가져오기
// @ : src 폴더를 의미하는 별칭(alias)
// -> vite.config.js 에 작성되어있음
import Members from '@/pages/Member.vue';
import Memberinfo from '@/pages/Membersinfo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes : URL 주소와 컴포넌트를 연결해 놓은 설정 목록
  routes: [
    {
      path: '/members', //해당 URL 일 때
      component: Members, // 보여줄 컴포넌트 지정
      name: 'members', // 라우터를 이름으로 부르기 위한 옵션
    },

    //동적 라우트 패턴
    { path: '/members/:id', component: Memberinfo, name: 'memberInfo' },
  ],
});

export default router;

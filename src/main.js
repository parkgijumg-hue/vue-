import { createApp } from 'vue';
// 부트스트랩 기본 CSS 불러오기
import 'bootstrap/dist/css/bootstrap.css';
// 최상위 App 컴포넌트
import App from './App.vue';
// 라우터 설정(주소 ↔ 컴포넌트 매핑)

// router 임포트
import router from './router';

// Vue 앱 인스턴스 생성
const app = createApp(App);

// 라우터 플러그인을 앱에 등록
// 이 설정이 있어야 <router-link>와 <router-view>가 동작함
// 라우터 인스턴스를 애플리케이션에 등록
app.use(router);

// index.html의 #app에 Vue 앱을 마운트(화면에 렌더링 시작)
app.mount('#app');

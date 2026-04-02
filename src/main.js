// 이 파일은 앱의 진입점이며, 전역 CSS와 라우터를 등록한 뒤 App.vue를 #app에 마운트한다.
import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue';
import router from './router';

// App.vue로부터 Vue 인스턴스를 생성
const app = createApp(App);

// 라우터를 등록해야 Header의 router-link와 App의 router-view가 동작함
app.use(router);

// index.html의 #app 요소에 실제 화면을 렌더링
app.mount('#app');

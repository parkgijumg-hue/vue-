<template>
  <!-- /about 경로로 들어오면 보여줄 화면 -->
  <div class="card card-body">
    <h2>About</h2>
    <!-- 현재 요청된 전체 경로를 화면에 출력 -->
    <p>요청 경로 : {{ $route.fullPath }}</p>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

const useroute = useRoute();
console.log(useroute);
// export default {
//   // 컴포넌트 이름(개발자도구에서 표시)

//   name: 'About',
//   // 컴포넌트가 생성될 때 한 번 실행되는 훅

//   //setup()함수 방식
//   //   setup() {
//   //     const useroute = useRoute();
//   //     console.log(useroute);
//   //   },

//   //option api 방식
//   //   created() {
//   //     // 현재 라우트 객체를 콘솔에 출력
//   //     console.log(this.$route);
//   //   },
// };
</script>

<!-- 이 컴포넌트는 앱의 최상위 레이아웃으로, Header는 항상 표시하고 router-view가 페이지 화면을 바꿔 끼운다. -->
<template>
  <!-- Bootstrap container 안에 공통 헤더와 라우터 화면을 배치 -->
  <div class="container">
    <!-- 헤더는 모든 페이지에서 공통으로 표시 -->
    <Header />
    <!-- router-view는 현재 URL에 맞는 페이지 컴포넌트를 렌더링 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
export default {
  // 개발자도구에서 보이는 컴포넌트 이름
  name: 'App',
  // 템플릿에서 사용할 컴포넌트를 등록
  components: { Header },
};
</script>
<style>
/* 공통 컨테이너 정렬을 위한 기본 스타일 */
.container {
  text-align: center;
}

/* 구버전 Font Awesome CDN. 현재는 main.js에서 로컬 CSS를 불러와 사용 중 */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
.fa {
  padding: 5px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
.fa-facebook {
  background: #3b5998;
  color: white;
}
.fa-youtube {
  background: #bb0000;
  color: white;
}
.fa-instagram {
  background: #125688;
  color: white;
}
</style>

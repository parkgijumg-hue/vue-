<template>
  <!--
    App 컴포넌트
    - 전체 앱의 최상위 레이아웃 역할
    - Header를 항상 표시
    - <router-view>가 라우터가 선택한 페이지를 끼워 넣는 자리
  -->
  <div class="container">
    <!-- 상단 내비게이션(항상 보이는 영역) -->
    <Header />
    <!-- 라우터가 현재 URL에 맞는 페이지 컴포넌트를 렌더링 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
export default {
  // 이 컴포넌트의 이름(디버깅/개발자도구에서 표시)
  name: 'App',
  // 템플릿에서 사용할 하위 컴포넌트 등록
  components: { Header },
};
</script>
<style>
/* 컨테이너 기본 레이아웃 스타일 */
.container {
  text-align: center;
  margin-top: 10px;
}

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

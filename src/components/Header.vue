<!-- 이 컴포넌트는 config의 메뉴/타이틀 데이터를 읽어 상단 히어로와 네비게이션을 만들고, 메뉴 클릭 시 라우터 경로로 이동하게 한다. -->
<template>
  <!-- 히어로 영역: 사이트 제목/부제목을 config에서 가져와 보여줌 -->
  <div class="hero">
    <!-- 텍스트는 배경 이미지 위에서 가독성이 유지되도록 상단 좌측에 배치 -->
    <div class="hero-content">
      <h1>{{ config.title }}</h1>
      <p>{{ config.subtitle }}</p>
    </div>
  </div>

  <!-- 네비게이션 바: Bootstrap 스타일을 사용하고, 모바일에서는 토글로 메뉴를 접고/펼침 -->
  <nav class="navbar navbar-expand-md bg-primary navbar-dark">
    <!-- 모바일에서 메뉴를 열고 닫는 버튼. navClass와 함께 동작하도록 nav 내부에 둔다. -->
    <button class="navbar-toggler" type="button" @click="changeIsNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- navClass 값에 따라 collapse / show 클래스가 바뀌어 메뉴 표시 여부가 결정됨 -->
    <div :class="navClass">
      <!-- config.menus 배열을 순회해서 메뉴를 렌더링 -->
      <ul class="navbar-nav ms-0">
        <li class="nav-item" v-for="menu in config.menus" :key="menu.url">
          <!-- router-link가 실제 페이지 이동을 담당하며, url은 router/index.js의 path와 반드시 일치해야 함 -->
          <router-link
            class="nav-link"
            :class="{ 'fw-bold': menu.isBrand }"
            :to="menu.url"
          >
            <!-- 아이콘은 menu.icon의 클래스 문자열을 그대로 사용하고, me-1로 텍스트와 간격을 맞춤 -->
            <i :class="menu.icon + ' me-1'"></i>{{ menu.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import config from '@/config';
import { reactive, computed } from 'vue';
export default {
  setup() {
    // 메뉴가 펼쳐져 있는지 여부를 저장하는 상태값
    const state = reactive({ isNavShow: false });

    // Bootstrap의 collapse 동작을 위해 class 문자열을 동적으로 계산
    const navClass = computed(() =>
      state.isNavShow
        ? 'collapse navbar-collapse show'
        : 'collapse navbar-collapse',
    );

    // 햄버거 버튼 클릭 시 메뉴 열림/닫힘 토글
    const changeIsNavShow = () => {
      state.isNavShow = !state.isNavShow;
    };

    // 템플릿에서 사용할 값과 함수들을 반환
    return { state, changeIsNavShow, navClass, config };
  },
};
</script>
<style>
/* 히어로 배경: 이미지가 영역을 가득 채우도록 cover를 사용 */
.hero {
  background-image: url('@/assets/forest.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 160px;
  position: relative;
  color: black;
}

/* 히어로 텍스트 영역: 이미지 위에서 일정한 여백을 주어 배치 */
.hero-content {
  padding: 20px 24px;
}

/* 타이틀은 여백을 줄여 이미지 위에서 정돈된 인상을 유지 */
.hero h1 {
  margin: 0 0 6px 0;
  font-size: 28px;
}

/* 서브 타이틀도 기본 마진을 제거해 타이틀과 간격을 직접 제어 */
.hero p {
  margin: 0;
  font-size: 14px;
}
</style>

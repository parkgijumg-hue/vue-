<template>
  <!--
    Header 컴포넌트
    - 상단 내비게이션 바(부트스트랩 스타일)를 렌더링
    - 모바일에서 버튼을 눌러 메뉴를 접고/펼침
    - 각 메뉴는 Vue Router의 <router-link>로 라우팅 이동
  -->
  <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
    <!-- 브랜드 영역(로고/텍스트) -->
    <span class="navbar-brand">이날치 (LeeNalChi)</span>

    <!-- 모바일 화면에서 햄버거 버튼 클릭 시 메뉴 토글 -->
    <button class="navbar-toggler" type="button" @click="changeIsNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- navClass 값에 따라 collapse / show 클래스가 바뀜 -->
    <div :class="navClass">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- 라우터 링크: 클릭 시 URL을 바꾸고 해당 라우트 컴포넌트를 표시 -->
          <router-link class="nav-link" to="/"> 홈</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">소개</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/members"
            >멤버</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/videos"
            >영상</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { reactive, computed } from 'vue';
export default {
  setup() {
    // 상태: 메뉴가 펼쳐져 있는지 여부
    const state = reactive({ isNavShow: false });

    // 상태에 따라 class 문자열을 계산
    // - true: collapse + show => 메뉴가 보임
    // - false: collapse => 메뉴가 숨겨짐
    const navClass = computed(() =>
      state.isNavShow
        ? 'collapse navbar-collapse show'
        : 'collapse navbar-collapse',
    );

    // 햄버거 버튼 클릭 시 상태 토글
    const changeIsNavShow = () => {
      state.isNavShow = !state.isNavShow;
    };

    // 템플릿에서 사용할 값/함수 반환
    return { state, changeIsNavShow, navClass };
  },
};
</script>

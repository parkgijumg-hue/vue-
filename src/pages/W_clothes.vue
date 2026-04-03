<!-- 이 컴포넌트는 '/womensclothing' 경로에서 라우터가 렌더링하는 여성의류 페이지다. -->
<template>
  <!-- 페이지 본문은 카드 형태로 표시하고 아이콘은 Font Awesome 클래스 사용 -->
  <div class="card card-body">
    <h2><i class="fa-solid fa-person-dress me-1"></i> 여성의류</h2>
  </div>
</template>
<script>
export default {
  // 컴포넌트 이름은 디버깅용으로 사용됨
  name: 'WomensClothing',
};
</script>

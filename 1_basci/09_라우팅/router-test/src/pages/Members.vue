<template>
  <div>
    <!-- 멤버 목록 페이지 제목 -->
    <h2 class="m-4">이날치 멤버</h2>
    <div class="container">
      <div class="row">
        <!-- members 배열을 반복해서 카드들을 생성 -->
        <div
          v-for="m in members"
          :key="m.id"
          class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
        >
          <!-- 멤버 카드 클릭 시 /members/{id} 로 이동 -->
          <!-- 이 주소를 라우터가 Memberinfo.vue로 연결해줌 -->
          <router-link :to="'/members/' + m.id">
            <img
              class="img-thumbnail"
              style="width: 90px; height: 110px"
              :src="m.photo"
              :title="m.name"
            /><br />
            <h6 class="display-7">{{ m.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 멤버 목록 데이터(배열)를 불러옴
// Members.vue: 이 배열로 "목록 화면"을 만든다
// Memberinfo.vue: 여기서 만든 링크의 id를 받아 "상세 화면"을 만든다
import members from '@/members.json';
export default {
  // 컴포넌트 이름(개발자도구에서 표시)
  name: 'Members',
  setup() {
    // 템플릿에서 members를 사용하려면 setup에서 반환해야 함
    // 반환된 값만 템플릿에서 접근 가능
    return { members };
  },
};
</script>

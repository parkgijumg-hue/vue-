<template>
  <!-- 멤버 상세 페이지: 멤버 한 명의 정보를 표시 -->
  <!-- mt-5: 부트스트랩 여백 유틸리티(위쪽 마진 크게) -->
  <div class="mt-5">
    <!-- 사진 -->
    <!-- class="img": 커스텀/부트스트랩 이미지 스타일용 클래스 -->
    <img :src="member.photo" class="img" />
    <!-- 이름과 역할 -->
    <!-- mt-2: 제목 위쪽 여백을 조금 줌 -->
    <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>
    <!-- 설명 -->
    <p>{{ member.desc }}</p>
    <!-- 인스타그램 링크가 있을 때만 표시 -->
    <!--
      Font Awesome 아이콘 클래스 사용
      - fa: 기본 아이콘 스타일
      - fa-instagramm-1: 커스텀 클래스(스타일을 따로 정의했을 가능성)
    -->
    <a
      v-if="member.insta && member.insta !== ''"
      class="fa fa-instagramm-1"
      :href="member.insta"
    ></a>
    <!-- 페이스북 링크가 있을 때만 표시 -->
    <!-- 페이스북 아이콘 링크 -->
    <a
      v-if="member.facebook && member.facebook !== ''"
      class="fa fa-facebookm-1"
      :href="member.facebook"
    ></a>
    <!-- 유튜브 링크가 있을 때만 표시 -->
    <!-- 유튜브 아이콘 링크 -->
    <a
      v-if="member.youtube && member.youtube !== ''"
      class="fa fa-youtubem-1"
      :href="member.youtube"
    ></a>
    <br /><br />
    <!-- 멤버 목록 페이지로 돌아가는 라우터 링크 -->
    <router-link to="/members">멤버 목록으로</router-link>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
import members from '@/members.json';
export default {
  name: 'MemberInfo',
  setup() {
    const currentRoute = useRoute();
    // URL의 params.id는 문자열이므로 숫자로 변환
    const id = parseInt(currentRoute.params.id, 10);
    // members 배열에서 id가 일치하는 멤버 찾기
    const member = members.find((m) => m.id === id);
    return { member };
  },
};
</script>

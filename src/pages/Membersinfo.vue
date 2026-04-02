<!-- 이 컴포넌트는 '/members/:id' 경로에서 현재 URL의 id를 읽어 해당 멤버 정보를 찾아 보여주는 상세 페이지다. -->
<template>
  <div class="mt-5">
    <div>
      경로 패턴 : /members/:id <br />
      요청 경로 : {{ currentRoute.fullPath }} <br />
      id 값 : {{ currentRoute.params.id }} <br />
    </div>

    <div className="mt-5">
      <img :src="member.photo" class="img" />
      <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>
      <p>{{ member.desc }}</p>
      <a class="fa fa-instagram m-1"></a>
      <a class="fa fa-facebook m-1"></a>
      <a class="fa fa-youtube m-1"></a>
      <br /><br />
      <!-- <div><router-link to="/members">멤버 목록으로</router-link></div> -->
      <div>
        <router-link :to="{ name: 'members' }">멤버 목록으로</router-link>
      </div>
    </div>

    <!-- <img :src="member.photo" class="img" />
    <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>
    <p>{{ member.desc }}</p>
    <a
      v-if="member.insta && member.insta !== ''"
      class="fa fa-instagramm-1"
      :href="member.insta"
    ></a>

    <a
      v-if="member.facebook && member.facebook !== ''"
      class="fa fa-facebookm-1"
      :href="member.facebook"
    ></a>

    <a
      v-if="member.youtube && member.youtube !== ''"
      class="fa fa-youtubem-1"
      :href="member.youtube"
    ></a>
    <br /><br />
    <router-link to="/members">멤버 목록으로</router-link> -->
  </div>
</template>

<script setup>
// useRoute는 "현재 주소 정보 읽기"용이다. 예: /members/3 이면 params.id가 3
import { useRoute } from 'vue-router';
// 멤버 목록 데이터(JSON)를 불러와서 id로 특정 멤버를 찾는다.
import members from '@/members.json';

// 현재 라우트 객체: params, path 등 "지금 주소에 담긴 값"을 확인할 때 사용
const currentRoute = useRoute();

// URL에 들어있는 id 값을 10잔법 숫자로 변환 (예: '/members/3' -> 3)
const id = parseInt(currentRoute.params.id, 10);
// id에 해당하는 멤버를 members 목록에서 찾아 화면에 표시
//배열.find((요소)=> 조건) : 조건이 true 라면 해당 요소 반환 및 종료
//                        없다면 undefined 반환
const member = members.find((m) => m.id === id);
</script>

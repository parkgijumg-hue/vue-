<template>
  <!-- fullpath : 쿼리(?k=v) 까지 포함된 전체 경로-->
  <!-- path : 쿼리를 제외한 경로 -->

  <div>
    <h2 class="m-4">이날치 멤버</h2>
    <div class="container">
      <div class="row">
        <div
          v-for="m in members"
          :key="m.id"
          class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
        >
          <!-- 동적 라우트 : 라우트 경로에 변수를 포함시키는 방식
        예) /members/1 , /members/2 , ... 
        -->
          <!-- router-link는 "클릭해서 이동"할 때 쓰는 전용 컴포넌트라 useRouter 없이도 이동 가능 -->
          <!-- <router-link :to="'/members/' + m.id"> -->

          <!-- params: { id: m.id }  
              -> index.js에 작성된 path의 변수명(id)과 params 키 값이 동일해야함 -->
          <router-link :to="{ name: 'memberInfo', params: { id: m.id } }">
            <img
              class="img-thumbnail"
              style="width: 90px; height: 110px"
              :src="m.photo"
              :title="m.name"
            />
            <!-- :속성 = JS 표현식 넣기 -->
            <br />
            <h6 class="display-7">{{ m.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// members.json 파일을 가져오기
// -> json 파일을 정보를 읽어와서 자동으로 JS 객체로 변환
//  (JSON.parse() 함수 사용 효과)
import members from '@/members.json';

// useRoute : 현재 라우트 정보를 가져오는 함수
//-> URL 경로 , params, query, fullPath 등 현재 상태를 읽을 때 사용

// useRouter : 라우터 인스턴스(객체)를 가져오는 함수 / 더욱 다양한 조건등 활동을 하기위해 사용
//-> 페이지 이동/변경을 담당하는 함수
//-> push(), replace(), back() 등을 제어할 수 있음
import { useRoute, useRouter } from 'vue-router';
</script>

<style scoped></style>

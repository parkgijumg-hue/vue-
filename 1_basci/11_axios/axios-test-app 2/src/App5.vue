<template>
  <div>
    <h2>콘솔 확인하기</h2>
  </div>
</template>

<script setup>
import axios from 'axios';
const BASEURL = '/api/todos';

const requestAPI = () => {
  const url = '/api/todos2';

  // 에러처리 예제 promise방식 (.then)
  axios
    .get(url)
    .then((response) => {
      console.log('응답 객체 :', response);
    })
    .catch((e) => {
      console.log('에러 catch');

      if (e instanceof Error) {
        // 객체 instanceof 타입 : 객체가 특정 타입으로 만들어졌는지 확인하는 연산자
        // 맞으면 true / 아니면 false

        console.lot(e.message); //에러 내용
      } else console.log(e);
    });

  //   //에러처리 예제 async , await 방식
  //   try {
  //   const response = await axios.get(url);
  //   console.log('응답 객체 :', response);
  // } catch (err) {
  //   console.error('요청 실패:', err);
};

requestAPI(); // 함수 호출
</script>

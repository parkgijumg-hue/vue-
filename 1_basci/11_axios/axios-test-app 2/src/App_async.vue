<template>
  <div>
    <h2>콘솔확인하기</h2>
  </div>
</template>

<script setup>
//axios : 서버랑 데이터를 주고 받는 도구
import axios from 'axios';

// 전체 목록 조회 URL

const listUrl = '/api/todos';

//Promis 체인방식
// ->결과를 다음으로 넘기면서 순서대로 실행하는 구조

//4건의 목록을 조회한 후 첫번쨰,두번쨰 할 일을 순차적으로 조회
const requestAPI = async () => {
  let todoList = []; // 전체 목록을 담아둘 변수
  //1.전체 목록 조회

  const res = await axios.get(listUrl);
  // console.log(res);
  todoList = res.data;
  console.log('# TodoList:', todoList);
  // return 'test';
  // 2. 첫 번째 todo 상세 조회
  // const firstId = todoList[0]?.id;
  const id = todoList[0].id;
  const res1 = await axios.get(`${listUrl}/${id}`);
  console.log(res1);

  // id 를 이용해 상세 조회 API 호출
  const detailRes = await axios.get(`${listUrl}/${id}`);
  console.log(detailRes.data);
  // 3. 두번째 todo 상세 조회
  const id2 = todoList[1].id;
  const res2 = await axios.get(`${listUrl}/${id2}`);
  console.log(res2);

  // 프록시 서버 주소 변경 전
  //const url = 'http://localhost:3000/todos';

  // 프록시 서버 주소 변경 후
  // const url = '/api/todos';

  //axios.get(rul) : 해당 url로 요청 보내기
  // .then((res)=>{}) 또는 async , await

  // console.log(url);
};
requestAPI(); //함수 호출

// then 체이닝 버전 (주석 예시)
// const requestAPI = () => {
//   let todoList = []; // 전체 목록을 담아둘 변수
//
//   // 1. 전체 목록 조회
//   return axios
//     .get(listUrl)
//     .then((res) => {
//       todoList = res.data;
//       console.log('# TodoList:', todoList);
//
//       // 2. 첫 번째 todo 상세 조회
//       const id = todoList[0].id;
//       return axios.get(`${listUrl}/${id}`);
//     })
//     .then((res1) => {
//       console.log(res1);
//
//       // id 를 이용해 상세 조회 API 호출
//       const id = todoList[0].id;
//       return axios.get(`${listUrl}/${id}`);
//     })
//     .then((detailRes) => {
//       console.log(detailRes.data);
//
//       // 3. 두번째 todo 상세 조회
//       const id2 = todoList[1].id;
//       return axios.get(`${listUrl}/${id2}`);
//     })
//     .then((res2) => {
//      axios.get('/api/todos/' + id).then((res2)=>{
//  console.log(res2);          });
//           })
//     .catch((err) => {
//       console.error(err);
//     });
// };
</script>
<!--  
  CORS 란
  - 다른 출처의 리소스를 공유할 수 있도록 허용하는 메커니즘
  - 웹 애플리케이션에서 다른 도메인의 리소스를 요청하는 경우, 
    보안 제한으로 인해 차단될 수 있음
  - 이를 해결하기 위해 CORS 헤더를 사용하여 허용된 도메인에서만 리소스를 공유할 수 있도록 함

  CORS 정책
  - 동일 출처 정책 : 동일한 출처에서만 리소스를 공유할 수 있도록 제한
  - 다른 출처에서 리소스를 요청하는 경우, 헤더를 통해 허용 여부를 결정
-->

<!-- 크로스 오리진 문제 해결 방법
 
  1. 프론트엔드에서 프록시 서버 설정
    - 브라우저 -> 프론트 개발 서버 -> 백엔드 서버 순으로 요청이 전달됨
    - 프론트 개발 서버가 프록시 역할을 하여 요청을 대신 전달하고,
      브라우저는 같은 출처로 인식하여 CORS 문제를 해결함

  2. 백엔드 서버에서 CORS 헤더 설정

-->
<style scoped></style>

<template>
  <div>
    <h2>콘솔 확인하기</h2>
  </div>
</template>

<script setup>
/* try-catch

* try{코드} : 예외가 발생할 가능성이 있는 코드
* catch(변수명){코드} : 예외 발생 시 수행할 코드 
* finally{코드} : 마지막에 무조건 수행 , 에러 발생 유무와 무관
*/

import axios from 'axios';
const BASEURL = '/api/todos';
const url = '/api/todos2';
const requestAPI = async () => {
  //에러처리 예제 async , await 방식
  try {
    // 에러 발생 시 즉시 종료 후 catch문으로 이동
    const resp = await axios.get(url);
    console.log('응답 객체 :', resp);
  } catch (e) {
    // 에러 발생 시에만 수행
    console.log('에러 발생 시 수행');

    if (e instanceof Error) {
      console.log(e.message);
    } else console.log(e);
  } finally {
    // 무조건 수행
    console.log('수행환료');
  }
};

requestAPI(); // 함수 호출
</script>

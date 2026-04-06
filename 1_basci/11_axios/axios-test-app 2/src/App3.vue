<template>
  <div>
    <h2>콘솔 확인하기</h2>
  </div>
</template>

<script setup>
import axios from 'axios';
const listUrl = '/api/todos';
const todoUrlPrefix = '/api/todos/';

// 4건의 목록을 조회한 후 첫 번째, 두 번 쨰 할일 순차적으로 조회
const requestAPI = async () => {
  //전체 목록을 조회한 후 한 간씩 순차적으로 순회하면서 조회하기

  // 1. 전체 목록 조회
  const res = await axios.get(listUrl);
  const todoList = res.data;

  // 2. 반복문을 이용해서 todo 하나씩 조회
  for (let i = 0; i < todoList.length; i++) {
    const res1 = await axios.get(todoUrlPrefix + todoList[i].id);
    console.log(`${i + 1}}번째 데이터 :`, res1.data);
  }

  // 반복을 받아 다시 배열로 합치기
  // const Listfor = [];
  // for (const i of todoList) {
  //   const realres = await axios.get(todoUrlPrefix + i.id);
  //   Listfor.push(realres.data);
  // }
  // console.log(Listfor);
};

requestAPI(); // 함수 호출
</script>

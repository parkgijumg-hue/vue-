<template>
  <div>
    <button class="like" , @click="increase">좋아요 누르기</button> <br />
    <button class="like" , @click="decrease">좋아요 감소</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useLikeStore } from '@/stores/01_basic/like';

const { increase, decrease } = useLikeStore(); // like.js 에 있는 increase, decrease 메소드를 호출함
// store 안에서 {} 안에있는 객체,함수 꺼내서 담기
</script>

<style scoped></style>

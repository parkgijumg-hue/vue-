<template>
  <div>
    <h1>Pinia 상태 관리 예제</h1>
    <h2>좋아요 수 : {{ likeStore.like }}</h2>
    <h2>좋아요 수 5배 증가 : {{ likeStore.fivelike }}</h2>
    <Like />
    <hr />
    <Count />
    <h2>{{ count.data }}</h2>
  </div>
</template>
<script setup>
// 컴포넌트 가져오기
import Like from '@/components/Like.vue';
import Count from '@/components/Counter.vue';

// 01_basic
import { useLikeStore } from '@/stores/01_basic/like';
import { useCounterStore } from '@/stores/01_basic/counter';

const count = useCounterStore();

const likeStore = useLikeStore();
</script>
<style scoped></style>

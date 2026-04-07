<template>
  <div>
    <h2>Counter</h2>
    <h3>값 꺼내기 : {{ i.count }}</h3>
    <h3>값 꺼내기 : {{ count }}</h3>
    <button @click="increment">1씩 증가</button><br />
    <button @click="reset">0으로 초기화</button><br />
    <button @click="selfIncrement">자체적으로 1 증가</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/01_basic/counter';

const i = useCounterStore();
// 값 자체를 가져올 때 반응형이 깨지기 때문애
// 객체 자체를 가져와서 꺼내 쓰는 것이 권장됨.
const { count, increment, reset } = useCounterStore();
// data
const state = ref(null);

// 함수를 자체적으로 사용하기보다는 stores에서 가져다 쓰느걸 권장됨
// 권장하지 않는 방식
const selfIncrement = () => {
  i.count++;
};
</script>

<style scoped></style>

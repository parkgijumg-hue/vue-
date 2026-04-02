<template lang="">
  <div>
    <h3>다른 컴포넌트</h3>

    <div>
      x: <input type="text" v-model.number="x" /><br />
      y: <input type="text" v-model.number="y" /><br />
      <button @click="add(x, y, 1)">X + Y</button>
      <p>X+Y={{ result }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCalc } from './Composition.vue';

const { x, y, result1, add } = useCalc();
// useCalc()의 return된 객체에서 필요한 속성만 가져옴
</script>

<!-- 같은 형식임 위에것이 더 쉬운 버전 -->
<!-- ----------------------------------------------- -->

<!-- <script>
import { useCalc } from './Composition.vue';
export default {
  setup() {
    const { x, y, sum1, calculateSum } = useCalc();

    return { x, y, sum1, calculateSum };
  },
};
</script> -->

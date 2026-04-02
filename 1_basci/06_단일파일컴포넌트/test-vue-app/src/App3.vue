<template>
  <div>
    <h2>관심있는 K-POP 가수는?</h2>
    <ul>
      <CheckboxItem3
        v-for="idol in idols"
        :key="idol.id"
        :idol3="idol"
        :name="idol.name"
        :checked="idol.checked"
        :no="idol.id"
      ></CheckboxItem3>
    </ul>
  </div>
</template>
<script>
import CheckboxItem3 from './Components/CheckboxItem3.vue';

export default {
  name: 'App',

  components: {
    CheckboxItem3,
  },
  data() {
    return {
      //props로 전달할 부모 데이터
      idols: [
        { id: 1, name: 'BTS', checked: true },
        { id: 2, name: 'Black Pink', checked: false },
        { id: 3, name: 'EXO', checked: false },
        { id: 4, name: 'ITZY', checked: false },
      ],
    };
  },
};
</script>

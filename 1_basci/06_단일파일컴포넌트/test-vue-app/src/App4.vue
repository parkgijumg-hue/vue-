<template>
  <div>
    <InputName @nameChanged="nameChangedHandler" />
    <br />
    <h3>APP 데이터:{{ parentName }}</h3>
  </div>
</template>
<script>
import InputName from './Components/InputName.vue';

export default {
  // 내보내는 컴포넌트의 이름
  // App.vue는 루트 컴포넌트! -> 이름 미지정 시 <Root> 태그로 렌더링
  name: 'App4',

  //지역 컴포넌트 등록 -> 그래야 화면에 렌더링이 가능함
  components: {
    InputName,
  },
  data() {
    return {
      parentName: '',
    };
  },
  methods: {
    nameChangedHandler(e) {
      this.parentName = e.name;
    },
  },
};
</script>

<template lang="">
  <div>
    <h1>이벤트 유효성 검증</h1>
    <!-- 자식 컴포넌트로 부터 전달 받은 이벤트(nameChanged)가 
          감지 되었을 때(이벤트 리스너,@nameChanged)
          이벤트 핸들러 메소드(nameChangedHandler)가 호출됨
           -->
    <InputName2 @nameChanged-="nameChangedHandler" />
    <br />
    <h3>App 데이터: {{ parentName }}</h3>
  </div>
</template>
<script>
import InputName2_2 from './Components/InputName2_2.vue';
export default {
  name: 'App5_2',

  components: { InputName2_2 },
  data() {
    return {
      parentName: '',
    };
  },
  methods: {
    nameChangedHandler(e) {
      //e : 자식 컴포넌트에서 전달 받은 이벤트 객체

      this.parentName = e.name;
      //vue는 data에 있어야 화면에 반영된다!
    },
  },
};
</script>

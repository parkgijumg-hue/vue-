<!-- props 속성 사용 (겍체 전달)
   - props 목적: 자식 컴포넌트가 필요한 데이터를 전달 받아 UI화면을 렌더링 하는 것을 목적으로함 
-->
<template lang="">
  <li><input type="checkbox" />{{ idol2.name }}</li>
</template>
<script>
export default {
  name: 'CheckboxItem', //컴포넌트 이름
  props: ['idol2'],
  //props 로 전달 받은 idol 객체
};
</script>

<!-- props 속성 사용 (겍체 전달)
   - props 목적: 자식 컴포넌트가 필요한 데이터를 전달 받아 UI화면을 렌더링 하는 것을 목적으로함 
-->
<template lang="">
  <li><input type="checkbox" :checked="checked" />{{ no }}-{{ name }}</li>
</template>
<script>
export default {
  name: 'CheckboxItem', //컴포넌트 이름

  //유효성 검사 안한 버전
  // props: ['no', 'name', 'checked'],

  //유효성 검사 한 버전
  //부모 -> 자식으로 넘어오는 데이터 규칙 지정
  //유효한 코드 or 규칙이 아닌경우 console에 경고 -> 실행은 됨
  props: {
    no: [Number, String], //타입(숫자,문자열)만 정의
    name: String, // 문자열 정의
    checked: {
      //타입 + 옵션 정의
      type: Boolean,
      default: false, //기본값 정의
      required: false, //생략가능하다는 의미
    },
  },
};
</script>

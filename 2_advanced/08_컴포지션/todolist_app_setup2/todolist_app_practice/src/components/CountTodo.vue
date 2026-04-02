<template>
  <!-- CountTodo: 개수 요약 표시(자식). 부모(App)가 계산한 값을 props로 받음 -->
  <div class="container text-center">
    <div class="row">
      <div class="col">
        전체 할일 개수 :
        <span>{{ todoList.length }}</span>
      </div>
      <div class="col">
        완료 할일 개수 :
        <span :class="{ 'text-success': completed }">{{ completed }}</span>
        <!-- completed가 0이 아니면(=참) text-success 클래스가 붙어 초록색 표시 -->
      </div>
      <div class="col">
        미완료 할일 개수 :
        <span :class="{ 'text-danger': uncompleted }">{{ uncompleted }}</span>
      </div>
      <div class="col">
        수정된 할일 개수 :
        <span :class="{ 'text-warning': rewrited }">{{ rewrited }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
// props: 부모(App)에서 내려준 데이터/개수값
const props = defineProps({
  todoList: {
    type: Array,
    required: true,
  },
  // 각 키는 부모가 내려주는 props 이름이고, type은 그 값의 타입을 명시
  // 이렇게 객체 형태로 써야 Vue가 props 타입을 인식하고 검증할 수 있음
  completed: { type: Number },
  uncompleted: { type: Number },
  rewrited: Number,
  // 간단 표기법
});
</script>

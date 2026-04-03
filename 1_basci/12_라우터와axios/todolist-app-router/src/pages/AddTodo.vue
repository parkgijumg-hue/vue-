<template>
  <!-- InputTodo: 입력 UI(자식). App.vue로 add/clear 이벤트 emit -->
  <div class="row">
    <div class="col">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
          @keyup.enter="addTodoHandler"
        />
        <!-- v-model: 양방향 바인딩, .trim은 앞뒤 공백 제거 -->
        <!-- Enter 키로 추가 -->
        <!-- 입력값은 todo(ref)에 저장되고, 부모(App)에 이벤트로 전달됨 -->
        <button class="btn btn-primary" type="button" @click="addTodoHandler">
          추가
        </button>
        <button class="btn btn-danger" type="button" @click="cleartodohandler">
          전체삭제
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
// Composition API + script setup: 상태/함수 선언만으로 컴포넌트 완성
import { ref } from 'vue';
const todo = ref(''); // 입력값 상태
const emit = defineEmits(['add-todo', 'clear-todo']); // 부모(App)로 보낼 이벤트 목록

const addTodoHandler = () => {
  // 부모(App)로 add-todo 이벤트 방출
  // add-todo의 payload는 문자열(todo)
  if (todo.value.length >= 3) {
    emit('add-todo', todo.value);
    todo.value = '';
    // 유효하면 여기서 함수 종료
  } else {
    alert('할 일은 3글자 이상 입력해주세요.');
  }
};
const cleartodohandler = () => {
  // confirm: 브라우저 기본 확인/취소 다이얼로그
  const ok = confirm('진짜로 삭제하겠습니까?');
  if (ok) {
    // 확인이면 부모(App)로 clear-todo 이벤트 방출
    emit('clear-todo');
  }
};
</script>

<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
          @keyup.enter="addTodoHandler"
        />
        <button class="btn btn-primary" type="button" @click="addTodoHandler">
          추가
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const todo = ref('');
const emit = defineEmits(['add-todo']);

const addTodoHandler = () => {
  //부모 컴포넌트에 이벤트 전달(방출)
  if (todo.value.length >= 3) {
    emit('add-todo', todo.value);
    todo.value = '';
    // console.log('event진행중'); // 콘솔에 검사하기
    return; //메소드 종료.
  }
  alert('할 일은 3글자 이상 입력해주세요.');
  //return 을 적어주면 해당 함수 종료
  //위 같은 상황에서는 else 를 적어준것과 동일한 결과 도출
};
</script>

<template>
  <!-- App: 최상위(부모) 컴포넌트. 모든 상태를 보관하고 자식에게 내려줌 -->
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default panel-borderless">
      <div class="card-body">
        <!-- InputTodo: 할 일 입력/전체삭제 이벤트를 부모(App)로 emit -->
        <InputTodo @add-todo="addTodo" @clear-todo="clearTodoList" />
        <!-- CountTodo: 부모 상태를 props로 전달받아 개수 표시 -->
        <CountTodo
          :todoList="todoList"
          :completed="completed"
          :uncompleted="uncompleted"
          :rewrited="rewrited"
        />
        <!-- TodoList: 목록 렌더 + 자식 이벤트를 부모(App)로 다시 emit -->
        <TodoList
          :todoList="todoList"
          @delete-todo="deleteTodo"
          @toggle-completed="toggleCompleted"
          @rewrite-todo="rewriteTodo"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// <script setup>: Composition API 문법. 이 파일 자체가 컴포넌트가 됨
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';
import CountTodo from './components/CountTodo.vue';

import { ref, computed } from 'vue';

let ts = new Date().getTime(); // 초기 샘플 데이터용 id 기준값

const todoList = ref([
  // ref: 반응형 상태(배열). .value로 접근
  // 각 항목 구조: { id, todo, completed, edited }
  // id는 식별자, todo는 문자열, completed는 완료 여부, edited는 수정 여부
  { id: ts, todo: '자전거 타기', completed: false, edited: false },
  { id: ts + 1, todo: '딸과 공원 산책', completed: true, edited: false },
  { id: ts + 2, todo: '일요일 애견 카페', completed: false, edited: false },
  { id: ts + 3, todo: 'Vue 원고 집필', completed: false, edited: false },
]);

// add-todo 이벤트 수신: 새 항목을 배열에 추가
const addTodo = (todo) => {
  if (todo.length >= 3) {
    // 새 항목은 항상 edited=false로 시작
    todoList.value.push({
      id: new Date().getTime(),
      todo: todo,
      completed: false,
      edited: false,
    });
  }
};

// delete-todo 이벤트 수신: id로 찾아 삭제
const deleteTodo = (id) => {
  // findIndex로 위치를 찾고 splice로 삭제
  let index = todoList.value.findIndex((item) => id === item.id);
  todoList.value.splice(index, 1);
};

// toggle-completed 이벤트 수신: 완료/미완료 토글
const toggleCompleted = (id) => {
  // 완료 상태를 true/false로 뒤집음
  let index = todoList.value.findIndex((item) => id === item.id);

  todoList.value[index].completed = !todoList.value[index].completed;
};

// clear-todo 이벤트 수신: 전체 삭제
const clearTodoList = () => {
  // 배열을 비워서 화면에서 목록 제거
  todoList.value.splice(0);
};

// computed: 상태 기반 파생값(완료 개수)
const completed = computed(() => {
  // completed === true 인 항목만 골라서 개수 반환
  // filter는 조건을 만족하는 요소만 남긴 새 배열을 만들어 줌
  return todoList.value.filter((item) => item.completed).length;
});
// computed: 미완료 개수
const uncompleted = computed(() => {
  return todoList.value.filter((item) => item.completed === false).length;
});
// computed: 수정된 항목 개수(edited === true)
const rewrited = computed(() => {
  return todoList.value.filter((item) => item.edited).length;
});
// rewrite-todo 이벤트 수신: { id, text }로 해당 항목 수정
const rewriteTodo = ({ id, text }) => {
  // id로 수정 대상 찾기
  const index = todoList.value.findIndex((item) => item.id === id);

  if (text.trim().length >= 3) {
    // todo 내용 변경 + 수정됨 표시
    todoList.value[index].todo = text.trim();
    todoList.value[index].edited = true;
  }
};
</script>

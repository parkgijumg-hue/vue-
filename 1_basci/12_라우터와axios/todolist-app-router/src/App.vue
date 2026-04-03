<template>
  <!-- 최상위 레이아웃 컨테이너: 앱 전체 레이아웃을 감싼다 -->
  <div class="container">
    <!-- 공통 헤더 컴포넌트 렌더링 -->
    <Header />
    <!-- 라우터가 현재 경로에 매칭된 페이지 컴포넌트를 이 위치에 렌더링 -->
    <router-view />
  </div>
</template>
<script setup>
// Vue Composition API에서 사용하는 함수들을 가져온다
// - reactive: 객체를 반응형으로 만든다
// - computed: 파생 상태를 만든다
// - provide: 하위 컴포넌트에게 의존성(데이터/함수)을 주입한다
import { reactive, computed, provide } from 'vue';

// 별칭(@)은 Vite/Vue 설정에서 보통 src를 가리킨다
// Header 컴포넌트를 가져온다
import Header from '@/components/Header.vue';

// 상태 객체: reactive로 감싸면 내부 속성 변화가 추적된다
// states.todoList 배열이 변경되면 관련 UI가 자동 갱신된다
const states = reactive({
  // todoList: 할 일 목록을 담는 배열
  todoList: [
    // 각 항목은 다음 구조를 가진다
    // id: 고유 식별자, todo: 제목, desc: 설명, done: 완료 여부
    { id: 1, todo: 'ES6학습', desc: '설명1', done: false },
    { id: 2, todo: 'React학습', desc: '설명2', done: false },
    { id: 3, todo: 'ContextAPI 학습', desc: '설명3', done: true },
    { id: 4, todo: '야구경기 관람', desc: '설명4', done: false },
  ],
});

// addTodo: 새 할 일을 추가하는 함수
// 구조 분해 할당으로 매개변수에서 todo, desc만 꺼낸다
const addTodo = ({ todo, desc }) => {
  // Date.now()와 동일한 역할: 현재 시간을 밀리초로 반환
  // 새 항목을 배열 끝에 추가한다
  states.todoList.push({ id: new Date().getTime(), todo, desc, done: false });
};

// updateTodo: 기존 항목을 수정하는 함수
// 매개변수 객체에서 id, todo, desc, done을 꺼낸다
const updateTodo = ({ id, todo, desc, done }) => {
  // findIndex: 조건을 만족하는 첫 번째 요소의 인덱스를 찾는다
  let index = states.todoList.findIndex((todo) => todo.id === id);
  // 스프레드(...)로 기존 항목을 복사하고, 변경할 값만 덮어쓴다
  states.todoList[index] = { ...states.todoList[index], todo, desc, done };
};

// deleteTodo: 특정 항목을 삭제하는 함수
const deleteTodo = (id) => {
  // id와 일치하는 항목의 인덱스를 찾는다
  let index = states.todoList.findIndex((todo) => todo.id === id);
  // splice로 해당 인덱스의 요소 1개를 제거한다
  states.todoList.splice(index, 1);
};

// toggleDone: 완료 상태를 토글하는 함수
const toggleDone = (id) => {
  // id에 해당하는 항목을 찾는다
  let index = states.todoList.findIndex((todo) => todo.id === id);
  // true/false 값을 뒤집는다
  states.todoList[index].done = !states.todoList[index].done;
};

// provide: 하위 컴포넌트에게 'todoList'라는 키로 값을 주입
// computed를 사용해 읽기 전용으로 노출하고, 변경은 actions로만 하도록 유도
provide(
  'todoList',
  computed(() => states.todoList),
);

// provide: 하위 컴포넌트에게 'actions'라는 키로 함수 묶음을 주입
// inject로 받아서 addTodo/deleteTodo/toggleDone/updateTodo를 호출 가능
provide('actions', { addTodo, deleteTodo, toggleDone, updateTodo });
</script>

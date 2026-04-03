<template>
  <!-- TodoList: 목록 렌더 컴포넌트(중간 부모). 이벤트를 상위(App)로 중계 -->
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListItem
          v-for="todoItem in todoList"
          :key="todoItem.id"
          :todoItem="todoItem"
          @delete-todo="emit('delete-todo', $event)"
          @toggle-completed="emit('toggle-completed', $event)"
          @rewrite-todo="emit('rewrite-todo', $event)"
        />
        <!-- v-for에는 고유 key 필요 -->
        <!-- 자식(TodoListItem)에게 단일 항목 전달 -->
        <!-- 자식 이벤트를 부모로 중계 -->
        <!-- $event에는 자식이 emit한 값(id 또는 {id, text})가 들어옴 -->
      </ul>
    </div>
  </div>
</template>
<script setup>
import TodoListItem from './TodoListItem.vue';

// props: 부모(App)에서 전달된 목록 데이터
const props = defineProps({
  todoList: { type: Array, required: true },
});
// emit: 부모(App)로 다시 전달할 이벤트 목록
const emit = defineEmits(['delete-todo', 'toggle-completed', 'rewrite-todo']);
</script>

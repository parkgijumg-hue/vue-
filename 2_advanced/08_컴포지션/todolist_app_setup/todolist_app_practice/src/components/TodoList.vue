<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListItem
          v-for="todoItem in todoList"
          :key="todoItem.id"
          :todoItem="todoItem"
          @delete-todo="emit('delete-todo', $event)"
          @toggle-completed="emit('toggle-completed', $event)"
        />
      </ul>
    </div>
  </div>
</template>
<script setup>
import TodoListItem from './TodoListItem.vue';

//props: 부모 컴포넌트에서 전달된 데이터
const props = defineProps({
  todoList: { type: Array, required: true },
});
const emit = defineEmits(['delete-todo', 'toggle-completed']);
</script>

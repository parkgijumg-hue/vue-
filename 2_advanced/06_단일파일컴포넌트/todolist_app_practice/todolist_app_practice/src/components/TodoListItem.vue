<template>
  <li
    class="list-group-item"
    :class="{ 'list-group-item-success': todoItem.completed }"
    @click="$emit('toggle-completed', todoItem.id)"
  >
    <input type="checkbox" class="pointer me-3" />
    <span class="pointer" :class="{ 'todo-done': todoItem.completed }">
      {{ todoItem.todo }}
      {{ todoItem.completed ? '(완료)' : '' }}
      <!-- 삼항 연산자: 조건식 ? true : false -->
    </span>
    <span
      class="float-end badge bg-secondary pointer"
      @click.stop="$emit('delete-todo', todoItem.id)"
      >삭제</span
    >
  </li>
</template>
<script>
export default {
  name: 'TodoListItem',
  props: {
    todoItem: { type: Object, required: true },
  },
  emits: ['delete-todo', ' toggle-completed'],
};
</script>

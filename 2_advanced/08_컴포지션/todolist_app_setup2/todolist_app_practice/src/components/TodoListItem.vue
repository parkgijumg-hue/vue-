<template>
  <!-- TodoListItem: 단일 할 일 표시(자식). 수정 UI는 여기서 제어 -->
  <li
    class="list-group-item"
    :class="{ 'list-group-item-success': todoItem.completed }"
    @click="emit('toggle-completed', todoItem.id)"
  >
    <!-- 항목 클릭 시 완료 토글 -->
    <input
      type="checkbox"
      class="pointer me-3"
      :checked="todoItem.completed"
      @click.stop="emit('toggle-completed', todoItem.id)"
    />
    <!-- 체크박스 클릭도 토글 -->

    <span class="pointer" :class="{ 'todo-done': todoItem.completed }">
      <!-- 완료면 스타일 변경 + '(완료)' 표시 -->
      {{ todoItem.todo }}
      {{ todoItem.completed ? '(완료)' : '' }}
    </span>
    <!-- 수정 모드일 때만 인라인 편집 컴포넌트 표시 -->
    <RewriteTodo
      v-if="isEditing"
      :todoListitem="todoItem.todo"
      @confirm="confirmEdit"
      @cancel="cancelEdit"
    />
    <!-- isEditing=true일 때만 RewriteTodo가 화면에 나타남 -->
    <span v-if="todoItem.edited" class="ms-2 text-muted">(수정됨)</span>
    <!-- 자식(RewriteTodo)에 현재 텍스트 전달 -->
    <!-- 수정 완료 텍스트 수신 -->
    <!-- 수정 취소 -->
    <span class="float-end badge bg-secondary pointer" @click.stop="startEdit">
      수정
    </span>
    <span
      class="float-end badge bg-secondary pointer"
      @click.stop="emit('delete-todo', todoItem.id)"
      >삭제</span
    >
  </li>
</template>
<script setup>
import { ref } from 'vue';
import RewriteTodo from './RewriteTodo.vue';
// props: 부모(TodoList)에서 단일 항목 객체 전달
const props = defineProps({
  todoItem: { type: Object, required: true },
});
// isEditing: 이 항목이 현재 수정 중인지 여부
const isEditing = ref(false);
const startEdit = () => {
  // 수정 버튼 클릭 시 편집 모드 토글
  isEditing.value = !isEditing.value;
};
const cancelEdit = () => {
  // 취소하면 편집 모드 종료
  isEditing.value = false;
};
// confirmEdit: RewriteTodo에서 받은 text를 부모로 { id, text } 형태로 전달
const confirmEdit = (text) => {
  // 부모(App)에서 실제 데이터 수정
  emit('rewrite-todo', { id: props.todoItem.id, text });
  isEditing.value = false;
};

// emit: 부모(TodoList)로 보낼 이벤트 목록
const emit = defineEmits(['delete-todo', 'toggle-completed', 'rewrite-todo']);
</script>

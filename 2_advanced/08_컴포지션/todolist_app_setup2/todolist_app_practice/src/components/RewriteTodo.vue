<template>
  <!-- RewriteTodo: 인라인 수정 입력 컴포넌트(자식) -->
  <div class="d-inline-flex align-items-center gap-2">
    <input
      class="form-control d-inline-block w-auto"
      v-model="text"
      @keyup.enter="confirm"
      @keyup.esc="cancel"
      @click.stop=""
      placeholder="수정할 글자 입력"
    />
    <!-- v-model: 입력값을 text 상태와 동기화 -->
    <!-- Enter로 확정 -->
    <!-- ESC로 취소 -->
    <!-- 부모 클릭 이벤트(완료 토글) 전파 방지 -->
    <button class="btn btn-sm btn-success" @click.stop="confirm">확인</button>
    <button class="btn btn-sm btn-secondary" @click.stop="cancel">취소</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

// props: 부모(TodoListItem)에서 현재 텍스트를 전달받음
const props = defineProps({
  todoListitem: { type: String, required: true },
});

// emit: 부모(TodoListItem)로 confirm/cancel 이벤트 방출
const emit = defineEmits(['confirm', 'cancel']);

const text = ref(''); // 입력값 상태(초기값 = props)
// text는 입력창과 v-model로 연결되어 있어 입력할 때마다 값이 바뀜

// watch: 부모 props가 바뀌면 입력값도 최신으로 맞춤(안전장치)
// watch(
//   () => props.todoListitem,
//   (item) => (text.value = item),
// );

// confirm: 입력값 검증 후 부모로 text 전달
const confirm = () => {
  if (text.value.trim().length >= 3) {
    // 부모(TodoListItem)로 수정된 텍스트 전달
    emit('confirm', text.value.trim());
    return;
  }
  alert('3글자 이상 작성하시오.');
};

// cancel: 수정 취소 이벤트만 전달(입력 닫기는 부모가 처리)
const cancel = () => {
  emit('cancel');
};
</script>

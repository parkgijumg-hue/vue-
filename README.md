프로젝트 생성 코드 
1.터미널 실행 
2.npm init vue 
3.cd 로 해당 프로젝트 찾기
4.npm install
5.npm run dev

기본문법
v-bind(단방향) = :
v-model(양방향) 
v-on = @


컴포넌트 분리 

핵심 방향
props = 부모 → 자식
emit = 자식 → 부모

1) Props (부모가 자식에게 “값” 전달)
2) 
-부모(App.vue)
<TodoList :todoList="todoList" />

-자식(TodoList.vue)
props: {
  todoList: { type: Array, required: true }
}

의미
부모의 todoList를 자식에서 읽기 전용 데이터로 받는 것 자식은 props 값을 직접 수정하면 안 됨 (경고 뜸)


2) Emit (자식이 부모에게 “알림/이벤트” 전달)

-자식(TodoListItem.vue)
<button @click="$emit('delete-todo', todoItem.id)">삭제</button>

-부모(App.vue)
<TodoList @delete-todo="deleteTodo" />

의미
자식이 “삭제 버튼이 눌렸어”라고 부모에게 알림 부모는 그 이벤트를 받아서 실제로 데이터를 수정

실제 흐름 예시
부모가 props로 todoList 전달
자식이 버튼 클릭 → emit으로 알림
부모가 emit을 받아서 삭제/수정

사용 정리 (짧게)
props: 자식에게 데이터 넘길 때
emit: 자식에서 부모에게 “이벤트/신호” 보낼 때

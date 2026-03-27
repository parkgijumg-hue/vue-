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


<script setup> 
 사용하면 코드가 한결 수원해짐

  원래 코드에서 export , component 부분 삭제하면 됨 
  emit 은 $ 삭제 가능 
  그러나 emit 과 props 를 사용할때 
  defineEmits or defineProps 를 사용해줘야함 

  1. 이 값이 “내가 만든 상태”야?

Yes → ref/reactive 필요
No (props로 받음) → 필요 없음
2. 화면에 보이는 값이 “내가 여기서 바뀌어”?

Yes → ref/reactive 필요
No → 필요 없음
3. 템플릿에서 쓰는 변수가 “직접 선언한 값”이야?

직접 선언했고, 값이 변함 → ref/reactive
props나 computed 결과 → 그대로 사용
한 줄 요약

내가 만든 상태 + 내가 바꾸는 값 = ref/reactive
부모가 준 값(= props) = 그냥 사용



  defineEmits는 실행할 때 쓰는 함수가 아니라,
컴파일러에게 “이 컴포넌트는 어떤 이벤트를 낸다”라고 알려주는 선언이라서
반드시 <script setup>의 최상단에 있어야 합니다.


setup() 함수 사용 → return 필요
<script setup> 사용 → return 필요 없음

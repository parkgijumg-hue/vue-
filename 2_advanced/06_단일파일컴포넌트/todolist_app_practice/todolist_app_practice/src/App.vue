<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default panel-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />
        <!--  목록 컴포넌트: props를 이용해서 todoList를 자식 컴포넌트로 전달 -->

        <TodoList
          :todoList="todoList"
          @delete-todo="deleteTodo"
          @toggle-completed="toggleCompleted"
        />
        <!-- :todolist -> 자식에게 todolist라는 속성으로 todoList(데이터) 전달)  -->
        <!-- @delete-todo : 자식으로부터 delete-todo라는 이벤트감지되면 해당 메소드를 호출한다. -->
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';
let ts = new Date().getTime();
export default {
  name: 'App',
  components: { InputTodo, TodoList },
  data() {
    return {
      todoList: [
        { id: ts, todo: '자전거 타기', completed: false },
        { id: ts + 1, todo: '딸과 공원 산책', completed: true },
        { id: ts + 2, todo: '일요일 애견 카페', completed: false },
        { id: ts + 3, todo: 'Vue 원고 집필', completed: false },
      ],
    };
  },
  methods: {
    /*
     *할일 추가
     * @param todo : InputTodo에서 전달된 todo(할일 내용)
     */
    addTodo(todo) {
      if (todo.length >= 3) {
        this.todoList.push({
          id: new Date().getTime(),
          todo: todo,
          completed: false,
        });
      }
    },
    deleteTodo(id) {
      let index = this.todoList.findIndex((item) => id === item.id);
      this.todoList.splice(index, 1);
      // splice(시작위치, 삭제개수): index 위치에서부터 1개 요소를 삭제한다.
      // 기존 배열을 "직접" 변경하는 메서드(원본 변경)이다.
      // 삭제된 요소는 배열로 반환되지만, 여기서는 반환값을 쓰지 않는다.
    },
    toggleCompleted(id) {
      let index = this.todoList.findIndex((item) => id === item.id);
      // 배열.findIndex((item)=>조건): 조건이 true가 되는 첫번째 요소이 index반환
      // 없는 경우 -1 반환

      //기존의 completed값을 반대로 변경
      this.todoList[index].completed = !this.todoList[index].completed;
    },
  },
};
</script>

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import TodoList from '@/pages/TodoList.vue';
import AddTodo from '@/pages/AddTodo.vue';
import EditTodo from '@/pages/EditTodo.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //해당 URL 일 때
      components: Home, // 보여줄 컴포넌트 지정
      // 라우터를 이름으로 부르기 위한 옵션
    },
    {
      path: '/about', //해당 URL 일 때
      components: About, // 보여줄 컴포넌트 지정
      // 라우터를 이름으로 부르기 위한 옵션
    },
    {
      path: '/todos', //해당 URL 일 때
      components: TodoList, // 보여줄 컴포넌트 지정
      // 라우터를 이름으로 부르기 위한 옵션
    },
    {
      path: '/todos/add', //해당 URL 일 때
      components: AddTodo, // 보여줄 컴포넌트 지정
      // 라우터를 이름으로 부르기 위한 옵션
    },
    {
      path: '/todos/edit/:id', //해당 URL 일 때
      components: EditTodo, // 보여줄 컴포넌트 지정
      // 라우터를 이름으로 부르기 위한 옵션
    },
    {
      path: '/:paths(.*)*',
      components: NotFound,
    },
  ],
});

export default router;

<template>
  <div class="input-form card card-body mt-3">
    <div class="row g-3" @keyup.enter="addContact">
      <div class="col-md-2">
        <input
          type="text"
          class="form-control"
          placeholder="이름"
          v-model.trim="con.name"
        />
      </div>
      <div class="col-md-2">
        <select class="form-select" v-model.trim="con.gender">
          <option value="">성별</option>
          <option value="남">남</option>
          <option value="여">여</option>
        </select>
      </div>
      <div class="col-md-2">
        <input
          type="number"
          class="form-control"
          placeholder="나이"
          v-model.trim="con.age"
        />
      </div>
      <div class="col-md-3">
        <input
          type="email"
          class="form-control"
          placeholder="이메일"
          v-model.trim="con.email"
        />
      </div>
      <div class="col-md-2">
        <input
          type="text"
          class="form-control"
          placeholder="github ID"
          v-model.trim="con.github"
        />
      </div>
      <div class="col-md-1">
        <button class="btn btn-primary w-100" @click="addContact">추가</button>
      </div>
    </div>
  </div>
</template>

<!-- con: {
        id: new Date().getTime(),
        name: '',
        gender: '',
        age: '',
        email: '',
        github: '',
        isEditing: false,
      } -->
<script setup>
import { ref } from 'vue';
const con = ref({
  id: new Date().getTime(),
  name: '',
  gender: '',
  age: '',
  email: '',
  github: '',
  isEditing: false,
});

const addContact = (e) => {
  if (con.value.name.length == 0) {
    alert('이름을 입력하세요');
    return;
  }
  if (con.value.email.length == 0) {
    alert('이메일을 입력하세요');
    return;
  }
  if (con.value.age <= 0) {
    alert('정확한 나이를 기입하십시오.');
    return;
  }
  // console.log(con);

  emit('add-contact', con.value);

  con.value = {};
};
const emit = defineEmits(['add-contact']);
</script>

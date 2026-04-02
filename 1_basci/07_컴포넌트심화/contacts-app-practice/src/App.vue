<template>
  <div id="app" class="container-lg">
    <div class="card card-body bg-light">
      <div class="title">우리반 Contact ❤️</div>
    </div>

    <!-- 연락처 입력 폼 -->
    <ContactForm @add-contact="addContact" />
    <!-- 연락처 목록 -->
    <ContactList :contacts="contacts" @delete-contact="deleteContact" />
  </div>
</template>

<script>
import ContactList from './components/ContactList.vue';
import ContactForm from './components/ContactForm.vue';
export default {
  name: 'App',
  components: {
    ContactList,
    ContactForm,
  },

  data() {
    return {
      newContact: {
        name: '',
        gender: '',
        age: '',
        email: '',
        github: '',
      },
      contacts: [
        {
          id: 1,
          name: '홍길동',
          gender: '남',
          age: 20,
          email: 'hong@example.com',
          github: 'hongGD',
          isEditing: false,
        },
        {
          id: 2,
          name: '짱구',
          gender: '남',
          age: 7,
          email: 'janggu@example.com',
          github: 'janggu',
          isEditing: false,
        },
        {
          id: 3,
          name: '유리',
          gender: '여',
          age: 7,
          email: 'yuri@example.com',
          github: 'yuri',
          isEditing: false,
        },
      ],
    };
  },
  methods: {
    addContact(id) {
      this.contacts.push({
        id: new Date().getTime(),
        name: id.name,
        gender: id.gender,
        age: id.age,
        email: id.email,
        github: id.github,
        isEditing: false,
      });
    },
    deleteContact(id) {
      let index = this.contacts.findIndex((item) => id === item.id);
      this.contacts.splice(index, 1);
    },
    /* contact 추가 */
    /* contact 삭제 */
  },
};
</script>

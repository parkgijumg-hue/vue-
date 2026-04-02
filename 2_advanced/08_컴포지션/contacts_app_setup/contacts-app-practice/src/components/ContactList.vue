<template>
  <div class="contact-list mt-3">
    <table class="table">
      <thead>
        <tr>
          <th>이름</th>
          <th>성별</th>
          <th>나이</th>
          <th>이메일</th>
          <th>Github ID</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        <ContactItem
          v-for="contact in contacts"
          :key="contact.id"
          :contact="contact"
          @delete-contact="emit('delete-contact', $event)"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import ContactItem from './ContactItem.vue';

const props = defineProps({ contacts: { type: Array, required: true } });
const emit = defineEmits(['delete-contact']);
</script>

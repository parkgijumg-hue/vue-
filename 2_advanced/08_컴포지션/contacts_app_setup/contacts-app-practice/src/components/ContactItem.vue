<template>
  <tr>
    <td>{{ contact.name }}</td>
    <td>{{ contact.gender }}</td>
    <td>{{ contact.age }}</td>
    <td>{{ contact.email }}</td>
    <td>{{ contact.github }}</td>
    <td>
      <button
        class="btn btn-danger btn-sm"
        @click.stop="emit('delete-contact', contact.id)"
      >
        삭제
      </button>
    </td>
  </tr>
</template>

<script setup>
const props = defineProps({ contact: { type: Object, required: true } });
const emit = defineEmits(['delete-contact']);
</script>

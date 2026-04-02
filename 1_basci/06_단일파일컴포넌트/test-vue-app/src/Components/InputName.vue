<template lang="">
  <div style="border: solid 1px gray; margin: 5px; padding: 5px">
    이름: <input type="text" v-model="name" />
    <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
  </div>
</template>
<script>
export default {
  name: 'InputName',
  data() {
    return { name: '' };
  },
};
</script>

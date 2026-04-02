<template>
  <div>
    <Options />
    <hr />
    <Calc />
  </div>
</template>

<script>
import Options from './components/Composition.vue';
import Calc from './components/Calc.vue';

export default {
  name: 'App',
  components: { Options, Calc },
};
</script>

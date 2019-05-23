<template>
  <div>
    <h3 class="text-success">{{ msg }}</h3>
    <textarea class="form-control" rows="10" @keyup="onInput"></textarea>
    <hr>
    <div v-html="output"></div>
    <hr>
    <div>{{ inner_state }}</div>
  </div>
</template>

<script>
import { Parser } from '../lib/parser';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      output: '',
      inner_state: ''
    }
  },
  methods: {
    onInput(e) {
      const result = Parser.parse(e.target.value);
      if (result.value) {
        console.log(result.value.decorate());
        this.$set(this, 'output', result.value.decorate());
      }
      this.$set(this, 'inner_state', result);
    }
  }
}
</script>

<style scoped>
</style>

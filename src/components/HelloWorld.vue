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
import { parse } from '../lib/parser';

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
      const reply = parse(e.target.value);
      console.log(reply);
      if (reply.kind === 'OK') {
        this.$set(this, 'output', reply.value);
      }
      this.$set(this, 'inner_state', reply);
    }
  }
}
</script>

<style scoped>
</style>

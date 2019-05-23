<template>
  <div>
    <h3 class="text-success">{{ msg }}</h3>
    <textarea class="form-control" rows="10" @keyup="onInput"></textarea>
    <hr>
    <p>{{ output }}</p>
    <hr>
    <p>{{ inner_state }}</p>
  </div>
</template>

<script>
import { parseOperation } from '../lib/parser';

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
      const result = parseOperation(e.target.value);
      this.$set(this, 'output', result.value);
      this.$set(this, 'inner_state', result);
    }
  }
}
</script>

<style scoped>
</style>

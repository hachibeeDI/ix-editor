<template>
  <div>
    <div v-if="error">
      <p class="text-danger">{{ error }}</p>
    </div>

    <div class="row">
      <div class="col-6">
        <p class="text-success">Write</p>
        <textarea class="ix-textarea form-control" v-model="input" @keyup="onInput"></textarea>
      </div>
      <div class="col-6">
        <p class="text-success">Preview</p>
        <div class="ix-preview form-control" v-html="output"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {parse} from '../lib/ix-parser/parser'
import {decorate} from '../lib/ix-parser/decorator'

export default {
  name: 'IxEditor',
  props: {
    msg: String
  },
  data() {
    return {
      input: '',
      output: '',
      error: null
    }
  },
  mounted() {
    const input = 'hoge[100]\nmoge mo\nfuga[200]';
    this.$set(this, 'input', input);
    this.convert(input);
  },
  methods: {
    onInput(e) {
      this.convert(e.target.value);
    },
    convert(input) {
      const ast = parse(input);
      if (ast.status) {
        this.$set(this, 'output', decorate(ast.value));
        this.$set(this, 'error', null);
      } else {
        console.log(ast);
        this.$set(this, 'output', input);
        this.$set(this, 'error', ast.index + ast.expected);
      }
    }
  }
}
</script>

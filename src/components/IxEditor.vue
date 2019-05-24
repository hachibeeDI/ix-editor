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
  name: 'HelloWorld',
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
    const input = 'hoge[!bf4b3a85-1a88-4c81-b7bb-c7f0da492f61]\nmoge\nfuga[!aefe9026-bb92-4e87-985b-3138f81f1d07]';
    this.$set(this, 'input', input);
    this.convert(input);
  },
  methods: {
    onInput(e) {
      this.convert(e.target.value);
    },
    convert(input) {
      const reply = parse(input);
      if (reply.kind === 'OK') {
        this.$set(this, 'output', decorate(reply.value));
        this.$set(this, 'error', null);
      } else {
        this.$set(this, 'output', input);
        this.$set(this, 'error', reply.reason);
      }
    }
  }
}
</script>

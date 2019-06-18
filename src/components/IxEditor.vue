<template>
  <div>
    <div class="row">
      <div class="col-6">
        <p class="text-success">Write</p>
        <textarea class="ix-textarea form-control" v-model="input" @keyup="onInput"></textarea>
      </div>
      <div class="col-6">
        <p class="text-success">Preview</p>
        <IxViewer :elements="elements" />
      </div>
    </div>

    <IxReferenceList :references="references" />
  </div>
</template>

<script>
import {parse} from '../lib/ix-parser/parser'
import IxViewer from './viewer/IxViewer'
import IxReferenceList from './IxReferenceList'

export default {
  name: 'IxEditor',
  props: {
    text: String
  },
  components: {
    IxViewer,
    IxReferenceList
  },
  data() {
    return {
      elements: [],
      input: '',
      referenceMap: {
        100: { id: 100, title: 'hoge' },
        200: { id: 200, title: 'moge' },
        300: { id: 300, title: 'fuga' },
      },
      references: []
    }
  },
  mounted() {
    const input = this.text;
    this.$set(this, 'input', input);
    this.convert(input);
  },
  methods: {
    onInput(e) {
      this.convert(e.target.value);
    },
    convert(input) {
      const {ast, referenceIds} = parse(input);

      if (ast.status) {
        this.$set(this, 'elements', ast.value);
        const references = referenceIds.map(id => this.referenceMap[id] || { id: null });
        this.$set(this, 'references', references);
      } else {
        alert(ast.index + ast.expected);
      }
    }
  }
}
</script>

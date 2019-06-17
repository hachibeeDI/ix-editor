<template>
  <span>
    <IxBrokenReferenceComponent v-if="element.name === 'BrokenReference'" />
    <IxReferenceComponent v-if="element.name === 'Reference'" :element="element" />
    <IxWordComponent v-if="element.name === 'Word'" :element="element" />
    <IxParagraphComponent v-if="element.name === 'Paragraph'" :element="element" />
  </span>
</template>

<script>
import IxParagraphComponent from './IxParagraphComponent'
import IxBrokenReferenceComponent from './IxBrokenReferenceComponent'
import IxReferenceComponent from './IxReferenceComponent'
import IxWordComponent from './IxWordComponent'

export default {
  name: 'IxRecursiveComponent',
  props: {
    element: Object
  },
  components: {
    IxBrokenReferenceComponent,
    IxParagraphComponent,
    IxReferenceComponent,
    IxWordComponent
  }
}
</script>
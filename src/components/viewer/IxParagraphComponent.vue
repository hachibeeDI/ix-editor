<template>
  <p>
    <IxRecursiveComponent v-for="child in element.value" :key="child.id" :element="child" />
  </p>
</template>

<script>
export default {
  name: 'IxParagraphComponent',
  props: {
    element: Object
  },
  components: {
    IxRecursiveComponent: () => import('./IxRecursiveComponent')
  }
}
</script>
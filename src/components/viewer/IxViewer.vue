<template>
  <div class="ix-preview form-control">
    <span v-for="element in elements" :key="element.id">
      <IxRecursiveComponent :element=element />
    </span>
  </div>
</template>

<script>
import IxRecursiveComponent from './IxRecursiveComponent'

export default {
  name: 'IxViewer',
  props: {
    elements: Array
  },
  components: {
    IxRecursiveComponent
  }
}
</script>
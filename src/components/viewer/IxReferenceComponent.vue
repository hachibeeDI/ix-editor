<template>
  <span class="text-info ix-reference">[{{ element.value }}]</span>
</template>

<script>
export default {
  name: 'IxReferenceComponent',
  props: {
    element: Object
  }
}
</script>
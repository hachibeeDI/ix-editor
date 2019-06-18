<template>
  <ul class="ix-reference-list">
    <li v-for="(reference, index) in references" :key="index">
      <span class="text-info ix-reference-list-index">[{{ index + 1 }}]</span>
      <span>{{ reference.title }}</span>
      <span class="text-danger" v-if="reference.id == null">failed to fetch reference</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'IxReferenceList',
  props: {
    references: Array
  },
}
</script>


<template>
  <div>
    <header>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <strong>Ix Editor</strong>
          </a>
        </div>
      </div>
    </header>

    <main role="main">
      <div class="container">
        <div class="content">
          <IxEditor />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import IxEditor from './components/IxEditor.vue'

export default {
  name: 'app',
  components: {
    IxEditor
  }
}
</script>

<style scoped>
  .content {
    margin-top: 40px;
  }
</style>

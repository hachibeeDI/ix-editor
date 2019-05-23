<template>
  <div>
    <header>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <strong>Vue Editor</strong>
          </a>
        </div>
      </div>
    </header>

    <main role="main">
      <div class="container">
        <div class="content">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .content {
    margin-top: 40px;
  }
</style>

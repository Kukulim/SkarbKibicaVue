<template>
  <div id="app">
    <HeaderBar />
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from './components/header/header-bar.vue'

export default {
  name: 'App',
  components: 
  { HeaderBar }
}
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>

<template>
  <div>
    <div>
      <headerMenu/>
    </div>
    <router-view/>
  </div>
  

  <!--<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    
  </div>-->
</template>

<script>
import headerMenu from '@/components/headerMenu.vue'

export default {
  name: 'App',
  components: {
    headerMenu,
  }
}
</script>


<style lang="scss">
    // style menu
    @import './assets/styles/Menustyle.css';
</style>

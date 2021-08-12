<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <foot></foot>
    
  </div>
</template>

<script>
import foot from './components/content/foot.vue'
export default {
  name: 'App',
  components: {
    foot,
  }
}
</script>

<style>
 @import "./assets/css/normalize.css";


</style>

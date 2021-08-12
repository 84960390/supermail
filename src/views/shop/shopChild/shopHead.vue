<template>
<div class="shopHead">
  <tabhead class='pinkhead'>
     <div slot='center'>购物车({{$store.state.goodsShop.length}})</div>
  </tabhead>
</div>
  
</template>

<script>
import tabhead from 'components/common/tabhead.vue'
export default {
    name:'shopHead',
    components:{
        tabhead,
    }


}
</script>

<style scoped>

</style scoped>
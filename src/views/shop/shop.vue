<template>
<div class="shop">
  <shop-head></shop-head>
<scroll class="shopScroll">
  <shop-exhibit class="shopExhibit"></shop-exhibit>
</scroll>
<shop-submit></shop-submit>

</div>

</template>

<script>
import ShopHead from './shopChild/shopHead.vue';
import shopExhibit from './shopChild/shopExhibit.vue';
import shopSubmit from './shopChild/shopSubmit.vue';


import scroll from 'components/common/scroll/scroll.vue'
export default {
  name:'shop',
  components:{
    ShopHead,
    scroll,
    shopExhibit,
    shopSubmit,
  }

}
</script>
<style>
.shopScroll{
  height: calc(100vh - 50px - 50px - 30px);
  background-color: #fff;
  overflow: hidden;

}
/* .shopExhibit{
  
} */
</style>
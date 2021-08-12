<template>
  <div class="goods">
      <goods-item v-for="(item,index) in goods" :key="index" :goodsitem1='item'></goods-item>
  </div>
</template>
<script>
import goodsItem from './goodsItem.vue'
export default {
    name:'goods',
    props:{
        goods:{
            type:Array,
            default:[]
        }
    },
    components:{
        goodsItem
    },
    mounted(){
    }
}
</script>
<style>
.goods{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;  
}

</style>
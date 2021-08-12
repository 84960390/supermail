<template>
  <div class="cate">
        <tabhead class="catehead">
      <div slot='left'><img src="~assets/common/back.svg" alt=""></div>
       <div slot='center'>分类信息</div>
       <div slot='right'>更多</div>
    </tabhead>
      分类信息
      <input type="text">
      <div class="test" @click="test">点击显示</div>
  </div>
</template>

<script>
import tabhead from 'components/common/tabhead.vue';
export default {
  name:'category',
  data(){
    return {
      scroll:null,
    }
  },
  components:{
    tabhead,
  },
  methods:{
    test(){
      this.$toast.show('hahaha')
    }
  }
 

}
</script>

<style>
.catehead{
  color: #000;
}
</style>
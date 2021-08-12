<template>
  <footer1>
      <footerone path='/home'>
      <img slot='pic1' src="~assets/pic.png" alt="">
      <img slot='pic2' src="~assets/pic1.png" alt="">
        <span slot="txt">首页</span>
      </footerone>
      <footerone path='/category'>
            <img slot='pic1' src="~assets/pic.png" alt="">
      <img slot='pic2' src="~assets/pic1.png" alt="">
      <span slot="txt">分类</span>
      </footerone>
      <footerone path='/shop'>
            <img slot='pic1' src="~assets/pic.png" alt="">
      <img slot='pic2' src="~assets/pic1.png" alt=""><span slot="txt">购物车</span></footerone>
      <footerone path='/me'>
            <img slot='pic1' src="~assets/pic.png" alt="">
      <img slot='pic2' src="~assets/pic1.png" alt=""><span slot="txt">我的</span></footerone>
    </footer1>
</template>

<script>
import footer1 from '../common/footerbox.vue';
import footerone from '../common/footerone.vue';
export default {
    name:'foot',
    components: {
    footer1,
    footerone


  }

}
</script>

<style>

</style>
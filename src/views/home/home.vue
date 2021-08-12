<template>
  <div class="home">   
       <tabhead class='pinkhead'>
        <div slot='center'>购物街</div>
    </tabhead>
    <tabcontrol :category="['流行','新款','精选']" @select-click='selectEmit' 
    ref="tabcontrol" 
    :class="{fixed:isFixed}" 
    v-show="isFixed"></tabcontrol>
     
     <scroller class="scrollbox" ref="scrollbox" @controlscroll='controlscroll' @loadMore='loadMore'>
        <swiper :banners="banners" @swiperImageLoad='swiperImageLoad'></swiper>       
        <recommend :recommends="recommends"></recommend>
        <recommendimg/>
        <tabcontrol :category="['流行','新款','精选']" @select-click='selectEmit' ref="tabcontrol2"></tabcontrol>
        <div class="paper" ref="paper"><goods :goods="goods[recommendName[reCate]].list" ></goods></div>
     </scroller>
     <backtop v-show="isShow" @click.native="goTop"></backtop>
  </div>
</template>

<script>
import tabhead from 'components/common/tabhead.vue';
import {
  getHomeMultidata,
  getHomeGoods
  } from 'network/home.js';
import swiper from './childhome/swiper.vue'

import recommend from './childhome/recommend.vue';
import recommendimg from './childhome/recommendimg.vue';
import tabcontrol from './childhome/tabcontrol.vue';
import goods from 'components/common/goods/goodsList.vue';
import scroller from 'components/common/scroll/scroll.vue';
import backtop from 'components/content/backtop.vue';
import Backtop from '../../components/content/backtop.vue';
export default {
  name:'home',  
  components:{
    tabhead,
    swiper,
    recommend,
    recommendimg,
    tabcontrol,
    goods,
    scroller,
    backtop,
    Backtop

  },
  data(){
    return {
      reCate:0,
      recommendName:['pop','new','sell'],    
      banners:[],
      recommends:[],
      scroll:null,
      isShow:false,
      sends:'',
      boxOffsetY:0,
      tabOffsetTop:0,
      isFixed:false,
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    }
  },
  created(){
    // 请求banner和推荐数据
    this.getHomeMultidata()
    // 请求首页数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    // console.log(this.goods.pop.list)
   
  },
  activated(){

    this.$refs.scrollbox.scrollTo(0,this.boxOffsetY);
    this.$refs.scrollbox.scroll.refresh();
    // console.log(this.boxOffsetY)
  //   let that=this;
  //  setTimeout(function(){
  //     console.log(this.$refs.scrollbox.scroll)
  //  },3000)

  },
  deactivated(){
    this.boxOffsetY=this.$refs.scrollbox.scroll.y;
  },
  methods:{
    // 上拉加载更多
    getMoreData(){
      getHomeGoods(this.recommendName[this.reCate])

    },
    // 获取推荐与轮播图数据
    getHomeMultidata(){
       getHomeMultidata().then(res=>{ 
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
      // console.log(this.banners);
      // console.log(this.recommends);
    })
    },
    // 获取商品
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page+=1;
      this.$refs.scrollbox.scroll.finishPullUp();
    })
  },
  // 获取推荐板块中选中的什么内容
  selectEmit(item){
    this.reCate=item;
    this.$refs.tabcontrol.select=item;
    this.$refs.tabcontrol2.select=item;
    console.log(item);
 
  },
  // 获取滚动位置,控制backtop的显示与隐藏
  controlscroll(position){
   this.isShow=-position.y>=100;
   this.isFixed=-position.y>=this.tabOffsetTop;

  },
  // 滑动屏幕到顶部
  goTop(){
    this.$refs.scrollbox.scrollTo(0,0);

  },
  // 加载更多
  loadMore(){
    // console.log('到底了');
     this.getHomeGoods(this.recommendName[this.reCate]);
      this.$refs.scrollbox.scroll.refresh();

    
  },
  swiperImageLoad(){
    this.tabOffsetTop=this.$refs.tabcontrol2.$el.offsetTop;
    // console.log(this.tabOffsetTop);

  },
  // 防抖函数
  debounce(func,delay){
    let timer=null;
    return function(...args){
      if(timer){
        clearTimeout(timer)
      };
      timer=setTimeout(()=>{
        // console.log('首页图片加载完成')
        func.apply(this,args);
      },delay)
    }

  }
  
  },
  mounted(){
    // 监听商品列表中图片是否加载完成
   const refreshs=this.debounce(this.$refs.scrollbox.refresh,200);
     this.$bus.$on('itemImageLoad',()=>{
      refreshs();
    })
  }
}
</script>
<style>
.pinkhead{
  font-size: 20px;
  z-index: 100;
}
.fixed{
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
}
.home{
  position: relative;
  height: 100vh;
}
.scrollbox{
  position: absolute;
  width: 100%;
  top:50px;
  left: 0;
  height: calc(100vh - 100px);
  overflow: hidden;
}
.backtop{
  position:fixed;
  bottom: 75px;
  right: 10px;
}
body{
  width: 100%;
  height: 100%;
}
</style>
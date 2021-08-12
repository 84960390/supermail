<template>
<div class="detail">
    <detailhead @goDetail='goDetail' ref="detailHead"></detailhead>
    <scroller ref="detailScroll" class="detailScroll" @controlscroll='detailScroll'>
        <detailSwiper :detailData="topImages"  ref="detailSwiper"></detailSwiper>
        <detailBaseInfo :goodsInfo="goodsBase"></detailBaseInfo>
        <detail-store :shopInfo='shopInfo'></detail-store>
        <detail-goods :detailInfo='detailInfo'></detail-goods>
        <detail-data :detailData='detailData' ref="detailData"></detail-data>
        <goods-rate :goodsRate="goodsRate" ref="detailRate"></goods-rate>
        <div class="recommendText">推荐商品</div>
        <goods-list :goods='recommends' ref="detailRecommend"></goods-list>
    </scroller>
    <detail-foot @addShopCar='addShopCar'></detail-foot>
</div>
</template>
<script>
import{getDetail,goods,getRecommend} from 'network/detail';
import detailhead from './detailChild/detailhead.vue';
import detailSwiper from './detailChild/detailSwiper.vue';
import detailBaseInfo from './detailChild/detailBaseInfo.vue';
import detailStore from './detailChild/detailStore.vue';
import detailGoods from './detailChild/detailGoods.vue';
import detailData from './detailChild/detailData.vue';
import goodsRate from './detailChild/goodsRate.vue';
import goodsList from 'components/common/goods/goodsList.vue';
import detailFoot from './detailChild/detailFoot.vue';

import scroller from 'components/common/scroll/scroll.vue';
import GoodsList from '../../components/common/goods/goodsList.vue';
export default {
    name:'detail',
    data(){
        return {
            iid:null,
            topImages:[],
            goodsBase:{},
            shopInfo:{},
            detailInfo:{},
            detailData:{},
            goodsRate:{},
            recommends:[],
            themesTopY:[],
            goodsInfo:{},
            shopGoods:[],

            
        }

    },
    // updated(){
    //       //   获取各个元素距离顶部的高度
    //     this.themesTopY=[];
    //     this.themesTopY.push(this.$refs.detailSwiper.$el.offsetTop);
    //     this.themesTopY.push(this.$refs.detailData.$el.offsetTop);
    //     this.themesTopY.push(this.$refs.detailRate.$el.offsetTop);
    //     this.themesTopY.push(this.$refs.detailRecommend.$el.offsetTop);
    //     console.log(this.themesTopY);

    // },
    components:{
        detailhead,
        detailSwiper,
        detailBaseInfo,
        scroller,
        detailStore,
        detailGoods,
        detailData,
        goodsRate,
        goodsList,
        GoodsList,
        detailFoot,

    },
    created(){
        // 传递商品各类数据
        this.iid=this.$route.params.iid;
        getDetail(this.iid).then(res=>{
            const data=res.result;
            this.topImages=data.itemInfo.topImages;
            this.goodsBase=new goods(data.itemInfo,data.columns,data.shopInfo.services);
            this.shopInfo=data.shopInfo;
            this.detailInfo=data.detailInfo;
            this.detailData=data.itemParams;
            this.goodsRate=data.rate;
            this.itemInfo=data.itemInfo;
            if(data.rate.cRate>0){
                this.goodsRate=data.rate;               
            }
            // console.log(data);
        });
        getRecommend().then(res=>{
            this.recommends=res.data.list;
        })

    },
    methods:{
          // 防抖函数
         debounce(func,delay){
           let timer=null;
           return function(...args){
             if(timer){
               clearTimeout(timer)
             };
             timer=setTimeout(()=>{
               func.apply(this,args);
             },delay)
           }

         },
         goDetail(index){
             this.$refs.detailScroll.scrollTo(0,-this.themesTopY[index],300);
         },
         getdetailGoodsOffset(){
         //   获取各个元素距离顶部的高度
        this.themesTopY=[];
        
        if(this.$refs.detailSwiper){
            this.themesTopY.push(this.$refs.detailSwiper.$el.offsetTop);
        }
        if(this.$refs.detailData){
            this.themesTopY.push(this.$refs.detailData.$el.offsetTop);
        }
        if(this.$refs.detailRate){
            this.themesTopY.push(this.$refs.detailRate.$el.offsetTop);
        }       
        if(this.$refs.detailRecommend){
           this.themesTopY.push(this.$refs.detailRecommend.$el.offsetTop); 
        }      
        // console.log('获取完成'+this.themesTopY);
         },
         detailScroll(position){
             let posotionY=-position.y;
             if(posotionY<this.themesTopY[1]){
                    this.$refs.detailHead.nowClick=0;                  
             }else if(posotionY>=this.themesTopY[1]&&posotionY<this.themesTopY[2]){
                    this.$refs.detailHead.nowClick=1;
             }else if(posotionY>=this.themesTopY[2]&&posotionY<this.themesTopY[3]){
                  this.$refs.detailHead.nowClick=2;
             }else{
                 this.$refs.detailHead.nowClick=3;

             }
         },
        //  商品添加购物车
         addShopCar(){
             const product={};
             product.desc=this.itemInfo.desc,
             product.title=this.itemInfo.title,
             product.price=this.itemInfo.lowNowPrice,
             product.img=this.itemInfo.topImages[0],
             product.iid=this.itemInfo.iid;
             product.checked=true;
             this.$store.dispatch('addShop',product).then(res=>this.$toast.show(res));
             console.log(this.$store.state.goodsShop);
         }
    },
    mounted(){
        //  // 监听商品列表中图片是否加载完成
         const refreshs=this.debounce(this.$refs.detailScroll.refresh,200);
         const detailRenovate=this.debounce(this.getdetailGoodsOffset,1000);
           this.$bus.$on('detailImgLoad',()=>{
            //    console.log('事件完成了');
            refreshs();
            detailRenovate();
            
            
       
          })
      

    }
  
}
</script>

<style>
.detail{
    height: 100vh;
    width: 100%;
}
.detailScroll{
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
     height: calc(100% - 50px - 50px);   
    background-color: #fff;
    overflow: hidden;
}
.recommendText{
    font-size: 16px;
    padding-left:10px;
    margin-bottom: 15px;
}
</style>
<template>
<div class="detailGoods">
     <div class="deailDescribe" >
         <div class="start"></div>
         <br/>
         <div class="textDescribe">{{detailInfo.desc}}</div>
         <br/>
         <div class="end"></div>
         </div>
  <div class="goodsBox" v-for="(item,index) in detailInfo.detailImage" :key="index">
      <div class="picDiscribe">{{item.key}}</div>
        <div class="goodsPic" v-for="(item1,index1) in item.list" :key="index1">
            <img :src="item1" alt="" @load="imgLoad">

        </div>

  </div>
</div>
  
</template>

<script>
export default {
    name:'detailGoods',
    data(){
        return {
            isLoad:false,
        }

    },
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgLoad(){
            let a=1;
                this.$bus.$emit('detailImgLoad');
            }
    }

}
</script>

<style>
.detailGoods{
    padding: 20px 0;
    border-bottom: 3px solid #ddd;
}
.goodsBox{
    width: 100%;
    margin-bottom: 20px;
}
.goodsBox img{
    width: 100%;
}
.deailDescribe .start{
    float: left;
    clear: both;
}
.deailDescribe .end{
    float: right;
    clear: both;
}
.deailDescribe .start::before,
.deailDescribe .end::after{
    content: '';
    display: block;
    position: relative;
    top: -2px;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #111;

}
.deailDescribe{
    padding: 0 10px;
    font-size: 14px;
    margin-bottom: 20px;
}
.deailDescribe .start,
.deailDescribe .end{
    width: 30%;
    height: 1px;
    background-color: #ccc;
}
.picDiscribe{
    padding: 0 10px;
    color: #666;
    margin-bottom: 10px;
}
</style>
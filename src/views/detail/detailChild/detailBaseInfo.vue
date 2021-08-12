<template>
<div class="detailBaseInfo" v-if="goodsInfo">
  <div class="baseBox">
    <p class="title">{{goodsInfo.desc}}</p>
    <div class="price">
        <span class="nowPrice">{{goodsInfo.price}}</span>
        <span class="oldPrice">{{goodsInfo.oldPrice}}</span>
        <span v-if="goodsInfo.discount" class="discount" :style="{backgroundColor:goodsInfo.discountColor}">{{goodsInfo.discount}}</span>
    </div>
    <div class="introduce">
        <span>{{goodsInfo.columns1}}</span>
        <span>{{goodsInfo.columns2}}</span>
        <span>{{goodsInfo.columns3}}</span>
    </div>
    <div class="serve">
        <span v-for="(item,index) in goodsInfo.services" :key="index" v-show="index!=goodsInfo.services.length-1">
            <img :src="goodsInfo.services[index].icon" alt="">
            <span class="serveName">{{goodsInfo.services[index].name}}</span>
        </span>
    </div>

  </div>

</div>
  
</template>

<script>
export default {
    name:'detailBaseInfo',
    data(){
        return {         
        }

    },
    props:{
        goodsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    created(){
        // this.colunmn=this.goodsInfo.colunmns;
    }

}
</script>

<style>
.title{
    font-size: 17px;
}
.baseBox{
    border-bottom: 2px solid #ccc;
}
.nowPrice{
    font-size: 18px;
    color: rgb(241, 135, 135);
    margin-right: 10px;
}
.oldPrice{
    font-size: 14px;
    color: #ccc;
    text-decoration: line-through;
    margin-right: 10px;
}
.discount{
    position: relative;
    top: -8px;
    left: 0;
    font-size: 12px;
    color: #fff;
    padding: 0 4px;
    border-radius: 8px;
}
.introduce{
    display: flex;
    font-size: 13px;
    box-shadow: 0px 1px 1px #eee;
    padding-bottom: 5px;
    margin-top: 20px;
}
.introduce span{
     flex:1;
     text-align: center;
    padding: 0 8px;

}
.introduce div:nth-child(2){
    text-align: center;
}
.introduce div:last-child{
    text-align: right;
}
.serve {
     display: flex;
    text-align: center;
    height: 50px;
    box-shadow: 0px 3px 2px #eee;
}
.serve span{
 flex: 1;
 line-height: 50px;
 font-size: 12px;
 color: black;
}
.serve img{
    width: 10px;
    height: 10px;
}
</style>
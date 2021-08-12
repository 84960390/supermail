<template>
<div class="goodsRate">
    <div class="goodsRateBox">
          <div class="rateTop">
        用户评价
        <span class='moreRate'>更多</span>
    </div>
    <div class="hasRate" v-if="goodsRate.list">
         <div class="userRate">
            <img :src="goodsRate.list[0].user.avatar" alt="">
            <span>{{goodsRate.list[0].user.uname}}</span>
    </div>
    <div class="rateContent">{{goodsRate.list[0].content}}</div>
   <div class="rateBottom">
       <span class="rateDate"> {{goodsRate.list[0].created |dateComputed}}</span>
       <span class="selledGoods">{{goodsRate.list[0].style}}</span>
   </div>
    </div>
    <div class="notRate" v-else>
        该商品没有评价
    </div>
    </div>
</div>
  
</template>

<script>
export default {
    name:'goodsRate',
    props:{
        goodsRate:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        dateComputed(rateTime){
            let data=new Date(rateTime*1000)
            let year=data.getFullYear();
            let mounth=data.getMonth()+1;
            let day=data.getDate();
            let hour=data.getHours();
            let minute=data.getMinutes();
            let secend=data.getSeconds();
            return year+'-'+mounth+'-'+day+'    '+hour+':'+minute+':'+secend;

        }
    }



}
</script>

<style>
.goodsRate{
    width: 100%;
    padding: 20px 0;
    margin-bottom: 20px;
    border-bottom: 3px solid #ddd;
}
.goodsRateBox{
    padding: 0 20px;
}
.rateTop{
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #ccc;
}
.moreRate{
    float: right;
    font-size: 14px;
    padding-right: 10px;
    position: relative;
}
.moreRate::after{
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    right: 3px;
    width: 8px;
    height: 8px;
    border-top: 1px solid #222;
    border-right: 1px solid #222;
    transform: rotate(45deg);
}
.userRate{
    padding-top: 20px;
}
.userRate img{
    width: 50px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 30px;
}
.userRate span{
    font-size: 16px;
}
.rateContent{
    padding: 15px 0;
    font-size: 15px;
    color: #aaa;
}
.rateBottom{
    font-size: 13px;
    color: #ccc;
}
.rateBottom .rateDate{
    margin-right: 15px;
}
.notRate{
    padding-top: 30px;
    text-align: center;
    font-size: 16px;
    color: #ccc;
}
</style>
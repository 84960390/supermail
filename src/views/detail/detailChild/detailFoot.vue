<template>
  <div class="detailFoot">
    <div class="left">
      <div class="consult"><div class="bgc"></div><div class="detailTxt">客服</div></div>
      <div class="retail"><div class="bgc"></div><div class="detailTxt">店铺</div></div>
      <div class="collect"><div class="bgc"></div><div class="detailTxt">收藏</div></div>
    </div>
    <div class="right">
      <div class="addShopCar" @click="shopCarClick">加入购物车</div>
      <div class="purchase">购买</div>
    </div>
  </div>
  
</template>

<script>
export default {
    name:'detailFoot', 
    props:{
      goodsInfo:{
        type:Object,
        default(){
          return {}
        }
      }

    },
    methods:{
      shopCarClick(){
        this.$emit('addShopCar');

      }
    }


}
</script>

<style scoped>
.detailFoot{
    height: 50px;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 3;
    bottom: 0;
    left: 0;
}
.left,
.right{
  flex: 1;
  display: flex;
  justify-content: space-between;

}
.left>div,
.right>div{
  text-align: center;
  flex: 1;
  height: 100%;
}
.left .bgc{
  background:url(~assets/img/details/detailBottom.png)  no-repeat;
  background-size: 100% auto;
}
.addShopCar{
  line-height: 50px;
  background-color: rgb(226, 167, 59);
}
.left .detailTxt{
  margin-bottom: 0px;
  font-size: 12px;
}
.purchase{
  line-height: 50px;
  background-color: rgb(231, 103, 103);
}
.bgc{
  width: 30px;
  height: 30px;
  margin-left: 50%;
  margin-top: 5px;
  transform: translateX(-50%);
}
.retail .bgc{
  background-position: 0 -133px;
}
.consult .bgc{
  background-position: 0 -72px;
}


</style scoped>
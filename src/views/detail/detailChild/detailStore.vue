<template>
<div class="detailStores">
<div class="logo">
    <img :src="shopInfo.shopLogo" alt="">
    <span class="shopName">{{shopInfo.name}}</span>
</div>
<div class="detailStore">
    <div class="storeInformation">
        <div class="infoBox">
            <div class="infoInner">
                <span>{{shopInfo.cSells | sellNum}}</span>
                <span>总销量</span>
            </div>
            <div class="infoInner">
                <span>{{shopInfo.cGoods}}</span>
                <span>全部宝贝</span>
            </div>
        </div>
        <div class="infoBox">
            <table cellspacing='12'>
                <tr v-for="(item,index) in shopInfo.score" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.score}}</td>
                     <td :class="{isBetter:item.isBetter,isBad:!item.isBetter}">{{item.isBetter? '高':'低'}}</td>
                </tr>
            </table>
        </div>

    </div>
    <div class="goRetailer">
        <span class="goStore">
            进店逛逛
        </span>
    </div>
</div>
</div>
  
</template>

<script>
export default {
    name:'detailStore',
    data(){
        return {
            shop:{},
        }

    },
    props:{
        shopInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        sellNum(value){
            if(value>=10000){
                let a=value/10000
                return a.toFixed(1)+'万';
            }else{
                return value;
            }

        }

    }
}
</script>

<style>
.logo{
    height: 50px;
    padding: 20px 0 0 10px;
    color: #bbb;
}
.logo img{
    height: 100%;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
}
.storeInformation{
    position: relative;
    left: 0;
    top: 0;
    margin-top: 30px;
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-around;
}
.storeInformation .infoBox{
    flex: 1;
    display: flex;
}
.storeInformation .infoBox:nth-child(1){
    position: relative;
    top: 0;
    left: 0;
    color: #333;
    padding-top: 15px;
}
.storeInformation .infoBox:nth-child(1)::after{
    content:'';
    position: absolute;
    top: 20px;
    right: -1px;
    width: 2px;
    height: 50px;
    background-color: #ddd;

}
.infoBox div{
    flex: 1;
}
.storeInformation .infoInner{
    text-align: center;

}
.storeInformation .infoInner span{
    display: block;
    padding-top: 10px;
}
.isBetter{
    color: #fff;
    background-color: #0e0;
}
.isBad{
    color: #fff;
    background-color: #e00;
}
.infoBox table{
    position: absolute;
    right: 0;
    top: 0px;
}
.infoBox tr td{
    padding:0 6px 0;
    margin-top: 3px;
    font-size: 15px;
}
.goRetailer{
    text-align: center;
    padding-top: 30px;
}
.goRetailer .goStore{
    font-size: 16px;
    padding: 4px 20px;
    background-color: #ccc;
    border-radius: 6px;
}
.detailStores{
    height: 240px;
    border-bottom:2px solid #eee;
}

</style>
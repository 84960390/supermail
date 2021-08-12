<template>
<div class="shopgoods">
    <div class="goodsItem" v-for="(item,index) in $store.state.goodsShop" :key="index">
        <div class="left">
           <div class="goodsCheck">
               <item-checkbox ref="itemCheckbox" @click.native="itemCheckboxClick(item)" :itemChecked='item.checked'></item-checkbox>
 
           </div>
        </div>
        <div class="center">
            <img :src="item.img" alt="">
        </div>
        <div class="right">
            <div class="titles">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="prices1">
                <div class="onePrice">￥{{item.price}}</div>
                <div class="shopNum">X{{item.num}}</div>
            </div>
        </div>
</div>
</div>

  
</template>

<script>
import itemCheckbox from 'components/common/checkbox/checkbox.vue';
export default {
    name:'shopExhibit',
    components:{
        itemCheckbox
    },
    computed:{
        aaa(){
            
        }
    },
    methods:{
        itemCheckboxClick(item){
            item.checked=!item.checked;
            this.$refs.itemCheckbox.isChecked=!this.$refs.itemCheckbox.isChecked;
        }
    }


}
</script>

<style scoped>
.goodsItem{
    height: 100px;
    width: 100%;
    border-bottom: 1px solid #aaa;
    display: flex;
    justify-content: space-around;
}
.left{
    width: 20px;
}
.goodsCheck{
    margin-top: 50px;
    margin-left: 50%;
    transform: translate(-50%,-50%);
}
.center{
    flex: 30%;
}
.right{
    flex: 70%;
    padding-right: 5px;
    overflow: hidden;
    
}
.right>div{
    width: 100%;
}
.goodsItem>div{
    height: 100%;
}
.center img{
    height: 90%;
    margin-left: 50%;
    margin-top: 50px;
    transform: translate(-50%,-50%);
}
.titles,
.desc{
    width: 100%;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.titles{
    font-size: 18px;
    height: 30px;
    line-height: 30px;

}
.desc{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #777;
}
.prices1{
    height: 30px;
    margin-top: 5px;
    line-height: 30px;
}
.onePrice{
    float: left;
    font-size: 20px;
    color: rgb(228, 117, 84);
}
.shopNum{
    float: right;
    font-size: 16px;
}

</style scoped>
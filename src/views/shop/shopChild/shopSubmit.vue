<template>
<div class="shopSubmit">
    <div class="submitBox">
       <div class="selectAlls">
          <submit-checkbox class="subCheck" @click.native="subCheck" :itemChecked='allCheck'  ref="allSubmit"></submit-checkbox>
           <span>全选</span>
       </div>
       <div class="sumPrice">
           <span>合计:￥{{sumPrice}}</span>
       </div>
       <div class="toSubmit" @click="checkZero">
           去结算({{goodsCheckedNum}})
       </div>

    </div>

</div>
  
</template>

<script>
import submitCheckbox from 'components/common/checkbox/checkbox.vue';
export default {
    name:'shopSubmit',
    data(){
        return {
            checkedNum:0,
        }
    },
    components:{
        submitCheckbox,
    },
    computed:{
        // 计算总价
       sumPrice(){
           let sumprice=this.$store.state.goodsShop.filter(o=>o.checked==true);
           let price=0;
           if(sumprice){
               for(let i=0;i<sumprice.length;i++){
               price+=sumprice[i].price*sumprice[i].num;
           }
           }
           return price.toFixed(2);
       },
    //    已选择商品的数量
       goodsCheckedNum(){
           this.checkedNum=this.$store.state.goodsShop.filter(o=>o.checked==true).length;
           return this.checkedNum;
       },
    //    全选
       allCheck(){
           let isCheck=this.$store.state.goodsShop.find(o=>o.checked==false);
           let a=isCheck? false:true;
           if(this.$store.state.goodsShop.length==0) a=false;
           return  a
       }
    },
    methods:{    
        // 点击全选按钮
         subCheck(){
                for(let i=0;i<this.$store.state.goodsShop.length;i++){
                    if(this.$refs.allSubmit.itemChecked){
                        this.$store.state.goodsShop[i].checked=false;
                    }else{
                        this.$store.state.goodsShop[i].checked=true;
                    }                   
                }           
        },
        checkZero(){
            if(this.checkedNum==0){
                this.$toast.show('你当前没有选择任何商品');
            }
        }
    },
}
</script>

<style scoped>
.shopSubmit{
    position: fixed;
    bottom: 50px;
    left: 0;
    width: 100%;
}
.submitBox{
    width: 100%;
    height: 30px;
    background-color: #888;
    line-height: 30px;
    padding: 0 0 0 10px;
    display: flex;
}
.selectAlls{
    margin-right: 20px;
    width: 50px;
    display: flex;
    align-items: center;
}
.sumPrice{
    flex: 1;
}
.toSubmit{
    width: 100px;
    background-color: rgb(255, 72, 0);
    text-align: center;
}

</style>
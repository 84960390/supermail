<template>
<div class="detailData" v-if="detailData.rule">
    <div class="goodsRule">
        <div class="goodsDataName">{{detailData.rule.key}}</div>
            <div class="detailTables" v-for="(item,index) in detailData.rule.tables" :key="index">
                <table cellspacing='0'>
                    <tr v-for="(item1,index1) in item" :key="index1">
                        <td v-for="(item2,index2) in item1" :key="index2"> {{item2}}</td>
                    </tr>
                </table>

            </div>
            <div class="ruleAlert">{{detailData.rule.disclaimer}}</div>
    </div>
    <div class="goodsDataInfo">
        <div class="goodsDataName">{{detailData.info.key}}</div>
        <table cellspacing='0'>
            <tr v-for="(item,index) in detailData.info.set" :key="index">
                <td class="goodsInfoKey">{{item.key}}</td>
                <td style="color:pink">{{item.value}}</td>
            </tr>
        </table>

    </div>


</div>
  
</template>

<script>
export default {
    name:'detailData',
    data(){
        return {
            detailData2:{},
        }

    },
    props:{
        detailData:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    watch:{
        detailData:{
            handler:function(newVal){
                this.detailData2=newVal;
            
        }
        }
    }
}
</script>

<style>
.detailData{
    padding: 20px 10px;
    padding-right: 10px;
    width: 100%;
    border-bottom: 3px solid #ddd ;
}
.goodsRule{
    padding-bottom: 30px;
    border-bottom: 2px solid #ddd;

}
.goodsDataInfo{
    padding-bottom: 10px;

}
.goodsDataName{
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
}
.detailTables table{
    width: 100%;
    font-size: 14px;
    text-align: left;
}
.detailTables tr td:nth-child(1){
    width: 20vw;

}
.detailTables tr td,
.goodsDataInfo tr td{
    padding: 7px 3px;
    border-bottom: 1px solid #ddd;
}
.ruleAlert{
    font-size: 13px;
    margin-top: 5px;
    overflow: hidden;
    color: red;
}
.goodsDataInfo{
    padding-top: 20px;
    width: 100%;
}
.goodsDataInfo table{
    font-size: 14px;
    width: 100%;
}
.goodsDataInfo .goodsInfoKey{
   padding-right: 20px;
}
</style>
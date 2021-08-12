<template>
<div class="detailhead">
    <tabhead>
        <div slot="left" @click="backClick"><img src="~assets/common/back.svg" class="detailLeft"></div>
        <div slot="center" class="title">
            <div v-for="(item,index ) in titles" :key="index" class="title-item" @click="titleClick(index)" :class="{clicked:index===nowClick}">{{item}}</div>
        </div>
    </tabhead>
</div>
  
</template>

<script>
import tabhead from 'components/common/tabhead.vue'
export default {
    name:'detailhead',
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            nowClick:0,
        }

    },
    components:{
        tabhead,
    },
    methods:{
        titleClick(index){
            this.nowClick=index;
            this.$emit('goDetail',index);

        },
        backClick(){
            this.$router.go(-1);

        }
    }

}
</script>

<style>
.detailLeft{
    margin-top: 13px;
}
.title{
    display: flex;
    justify-content: space-around;
    color: #000;
    font-size: 15px;
}
.title-item{
    flex: 1;
}
.clicked{
    color: pink;
}

</style>
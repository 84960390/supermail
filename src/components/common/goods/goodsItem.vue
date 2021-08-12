<template>
<div class="goodsItem">
    <div class="goodsItemBox">
        <div class="goDetail" @click="goDetail">
            <img :src="showPic" alt="" @load='imageLoad'>
            <p>{{goodsitem1.title}}</p>
            <div class="fonts">
                <span class="price">{{goodsitem1.price}}</span>
                <span class="view">☆{{goodsitem1.cfav}}</span>
            </div>
        </div>
    </div>

</div>
  
</template>

<script>
export default {
    name:'goodsItem',
    props:{
        goodsitem1:{
            type:Object,
            default:{}
        }
    },
    computed:{
        showPic(){
            return this.goodsitem1.image ||  this.goodsitem1.show.img;
        }
    },
    methods:{
        imageLoad(){
            // console.log('图片加载');
            if(this.$route.path.indexOf('/home')!=-1){
                 this.$bus.$emit('itemImageLoad');
            }else if(this.$route.path.indexOf('/detail')!=-1){
                this.$bus.$emit('detailImgLoad');
            }
           
        },
        goDetail(){
            if(this.goodsitem1.iid){
                this.$router.push('/detail/'+this.goodsitem1.iid);
            }else{
                this.$router.push('/detail/'+this.goodsitem1.item_id);
            }
            
        }
    },
}
</script>

<style>
.goodsItem{
    width:48%;
}
.goodsItemBox img{
    width: 100%;
    border-radius: 5px;
}
.goodsItemBox a{
    text-decoration: none;
    color: #000;
}
.goodsItemBox p{
    padding: 0;
    margin: 0;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;   
    white-space: nowrap;
    margin-bottom: 4px;
}
.goodsItemBox .price{
    color: pink;
    margin-right: 10px;
}
.goodsItemBox .fonts{
    text-align: center;

}

</style>
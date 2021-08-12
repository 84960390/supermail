<template>
<div class="detailSwiper">
    <Swiper class="detailSwiperBox">
    <SwiperItem v-for="(item,index) in detailData" :key="index">
        <img :src="item" alt="">
    </SwiperItem>
</Swiper>
</div>
  
</template>

<script>
import {Swiper,SwiperItem }from 'components/common/swper/index';
export default {
    name:'detailSwiper',
    props:{
        detailData:{
            type:Array,
            default(){
                return []
            }
        }

    },
    components:{
        Swiper,
        SwiperItem

    }
}
</script>

<style>
.detailSwiperBox{
    height: 300px;
    overflow: hidden;
}

</style>
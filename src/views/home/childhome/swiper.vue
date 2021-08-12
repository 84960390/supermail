<template>
  <Swiper>
          <SwiperItem v-for="(item,i) in banners" :key='i'>
            <a :href="item.link">
              <img :src="item.image" alt="" @load="swiperLoad">
            </a>

          </SwiperItem>
        </Swiper>
</template>

<script>
import {Swiper,SwiperItem }from 'components/common/swper/index';

export default {
    name:'swiper',
    data(){
      return {
        isLoad:false,
      }
    },
    props:{
        banners:{
            type:Array,
            default(){
              return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
      swiperLoad(){
        if(!this.isLoad){
          this.$emit('swiperImageLoad');
          this.isLoad=true;
        }
      }
    }

}
</script>

<style>

</style>
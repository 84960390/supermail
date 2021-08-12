<template>
<div class="box" ref="outbox">
    <div class="inner">
        <slot></slot>
    </div>
</div>
  
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:'scroll',
    data(){
        return {
            scroll:null,
        }
    },
    props:{
        probeType:{
            type:Number,
            default:3
        },
        pullUpLoad:{
            type:Boolean,
            default:false,
        }


    },
    mounted(){
        this.scroll=new BScroll(this.$refs.outbox,{
            probeType:3,
            pullUpLoad:true,
            click:true,
        })
            this.scroll.on('scroll',(position)=>{
            this.$emit('controlscroll',position);
        })
         if(this.probeType==2||this.probeType==3){
              this.scroll.on('pullingUp',()=>{
              this.$emit('loadMore',)
              this.scroll.finishPullUp();

             })
         }
         

        
    },
    methods:{
        scrollTo(x,y,time=300){
             this.scroll.scrollTo(x,y,time);
        },
        refresh(){
            this.scroll.refresh();

        }
        
    }


}
</script>

<style>

</style>
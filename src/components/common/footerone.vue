<template>
<div class="dd" @click='footclick'>
    <div class="pic">
        <slot name='pic1' v-if='ispath'><img src="~assets/pic.png"></slot>
        <slot name='pic2' v-else><img src="~assets/pic1.png"></slot>
    </div>
    <div class="txt" :class='{pink:!ispath}'><slot name='txt'>首页</slot></div>
</div>
  
</template>

<script>
export default {
    name:'footerone',
    props:{
        path:String
    },
    data(){
        return {
           nowpath:false
        };

    },
    computed:{
        ispath(){
            if(this.$route.path==this.path){
                return false;              
            }else{
                return true;
            }
        }

    },
    methods:{
        footclick(){
            if(this.$route.path!=this.path)
            {
                this.$router.replace(this.path)
            }
        }
    }

}
</script>

<style>
.pic{
    text-align: center;
    height: 15px;
    margin-top: 8px;
}
.pic img{
    height: 25px;
    
}
.txt{
    margin-top: 10px;
    font-size: 14px;
}
.pink{
    color: deeppink;
}
</style>
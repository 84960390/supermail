<template>
  <div class="toast" v-show="isShow">
      <span class="toastTxt" >{{inner}}</span>
  </div>
</template>

<script>
export default {
    name:'toast',
    data(){
        return {
            inner:666,
            isShow:false,
        }
    },
    methods:{
        show(txt,duration=2000){
            let timer=null;
            this.inner=txt;
            this.isShow=true;
            if(timer){
               clearTimeout(timer);
            }
             timer=setTimeout(()=>{
             this.isShow=false;
             this.inner='';
            },duration)
           


        }
    }


}
</script>

<style scoped>
.toast{
    position:fixed;
    bottom:200px;
    left: 50%;
    transform: translateX(-50%);
    background-color:rgba(0,0,0,.7);
    border-radius: 13px;
    z-index: 9;
}
.toastTxt{
    font-size: 16px;
    line-height: 16px;
    padding: 5px 10px;   
    white-space: nowrap;
    color:#fff;
}
</style>
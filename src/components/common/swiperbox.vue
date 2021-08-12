<template>
  <div class="swiperbox" @touchstart="touchbegin()" @touchend="touchended()" @touchmove='touchpic()'>
      <div class="swiperhome">
          <swiperone v-for="(item,i) in banners" :key="i" class='newq'><img :src='item.image'></swiperone>     
         
      </div>
      <div class="radio">
         <div v-for="(items,index) in rounds" :key='index' @touchend="changePic(index)"></div>
      </div>
  </div>
</template>
<script>
import swiperone from './swiperone.vue';
export default {
    name:'swiperbox',
    props:{
        banners:{
            type:Array,
            default:[]
        }
    },
    components:{
        swiperone,
    },
    data(){
        return {
            timer:'',
            change:'',
            length:0,
            // 存放每一张图片的盒子
            box1:'',
            // 最外部的盒子
            outbox:'',
            a:0,
            page:0,
            movelength:0,
            picnum:0,
            screenWidth:0,
            startDictionX:0,
            endDictionX:0,
            originX:0,
            rounds:[],
            arr:[],
            yuandain:[],
            firstPic:''
        }
    },
    // html渲染完成后执行该函数
    mounted(){
        const that=this;
        this.outbox=document.querySelector('.swiperbox')
        this.timer=setInterval(this.slide,3000);
        this.box1=document.querySelector('.swiperhome');
        // 复制第一张图片到最后一张
        // this.firstPic=document.querySelectorAll('.swiperone')[0].cloneNode(true);
        // this.box1.appendChild(this.firstPic);

        this.pic=document.querySelectorAll('.swiperone');
        this.length=this.pic[0].offsetWidth;
        this.screenWidth=this.box1.offsetWidth;
        for(let i=0;i<this.pic.length;i++){
            if(document.body.clientWidth<=600){
            this.pic[i].style.width=document.body.clientWidth+'px';
            this.outbox.style.width=document.body.clientWidth+'px';
            }else{
                this.pic[i].style.width=600+'px';
                this.outbox.style.width=600+'px';

            }
            this.rounds.push(this.pic[i]);
            if(i>=this.pic.length-1){
                this.rounds.pop();

            }
            
        } 
        this.yuandian=document.querySelector('.radio').querySelectorAll('div');
        // 检测屏幕变化
        // window.onresize=()=>{
        //     for(let i=0;i<that.pic.length;i++){
        //     if(document.body.clientWidth<=600){
        //     that.pic[i].style.width=document.body.clientWidth+'px';
        //     that.outbox.style.width=document.body.clientWidth+'px';
        //     }else{
        //         that.pic[i].style.width=600+'px';
        //         that.outbox.style.width=600+'px';

        //     }
        //     that.picnum=0;
        //     that.controlRadio();
        //     that.clearTime();
        //     clearInterval(that.change);
        //     that.box1.style.marginLeft=that.picnum*that.outbox.offsetWidth*(-1)+'px';
        //     that.a=0;
        //     that.settime();
            
            
        // } 
        // }

    },
    methods:{
        slide(){  
            this.change=setInterval(this.move,100) ;
        },
        // 清除3s定时器
        clearTime(){
            clearInterval(this.timer);
        },
        touchbegin(){ 
            this.clearTime();
            clearInterval(this.change);
             this.movelength=0;
             this.length=0;
            this.startDictionX=event.targetTouches[0].clientX;
            this.originX=this.box1.offsetLeft;
        },
        touchended(){
            this.settime();
            this.endDictionX=event.changedTouches[0].clientX;
            this.moveEnd();
            this.extent();
            this.controlRadio();
        },
        // 重置3s定时器
        settime(){
            this.clearTime();
            this.timer=setInterval(this.slide,3000);
        },
        // 最后一张轮播图移动完成后，外层盒子进行复原
        recovery(){
            if(this.picnum>=this.pic.length){
                this.picnum=0;
                this.box1.style.marginLeft=0;
            }
        },
        // 范围检测,超过滑动范围复位
        extent(){
            if(this.box1.offsetLeft>0){
                    this.box1.style.marginLeft=0;
            }else if(this.box1.offsetLeft*(-1)>=this.outbox.offsetWidth*(this.pic.length-1)&&this.box1.offsetLeft*(-1)<=this.outbox.offsetWidth*(this.pic.length)){
                    this.box1.style.marginLeft=0;
                    this.picnum++;
                    this.recovery();
             }    
        },
        // 拖动完成，判断图片走向
        moveEnd(){
            if(this.startDictionX>this.endDictionX){
                if(this.startDictionX-this.endDictionX>=this.outbox.offsetWidth/3){
                    this.picnum++;
                    this.pages();
                }
            }else{
                if(this.endDictionX-this.startDictionX>=this.outbox.offsetWidth/3)
                {
                    this.picnum--;
                    this.pages();
                }
            }
            this.box1.style.marginLeft=this.picnum*this.outbox.offsetWidth*(-1)+'px';
        },
        // 轮播图页码矫正
        pages(){
            if(this.picnum<0){
                this.picnum=0;
            }else if(this.picnum>=this.pic.length-1){
                this.picnum=this.pic.length-1;

            }
            // this.controlRadio();

        },
        // 手动点击小圆点
        changePic(index){
            this.clearTime();
            clearInterval(this.change);           
            this.a=0;
            this.picnum=index;
             this.movelength=0;
             this.length=0;
        
            this.controlRadio();
            this.settime();                                                                                                                           

        },
        // 圆点控制
        controlRadio(){
            for(let i=0;i<this.rounds.length;i++){
                document.querySelector('.radio').querySelectorAll('div')[i].style.backgroundColor='#fff';
            }
            document.querySelector('.radio').querySelectorAll('div')[this.picnum].style.backgroundColor='yellowgreen';

        },
        // 拖动图片
        touchpic(){                     
            // console.log(this.box1.offsetLeft);
            if(this.box1.offsetLeft*(-1)<=this.outbox.offsetWidth*(this.pic.length-1)){
                this.box1.style.marginLeft=this.originX-(this.startDictionX-event.targetTouches[0].clientX)+'px';
            }else if(this.box1.offsetLeft*(-1)>=this.outbox.offsetWidth*(this.pic.length-1)&&this.startDictionX-event.targetTouches[0].clientX<0){
                this.box1.style.marginLeft=this.originX-(this.startDictionX-event.targetTouches[0].clientX)+'px';
            }  
        },
        move(){
            // 轮播图分十步移动，速度逐渐变慢
            // this.box1.style.marginLeft=this.picnum*this.picnum+'px';
            if(this.a<10){
                this.movelength=Math.ceil(this.length/(10-this.a));
                this.length=this.length-this.movelength;
                this.box1.style.marginLeft= this.box1.offsetLeft-this.movelength+'px';
                this.a++;               
            }else{
                // 位移完成后进行初始化
                clearInterval(this.change);
                this.settime;
                this.length=this.pic[0].offsetWidth;
                this.movelength=0;
                this.a=0;               
                this.extent();
                this.recovery();
                this.pages();
                // console.log(this.picnum);
                this.controlRadio();
                // 位置矫正，防止屏幕改变大小后图片错位
                this.box1.style.marginLeft=this.picnum*this.outbox.offsetWidth*(-1)+'px';
               
                
                this.picnum++;
                // this.pages();                
            }


        }
    }
}
</script>

<style>
.swiperbox{
    position: relative;
    width: 100%;
    overflow: hidden;
    left: 50%;
    transform: translate(-50%,0);
}
.swiperhome{
    width: 5000px;

}

.newq{
    float: left;
}
.radio{
    position:absolute;
    left: 50%;
    transform: translate(-50%,0);
    bottom: 10px;
    width: 50%;
    height: 20px;
    display: flex;
    justify-content:space-around;
    align-items: center;
}
.radio div{
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #fff;

}
.radio div:nth-child(1){
    background-color: yellowgreen;
}

</style>
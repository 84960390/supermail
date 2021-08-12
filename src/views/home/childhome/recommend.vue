<template>
  <div class="recommend">
      <div v-for="(item,i) in recommends" :key="i" class="commend">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>

      </div>
      

  </div>
</template>

<script>
export default {
    name:'recommend',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
        
    }
}
</script>

<style>
.recommend{
    margin-top: 10px;
    height: 130px;
    width: 100%;
    background-color: #fff;
    display: flex;
    border-bottom: 8px solid #eee;
    justify-content: space-around;
}
.commend{
    flex: 1;
}
.commend img{
    width: 80%;
    margin-left: 5px;
    margin-bottom: 8px;
}
.recommend a{
    text-align: center;
    font-size: 15px;
    color: #000;
    text-decoration: none;

}
</style>
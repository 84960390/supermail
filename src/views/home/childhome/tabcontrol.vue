<template>
  <div class="tabcontrol">
      <div v-for="(item,index) in category" :key="index" class="tabone" @click="tabclick(index)">
          <span :class="{selected:index==select}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'tabcontrol',
    props:{
        category:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            select:0
        }

    },
    methods:{
        tabclick(index){
            this.select=index;
            this.$emit('select-click',this.select)
        }
    }
}
</script>

<style>
.tabcontrol{
    width: 100%;
    height: 40px;
    display: flex;
    font-size:15px;
    font-weight: 500;
    background-color: #fff;
}
.tabcontrol .tabone{
    flex: 1;
    text-align: center;
}
.tabcontrol .tabone span{
    padding: 8px;
    line-height: 30px;
}
.selected{
    color: pink;
    border-bottom: 2px solid pink;
}

</style>
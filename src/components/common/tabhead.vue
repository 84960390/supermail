<template>
  <div class="head">
     <div class="left"><slot name="left"></slot></div>
     <div class="center"><slot name='center'></slot></div>
     <div class="right"><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {
    name:'tabhead'
}
</script>

<style>
.head{
    display: flex;
    height: 50px;
    width: 100%;
    color: deepskyblue;
    line-height: 50px;
}
.head .left,
.head .right{
    width: 60px;
}
.head .left{
    margin-left: 10px;
    text-align: left;
}
.head .right{
    margin-right: 10px;
    text-align: right;
}
.head .center{
   flex: 1;
   text-align: center;
}
.pinkhead{
    background-color: pink;
}


</style>
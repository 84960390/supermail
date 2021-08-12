<template>
  <div class="checkbox" :class='{notcheck:!itemChecked}' >
      <div :class='{checkBoxInner:itemChecked}'></div>

  </div>
</template>

<script>
export default {
    name:'checkbox',
    props:{
        itemChecked:{
            type:Boolean,
            default(){
                return false;
            }
        }
    },
    data(){
        return {
            // isChecked:false,
        }
    }


}
</script>

<style scoped>
.checkbox{
    width: 16px;
    height: 16px;
    /* background-color: #ccc; */
    border-radius: 50%;
}
.checkBoxInner{
    position: relative;
    width: 100%;
    height: 100%;
     border-radius: 50%;
    background-color: rgba(255, 60, 0, 0.753);
}
.checkBoxInner::after{
    content: '√';
    display: block;
    color: #fff;
    position: absolute;
    margin-left: 50%;
    margin-top: 50%;
    transform: translate(-50%,-50%);
}
.notcheck{
    border: 1px solid #ddd;
}


</style>